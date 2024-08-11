import React, { useEffect, useState } from 'react';
import Note from '../Note/Note';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
