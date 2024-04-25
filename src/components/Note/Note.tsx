import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './Note.styles';

interface NoteProps {
    id: string;
    title: string;
    onPress: () => void;
    color: string;
}

const Note: React.FC<NoteProps> = ({ id, title, onPress, color }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.noteContainer, { backgroundColor: color }]}>
            <Text style={styles.noteTitle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Note;
