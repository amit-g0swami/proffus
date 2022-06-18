import firebase from "firebase";
import 'firebase/firestore';
import "firebase/auth"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfwmEAYAY2VY1ybJDGf_c-QJ4i6a27tNE",
    authDomain: "mrstudio-350e1.firebaseapp.com",
    projectId: "mrstudio-350e1",
    storageBucket: "mrstudio-350e1.appspot.com",
    messagingSenderId: "927836673566",
    appId: "1:927836673566:web:bc7bceddd79978dffb400f",
    measurementId: "G-YHFDS7NFKV"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage };