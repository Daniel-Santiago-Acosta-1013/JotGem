import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './HomeScreen.styles';
import NoteList from '../../components/NoteList/NoteList';

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <NoteList/>
            <Text style={styles.text}>¡Bienvenido a HomeScreen!</Text>
        </View>
    );
};

export default HomeScreen;