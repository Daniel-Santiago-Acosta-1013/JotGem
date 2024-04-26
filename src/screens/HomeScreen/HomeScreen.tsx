import React from 'react';
import { View, Text } from 'react-native';
import NoteList from '../../components/NoteList/NoteList';
import Header from '../../components/Header/Header';
import { styles } from './HomeScreen.styles';

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Header />
            <NoteList />
            <Text style={styles.text}>¡Bienvenido a HomeScreen!</Text>
        </View>
    );
};

export default HomeScreen;