import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B3B3B',
        color: '#fff'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        backgroundColor: '#252525',
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }
});