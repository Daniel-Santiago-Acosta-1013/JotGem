import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './NoteScreen.styles';
import { NavigationProp, StackActions } from '@react-navigation/native';

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

    const handleBackPress = () => {
        if (title.trim() || content.trim()) {
            Alert.alert(
                'Guardar Cambios',
                'Tienes cambios sin guardar. ¿Quieres guardar antes de salir?',
                [
                    {
                        text: 'No',
                        onPress: () => navigation.dispatch(StackActions.replace('Home')),
                        style: 'cancel',
                    },
                    {
                        text: 'Sí',
                        onPress: () => saveNote(),
                    },
                ],
                { cancelable: true }
            );
            return true;
        }
        navigation.dispatch(StackActions.replace('Home'));
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }, [title, content]);

    // Function to save note to AsyncStorage and navigate back to HomeScreen
    const saveNote = async () => {
        if (!title.trim() || !content.trim()) {
            Alert.alert('Error de validación', 'Tanto el título como el contenido son obligatorios.');
            return;
        }

        try {
            // Generate a unique ID for the note
            const id = new Date().toISOString();
            // Save the note with the ID as the key
            await AsyncStorage.setItem(id, JSON.stringify({ title, content }));
            // Reset the stack and navigate to the HomeScreen
            navigation.dispatch(StackActions.replace('Home'));
        } catch (error) {
            // Error saving note
            console.error(error);
        }
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={handleBackPress}
                    style={styles.styleIcon}
                >
                    <Icon name="arrow-left" size={24} color={"#fff"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={saveNote} style={styles.styleIcon}>
                    <Icon name="save" size={24} color={"#fff"} />
                </TouchableOpacity>
            </View>
            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="Title"
                style={styles.titleInput}
                placeholderTextColor={"#CCCCCC"}
                multiline
            />
            <TextInput
                value={content}
                onChangeText={setContent}
                placeholder="Type something..."
                style={styles.contentInput}
                placeholderTextColor={"#CCCCCC"}
                multiline
            />
        </KeyboardAvoidingView>
    );
};

export default NoteScreen;
