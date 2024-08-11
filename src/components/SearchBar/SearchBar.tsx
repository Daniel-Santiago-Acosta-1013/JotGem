import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from "./SearchBar.styles";

interface SearchBarProps {
    onClose: () => void;
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose, onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (text: string) => {
        setSearchQuery(text);
        onSearch(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={handleInputChange}
                value={searchQuery}
                placeholder="Buscar..."
                placeholderTextColor="#CCCCCC"
            />
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Icon name="x" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;
