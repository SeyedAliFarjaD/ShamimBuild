importScripts("./firebase/firebase-app.js");
importScripts("./firebase/firebase-messaging.js");

/** Initialize the Firebase application */
firebase.initializeApp({
  apiKey: "AIzaSyA5-gikB3iSptH_8AhZeSlr93eD-MRwKIE",
  authDomain: "kapp-ee148.firebaseapp.com",
  projectId: "kapp-ee148",
  storageBucket: "kapp-ee148.appspot.com",
  messagingSenderId: "1056226934975",
  appId: "1:1056226934975:web:88a61f454611ea189c060a",
});

/** Connect and return Firebase Messaging instance */
const messaging = firebase.messaging();

/** Listen to incomming notifications in the background and show them to the user */
messaging.onBackgroundMessage(messaging, (payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    image: payload.notification.image,
    icon: payload.notification.icon,
  });
});
