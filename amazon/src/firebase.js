import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBWcDopiDsbJuCMDdPm_GhCS4kx9LLxH7U",
    authDomain: "fir-3ca99.firebaseapp.com",
    projectId: "fir-3ca99",
    storageBucket: "fir-3ca99.appspot.com",
    messagingSenderId: "117687773947",
    appId: "1:117687773947:web:83a82d43b633300e8dde5e",
    measurementId: "G-8H66Q1894B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};