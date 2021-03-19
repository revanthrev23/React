import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCaNT2vgSUka-oowE_Aj05ZcvQkuQJaj8k",
    authDomain: "tinder-c15b2.firebaseapp.com",
    projectId: "tinder-c15b2",
    storageBucket: "tinder-c15b2.appspot.com",
    messagingSenderId: "553420257374",
    appId: "1:553420257374:web:fdf8833c6a41026db8dccf",
    measurementId: "G-YHK8K221SH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;