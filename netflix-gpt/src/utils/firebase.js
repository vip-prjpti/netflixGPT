// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh53fFodZUo0IXJjHZJZisg1gWmINI6R4",
  authDomain: "netflixgpt-830ce.firebaseapp.com",
  projectId: "netflixgpt-830ce",
  storageBucket: "netflixgpt-830ce.firebasestorage.app",
  messagingSenderId: "85283445908",
  appId: "1:85283445908:web:a517df70d039edda48e881",
  measurementId: "G-4T8WC5FTVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();