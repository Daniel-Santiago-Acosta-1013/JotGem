// src/components/Note/Note.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Note.styles';

interface NoteProps {
    id: string;
    title: string;
    onPress: () => void;
    color: string;  // Añadir propiedad de color
}

const Note: React.FC<NoteProps> = ({ id, title, onPress, color }) => {
    return (
        <View style={[styles.noteContainer, { backgroundColor: color }]}>  // Aplicar el color pasado como propiedad
            <Text style={styles.noteTitle} onPress={onPress}>
                {title}
            </Text>
        </View>
    );
};

export default Note;
