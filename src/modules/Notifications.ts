import * as Notifications from 'expo-notifications';

export async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "¡Recuerda revisar tus notas! 📋",
      body: "Han pasado 2 horas desde tu última revisión.",
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
      alert('¡Necesitas habilitar las notificaciones para usar esta función! Por favor, habilítalas en los ajustes de tu dispositivo.');
      return;
    }
  }
  await schedulePushNotification();
}
