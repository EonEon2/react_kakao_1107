// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBkCMy_rF0mH0IasXzcvaMWY01VblwMhY",
    authDomain: "eoneon-abb63.firebaseapp.com",
    projectId: "eoneon-abb63",
    storageBucket: "eoneon-abb63.firebasestorage.app",
    messagingSenderId: "1075285412715",
    appId: "1:1075285412715:web:d77e8db641c39a1c6d1a2e",
    measurementId: "G-N09XLPQSHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);