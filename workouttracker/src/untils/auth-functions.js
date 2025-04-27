import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
  } from "firebase/auth";
  import { auth } from "../auth/firebase-config";
  
  // Signup Function
  export const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  
  // Login Function
  export const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  
  // Logout Function
  export const logOut = () => signOut(auth);
  
  // Auth state listener Function
  export const onAuthChange = (callback) =>
    onAuthStateChanged(auth, callback);
  