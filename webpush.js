const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BFhtO8WoSbO6ihpDd0TJPiJ_yf7M8RIQTSl7gq3G4IoGMGnPmFOTb1aP0ql3ZGNPKmw5qJx0c6DREiSpyv_dEik',
  privateKey: 'tReaMRAXQuylNsWckc7RhsGYKmgLqRgZ3giD7iuPEwE'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  "endpoint":"https://fcm.googleapis.com/fcm/send/cSEUyCF8qG4:APA91bFlZHLAVkt5mDXWS5xqnoUSvXHR-leAdRNaw0-DR--z_9ZFYNMFZ21Ks2ciFVXiJIsJXQmvC_zsmxYuPrBKln7sqzD4nob4r-ISWYOrRqdNUef8DWIen8PkwPOexkgxs4AfydG_",
  "expirationTime":null,
  "keys":{
     "p256dh":"BODaUNRdLZlOqa0H1yD_RYmisVMhisBn6eJuveAaYhVhkVk_8cooisQmwHFwWV4BaF-0SkQkpNWE2DyeWOKhJtU",
     "auth":"PRzju9KD5Hmqake57sy2OQ"
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
