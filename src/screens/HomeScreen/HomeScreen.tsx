import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import NoteList from '../../components/NoteList/NoteList';
import Header from '../../components/Header/Header';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './HomeScreen.styles';

type RootStackParamList = {
    HomeScreen: undefined;
    NoteScreen: undefined;
};

interface HomeScreenProps {
    navigation: NavigationProp<RootStackParamList, 'HomeScreen'>;
}


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

    const goToAddNote = () => {
        navigation.navigate('NoteScreen');
    };

    return (
        <View style={styles.container}>
            <Header />
            <NoteList />
            <TouchableOpacity onPress={goToAddNote} style={styles.addButton}>
                <Icon name="plus" size={24} color={"#fff"} />
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;