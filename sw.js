self.addEventListener('push', (e) => {
  const data = e.data.json();
  self.registration.showNotification("Hmm", {
    body:data.text(),
    icon:'https://cdn-icons-png.flaticon.com/512/7058/7058778.png',
  });
});
