import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from "./SearchBar.styles"

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Aquí puedes manejar la lógica de búsqueda
        console.log(searchQuery);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setSearchQuery}
                value={searchQuery}
                placeholder="Buscar..."
            />
            <Button onPress={handleSearch} title="Buscar" />
        </View>
    );
};


export default SearchBar;