import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './NoteScreen.styles';
import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
    HomeScreen: undefined;
    NoteScreen: undefined;
};

interface NoteScreenProps {
    navigation: NavigationProp<RootStackParamList, 'NoteScreen'>;
}

const NoteScreen: React.FC<NoteScreenProps> = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Function to save note to AsyncStorage and navigate back to HomeScreen
    const saveNote = async () => {
        try {
            // Generate a unique ID for the note
            const id = new Date().toISOString();
            // Save the note with the ID as the key
            await AsyncStorage.setItem(id, JSON.stringify({ title, content }));
            // Go back to the HomeScreen
            navigation.goBack();
        } catch (error) {
            // Error saving note
            console.error(error);
        }
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Icon name="arrow-left" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={saveNote}>
                    <Icon name="save" size={24} />
                </TouchableOpacity>
            </View>
            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="Title"
                style={styles.titleInput}
            />
            <TextInput
                value={content}
                onChangeText={setContent}
                placeholder="Type something..."
                style={styles.contentInput}
                multiline
            />
        </KeyboardAvoidingView>
    );
};

export default NoteScreen;