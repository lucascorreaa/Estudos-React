import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyA5Bd-JrRYb41BDzBnfG7ZDOeRNhbBVNRc",
  authDomain: "meuapp-11e3b.firebaseapp.com",
  databaseURL: "https://meuapp-11e3b-default-rtdb.firebaseio.com",
  projectId: "meuapp-11e3b",
  storageBucket: "meuapp-11e3b.appspot.com",
  messagingSenderId: "150227812208",
  appId: "1:150227812208:web:be3ff1d55de5921374d9b5",
  measurementId: "G-VLBDFZ9P55"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;
