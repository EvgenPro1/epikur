import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAfZuEpqDQfuQzbN8tH-3eM-tTF7IgwMMU",
    authDomain: "adminshop-39aa6.firebaseapp.com",
    projectId: "adminshop-39aa6",
    storageBucket: "adminshop-39aa6.appspot.com",
    messagingSenderId: "495010748475",
    appId: "1:495010748475:web:b8c93b495e34ce3b05e41e",
    measurementId: "G-HCVX9D9MQP"
};

export const fire = firebase.initializeApp(firebaseConfig)