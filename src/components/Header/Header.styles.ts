import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        marginTop: 40,
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: '400',
    },
    headerIcons: {
        flexDirection: 'row',
        display: 'flex',
        gap: 20,
    },
    iconStyle: {
        color: 'white',
        width: 50,
        height: 50,
        borderRadius: 12,
        backgroundColor: '#3B3B3B',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
