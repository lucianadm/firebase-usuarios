// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPpFNs-RQJbdoKPa7ca8x4C3cWkP18Q38",
    authDomain: "usuarios-9a87b.firebaseapp.com",
    projectId: "usuarios-9a87b",
    storageBucket: "usuarios-9a87b.appspot.com",
    messagingSenderId: "1052180292656",
    appId: "1:1052180292656:web:40d16e60b221462b7979f5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);