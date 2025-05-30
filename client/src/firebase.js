// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog1-443df.firebaseapp.com",
  projectId: "mern-blog1-443df",
  storageBucket: "mern-blog1-443df.firebasestorage.app",
  messagingSenderId: "37018752964",
  appId: "1:37018752964:web:0709c4cec27f8e238c7691"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);