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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/eNs4L_kKeR4:APA91bEKTdxPPX_tqzMdK8bSblQUuTixrM-IMeJPep5LypGakP5E3JUsxwOfNAUktL98dhV66YXqce1zFhFvrarylUbexPxmVBgGunpXBaKKTAK1tGRzUg55Ja4KvDaW2WKb0HDh_dD1","expirationTime":null,"keys":{"p256dh":"BOa794Um4XZxwD-ubq7cRPGKqqExSI4L2znY-fNYLcVp2SMkkKPPoEOAJ6Agkx1_vAGwuaNifKhRCf1IzxTN4Oo","auth":"Yk-13znhTzCM0G4szA2Etw"}};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
