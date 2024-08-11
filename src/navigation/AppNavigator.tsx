import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import NoteScreen from '../screens/NoteScreen/NoteScreen';
import EditScreen from '../screens/EditScreen/EditScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NoteScreen" component={NoteScreen} />
      <Stack.Screen
        name="EditScreen"
        component={EditScreen as React.ComponentType<any>}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
