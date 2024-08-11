import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './EditScreen.styles';
import { NavigationProp, RouteProp, StackActions } from '@react-navigation/native';

type RootStackParamList = {
    HomeScreen: undefined;
    EditScreen: { id: string };
};

export interface EditScreenProps {
    navigation: NavigationProp<RootStackParamList, 'EditScreen'>;
    route: RouteProp<RootStackParamList, 'EditScreen'>;
}

const EditScreen: React.FC<EditScreenProps> = ({ navigation, route }) => {
    const { id } = route.params;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Cargar la nota desde AsyncStorage cuando se monta el componente
    useEffect(() => {
        const loadNote = async () => {
            try {
                const note = await AsyncStorage.getItem(id);
                if (note) {
                    const { title, content } = JSON.parse(note);
                    setTitle(title);
                    setContent(content);
                }
            } catch (error) {
                console.error('Failed to load note', error);
            }
        };

        loadNote();
    }, [id]);

    // Función para actualizar la nota en AsyncStorage
    const updateNote = async () => {
        if (!title.trim() || !content.trim()) {
            Alert.alert('Validation Error', 'Both title and content are required.');
            return;
        }

        try {
            await AsyncStorage.setItem(id, JSON.stringify({ title, content }));
            navigation.dispatch(StackActions.replace('Home'));
        } catch (error) {
            console.error('Failed to update note', error);
        }
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.dispatch(StackActions.replace('Home'))}>
                    <Icon name="arrow-left" size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={updateNote}>
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

export default EditScreen;
