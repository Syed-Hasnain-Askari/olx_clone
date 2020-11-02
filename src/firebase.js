import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7uc7-U-2lHS_xMd5tAnX2VwqOUCIn5aU",
    authDomain: "olx-clone0.firebaseapp.com",
    databaseURL: "https://olx-clone0.firebaseio.com",
    projectId: "olx-clone0",
    storageBucket: "olx-clone0.appspot.com",
    messagingSenderId: "333633644896",
    appId: "1:333633644896:web:016e4d01984101d7fb1605",
    measurementId: "G-R6L26HT10C"
  };

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    promt: "select_account",
  });

  export const signInWithGoogle = () => {
    auth.signInWithRedirect(provider);
  };

  
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();