import * as Notifications from 'expo-notifications';

export async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Remember to check your notes! 📋",
      body: "It's been 2 hours since your last check.",
    },
    trigger: {
      seconds: 2 * 60 * 60,
      repeats: true,
    },
  });
}

export async function registerForPushNotificationsAsync() {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('You need to enable notifications to use this feature!');
      return;
    }
  }
  await schedulePushNotification();
}
