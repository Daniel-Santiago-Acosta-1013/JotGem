import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { styles } from './Header.styles';

const Header: React.FC = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Notes</Text>
            <View style={styles.headerIcons}>
                <TouchableOpacity onPress={() => { /* lógica para búsqueda */ }}>
                    <IconFeather name="search" size={24} /> {/* Ícono de búsqueda */}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { /* lógica para mostrar información */ }}>
                    <IconFeather name="info" size={24} /> {/* Ícono de información */}s
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;