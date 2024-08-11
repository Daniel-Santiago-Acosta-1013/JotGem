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
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#9A9A9A',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
