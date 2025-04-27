// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBo7kKflGid4B3F4hWKuuTOgNjcKEeTn4A",
    authDomain: "workouttracker-19673.firebaseapp.com",
    projectId: "workouttracker-19673",
    storageBucket: "workouttracker-19673.firebasestorage.app",
    messagingSenderId: "128004146193",
    appId: "1:128004146193:web:5f76870836dc96dbf99db0",
    measurementId: "G-6B1EYLQD9S"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
