import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDzA2Ljt1wVp6PjCjvLEHjHMzM3EaUxhF8",
    authDomain: "real-time-feedback-kenya.firebaseapp.com",
    databaseURL: "https://real-time-feedback-kenya-default-rtdb.firebaseio.com",
    projectId: "real-time-feedback-kenya",
    storageBucket: "real-time-feedback-kenya.firebasestorage.app",
    messagingSenderId: "103782955902",
    appId: "1:103782955902:web:8d006f1af4d94220c6d12f",
    measurementId: "G-MPRLJ0PVSP"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);