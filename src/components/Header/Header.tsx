import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import SearchBar from '../SearchBar/SearchBar';
import { styles } from './Header.styles';

const Header: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (query: string) => {
        onSearch(query);
    };

    return (
        <View style={styles.headerContainer}>
            {isSearching ? (
                <SearchBar
                    onClose={() => setIsSearching(false)}
                    onSearch={handleSearch}
                />
            ) : (
                <>
                    <Text style={styles.headerTitle}>Notes</Text>
                    <View style={styles.headerIcons}>
                        <TouchableOpacity
                            style={styles.iconStyle}
                            onPress={() => setIsSearching(true)}
                        >
                            <Icon name="search" size={24} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconStyle}>
                            <Icon name="alert-circle" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
};

export default Header;
