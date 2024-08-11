import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        flex: 1,
        width: '100%',
        backgroundColor: '#3B3B3B',
        paddingVertical: 14,
        paddingHorizontal: 20,
        color: '#fff',
        marginRight: 10,
        paddingLeft: 10,
        borderRadius: 20,
    },
    closeButton: {
        color: '#CCCCCC',
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: 0}, {translateX: -20}],
        zIndex: 1,
    },
});
