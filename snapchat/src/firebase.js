import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3zx1yVubrKtdZzoXQ4cNg7Pg13DR_CO4",
    authDomain: "snapchat-f14f3.firebaseapp.com",
    projectId: "snapchat-f14f3",
    storageBucket: "snapchat-f14f3.appspot.com",
    messagingSenderId: "892356024102",
    appId: "1:892356024102:web:d1f584f174e992e2de53e7",
    measurementId: "G-6RGQSP5PXS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };