import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBWD7TMPd8sCX1lyF-035JBaxj4JbPoG4M",
    authDomain: "fir-d4f66.firebaseapp.com",
    projectId: "fir-d4f66",
    storageBucket: "fir-d4f66.appspot.com",
    messagingSenderId: "307300444927",
    appId: "1:307300444927:web:0751c911ba4488c9bdbaca",
    measurementId: "G-JDN48M6BHL"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;