// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzbfuvKq52114VX9BjTVGmppl5fSapviQ",
  authDomain: "pokemon-a4db5.firebaseapp.com",
  projectId: "pokemon-a4db5",
  storageBucket: "pokemon-a4db5.appspot.com",
  messagingSenderId: "217934247769",
  appId: "1:217934247769:web:2e9a147a9f0af2a9d9be48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//npm install -g firebase-tools