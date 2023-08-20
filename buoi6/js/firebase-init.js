// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWN3zsylKgSzA-F7WqhJWEhV7TkYwpHy8",
  authDomain: "pokedex-8d4ab.firebaseapp.com",
  projectId: "pokedex-8d4ab",
  storageBucket: "pokedex-8d4ab.appspot.com",
  messagingSenderId: "751582009184",
  appId: "1:751582009184:web:9f19205aec83c79ba93005",
  measurementId: "G-HX3T9WHN81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);