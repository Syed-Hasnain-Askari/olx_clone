import firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
     // Project Settings => Add Firebase to your web app
     messagingSenderId: "1234567890",
});
const messaging = initializedFirebaseApp.messaging();
export { messaging };