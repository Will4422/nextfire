import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD-94SxjvIMmUq0ctgJeGhG2LY_fledBtM",
    authDomain: "nextfire-d7b47.firebaseapp.com",
    projectId: "nextfire-d7b47",
    storageBucket: "nextfire-d7b47.appspot.com",
    messagingSenderId: "688320829160",
    appId: "1:688320829160:web:e5921251e4b30f1be7db5d",
    measurementId: "G-EDGBEX9W44"
  };

// this condition makes sure that we only initialize our app once
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();