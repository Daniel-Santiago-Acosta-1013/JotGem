import * as Notifications from 'expo-notifications';

export async function programarNotificacionPush() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "¡Recuerda revisar tus notas! 📋",
      body: "Han pasado 2 horas desde tu última revisión.",
      sound: 'default',
      priority: Notifications.AndroidNotificationPriority.HIGH,
    },
    trigger: {
      seconds: 2 * 60 * 60,
      repeats: true,
    },
  });
}

export async function registrarNotificacionesPushAsync() {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('¡Necesitas habilitar las notificaciones para usar esta función! Por favor, habilítalas en los ajustes de tu dispositivo.');
    return;
  }

  // Cancelar notificaciones previas si ya existen, para evitar duplicados
  await Notifications.cancelAllScheduledNotificationsAsync();

  // Programar la nueva notificación
  await programarNotificacionPush();
}
