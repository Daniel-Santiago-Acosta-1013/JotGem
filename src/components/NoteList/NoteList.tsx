import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Note from '../Note/Note';
import { NavigationProp } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './NoteList.styles';

interface NoteListProps {
    navigation: NavigationProp<any>;
}

const noteColors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];

const NoteList: React.FC<NoteListProps> = ({ navigation }) => {
    const [notes, setNotes] = useState<{ id: string; title: string; }[]>([]);

    const loadNotes = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const storedNotes = await AsyncStorage.multiGet(keys);
            const loadedNotes = storedNotes.map(([key, value]) => {
                if (value) {
                    const note = JSON.parse(value);
                    return { id: key, title: note.title };
                }
                return { id: key, title: '' };
            });
            setNotes(loadedNotes);
        } catch (error) {
            console.error('Failed to load notes', error);
        }
    };

    const deleteNote = async (id: string) => {
        try {
            await AsyncStorage.removeItem(id);
            setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
        } catch (error) {
            console.error('Failed to delete note', error);
        }
    };

    const handleDelete = (id: string) => {
        Alert.alert(
            'Delete Note',
            'Are you sure you want to delete this note?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', onPress: () => deleteNote(id), style: 'destructive' },
            ],
            { cancelable: true }
        );
    };

    useEffect(() => {
        loadNotes();
    }, []);

    if (notes.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Image
                    source={require('../../../assets/images/createNote.png')}
                    style={styles.emptyImage}
                />
                <Text style={styles.emptyText}>Create your first note !</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={notes}
            renderItem={({ item, index }) => (
                <Swipeable
                    renderRightActions={() => (
                        <View style={styles.deleteButtonContainer}>
                            <Icon
                                name="trash-2"
                                size={24}
                                color="#fff"
                                onPress={() => handleDelete(item.id)}
                            />
                        </View>
                    )}
                >
                    <Note
                        title={item.title}
                        color={noteColors[index % noteColors.length]}
                        onPress={() => navigation.navigate('EditScreen', { id: item.id })}
                        id={item.id}
                    />
                </Swipeable>
            )}
            keyExtractor={(item) => item.id}
            style={styles.list}
        />
    );
};

export default NoteList;
