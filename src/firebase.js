import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCscyD64SEfnHwyHVjQ4mn60zq_St6ILko",
    authDomain: "discord-clone-a65c4.firebaseapp.com",
    projectId: "discord-clone-a65c4",
    storageBucket: "discord-clone-a65c4.appspot.com",
    messagingSenderId: "1169824652",
    appId: "1:1169824652:web:27b2c0de4f76328a0c94a9",
    measurementId: "G-0TBR3P5PBJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;