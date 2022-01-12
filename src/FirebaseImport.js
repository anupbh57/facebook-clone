import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {

    apiKey: "AIzaSyBC6XRuudFZPm9ykVV1xFnIk2jI-X31xus",
    authDomain: "facebook-clone-9021a.firebaseapp.com",
    projectId: "facebook-clone-9021a",
    storageBucket: "facebook-clone-9021a.appspot.com",
    messagingSenderId: "721434298195",
    appId: "1:721434298195:web:ff80cdfea05b16158a83a6",
    measurementId: "G-N2QQ8ZX0N1"
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
