import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { registerForPushNotificationsAsync } from './src/modules/Notifications';
import { useEffect } from 'react';

export default function App() {
  
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
