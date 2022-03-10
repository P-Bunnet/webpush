self.addEventListener('push', (e) => {
  self.registration.showNotification(e)
});
