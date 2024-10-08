import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationProp, RouteProp, StackActions } from '@react-navigation/native';
import { styles } from './EditScreen.styles';

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
    const [originalTitle, setOriginalTitle] = useState('');
    const [originalContent, setOriginalContent] = useState('');

    // Cargar la nota desde AsyncStorage cuando se monta el componente
    useEffect(() => {
        const loadNote = async () => {
            try {
                const note = await AsyncStorage.getItem(id);
                if (note) {
                    const { title, content } = JSON.parse(note);
                    setTitle(title);
                    setContent(content);
                    setOriginalTitle(title);
                    setOriginalContent(content);
                }
            } catch (error) {
                console.error('Failed to load note', error);
            }
        };

        loadNote();
    }, [id]);

    useEffect(() => {
        const handleBackPress = () => {
            if (title !== originalTitle || content !== originalContent) {
                Alert.alert(
                    'Guardar cambios',
                    'Tienes cambios sin guardar. ¿Quieres guardar antes de salir?',
                    [
                        {
                            text: 'No',
                            onPress: () => navigation.dispatch(StackActions.replace('Home')),
                            style: 'cancel',
                        },
                        {
                            text: 'Sí',
                            onPress: () => updateNote(),
                        },
                    ],
                    { cancelable: true }
                );
                return true;
            }
            return false;
        };

        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }, [title, content, originalTitle, originalContent]);

    // Función para actualizar la nota en AsyncStorage
    const updateNote = async () => {
        if (!title.trim() || !content.trim()) {
            Alert.alert('Error de validación', 'Tanto el título como el contenido son obligatorios.');
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
                <TouchableOpacity
                    onPress={() => {
                        if (title !== originalTitle || content !== originalContent) {
                            Alert.alert(
                                'Guardar cambios',
                                'Tienes cambios sin guardar. ¿Quieres guardar antes de salir?',
                                [
                                    {
                                        text: 'No',
                                        onPress: () => navigation.dispatch(StackActions.replace('Home')),
                                        style: 'cancel',
                                    },
                                    {
                                        text: 'Sí',
                                        onPress: () => updateNote(),
                                    },
                                ],
                                { cancelable: true }
                            );
                        } else {
                            navigation.dispatch(StackActions.replace('Home'));
                        }
                    }}
                    style={styles.styleIcon}
                >
                    <Icon name="arrow-left" size={24} color={"#fff"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={updateNote} style={styles.styleIcon}>
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

export default EditScreen;
