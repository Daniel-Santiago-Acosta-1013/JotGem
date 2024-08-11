import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
    },
    header: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#252525',
    },
    styleIcon: {
        backgroundColor: '#3B3B3B',
        padding: 16,
        borderRadius: 10,
    },
    titleInput: {
        fontSize: 44,
        color: '#fff',
        borderBottomColor: '#333',
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 20,
    },
    contentInput: {
        fontSize: 18,
        color: '#fff',
        flex: 1,
        padding: 16,
        textAlignVertical: 'top',
    },
    saveButton: {
        marginRight: 16,
    },
    backButton: {
        marginLeft: 16,
    },
});
