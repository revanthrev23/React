import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6yQRD0JAeSMJ3JvhGvOxRJBoohrbT7vA",
    authDomain: "disney-plus1.firebaseapp.com",
    projectId: "disney-plus1",
    storageBucket: "disney-plus1.appspot.com",
    messagingSenderId: "975378225144",
    appId: "1:975378225144:web:bd916f5729a396f2dc280d",
    measurementId: "G-8RNCRQ05WS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;