import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {            
    apiKey: "AIzaSyBnOVq5RKG-tsHg90M8FD0zm1CevxsPrJI",
    authDomain: "linkdin-clone-8d04c.firebaseapp.com",
    projectId: "linkdin-clone-8d04c",
    storageBucket: "linkdin-clone-8d04c.appspot.com",
    messagingSenderId: "432874706065",
    appId: "1:432874706065:web:60bb6f6af608959ead5b30",
    measurementId: "G-ZJ09F81269"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  export{ auth ,db};