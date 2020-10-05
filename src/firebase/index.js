import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAqTdMaRGpQhlvweS2iiSUtxhVomnN-YmI",
    authDomain: "soria-shoes.firebaseapp.com",
    databaseURL: "https://soria-shoes.firebaseio.com",
    projectId: "soria-shoes",
    storageBucket: "soria-shoes.appspot.com",
    messagingSenderId: "588361458527",
    appId: "1:588361458527:web:5c719914dede3980a5ccea"
  });

  export function getFirebase() {
    return app;
  }

  export function getFirestore() {
    return firebase.firestore(app);
  }
  