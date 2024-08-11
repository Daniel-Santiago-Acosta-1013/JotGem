import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  list: {
    padding: 16,
    width: '100%',
  },
  emptyContainer: {
    marginTop: -80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  emptyText: {
    fontSize: 24,
    marginTop: 5,
    color: '#FFF',
  },
  deleteButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    backgroundColor: 'red',
    borderRadius: 10,
    marginVertical: 8,
  },
});
