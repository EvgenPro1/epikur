import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAzSCoZlMYMEWV7NuXMvcfHw1IofZQLnp8",
    authDomain: "epikur-web.firebaseapp.com",
    projectId: "epikur-web",
    storageBucket: "epikur-web.appspot.com",
    messagingSenderId: "76356809158",
    appId: "1:76356809158:web:353da980d287a33bf782c7",
    measurementId: "G-WHS4QZVNHG"
};

export const fire = firebase.initializeApp(firebaseConfig)
