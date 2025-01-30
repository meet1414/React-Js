import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDWgVGA_EV_n8TEO0rGRlZ6PSc2oifKcsQ",
  authDomain: "recipe-book-a3560.firebaseapp.com",
  projectId: "recipe-book-a3560",
  storageBucket: "recipe-book-a3560.firebasestorage.app",
  messagingSenderId: "1002751397396",
  appId: "1:1002751397396:web:353ac16697509af7cfe101",
  measurementId: "G-2V6Z08QZ3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);



