import React from 'react';
import Note from '../Note/Note';
import { FlatList } from 'react-native';
import { styles } from './NoteList.styles';

const noteColors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];
const notes = [
    { id: '1', title: 'UI concepts worth existing' },
    { id: '2', title: 'Book Review: The Design of Everyday Things' },
];

const NoteList: React.FC = () => {
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
