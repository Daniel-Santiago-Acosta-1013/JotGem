import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Note from '../Note/Note';
import { styles } from './NoteList.styles';

const noteColors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];

const NoteList: React.FC = () => {
    const [notes, setNotes] = useState<{ id: string; title: string; }[]>([]);

    // Function to load notes from AsyncStorage
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

    useEffect(() => {
        loadNotes();
    }, []);

    // Conditionally render the image if no notes exist
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
                <Note title={item.title} color={noteColors[index % noteColors.length]} onPress={() => { }} id={item.id} />
            )}
            keyExtractor={(item) => item.id}
            style={styles.list}
        />
    );
};

export default NoteList;
