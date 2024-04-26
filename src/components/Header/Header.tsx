import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './Header.styles';

const Header: React.FC = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Notes</Text>
            <View style={styles.headerIcons}>
                <TouchableOpacity style={styles.iconStyle}>
                    <Icon name="menu" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle}>
                    <Icon name="refresh" size={24} color="#sfff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;