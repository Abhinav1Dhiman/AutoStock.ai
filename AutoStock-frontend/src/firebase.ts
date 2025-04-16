import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAOcQEZzyBmOCh8cBqLUKDJYeHW-n6gmTM",
    authDomain: "autostock-db81e.firebaseapp.com",
    projectId: "autostock-db81e",
    storageBucket: "autostock-db81e.firebasestorage.app",
    messagingSenderId: "998563754979",
    appId: "1:998563754979:web:c2688c67c83533bd9666d6",
    measurementId: "G-QFW95JWXVK"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
