import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCq2LhSBVUJNLgaH_CoRgu3hxMmmvzZCtg",
  authDomain: "final-workout-tracker.firebaseapp.com",
  projectId: "final-workout-tracker",
  storageBucket: "final-workout-tracker.firebasestorage.app",
  messagingSenderId: "1055776422546",
  appId: "1:1055776422546:web:5dbbf8c0cff6ee77a3444b",
  measurementId: "G-NGG9KEH85T"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); 
}

export const auth = getAuth(app);
export default app;