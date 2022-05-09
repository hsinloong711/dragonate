// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuAhWd8TsI_AaivqKvw0uWJ7eE4NU3QG8",
  authDomain: "dragonate-bc9a8.firebaseapp.com",
  projectId: "dragonate-bc9a8",
  storageBucket: "dragonate-bc9a8.appspot.com",
  messagingSenderId: "899286179762",
  appId: "1:899286179762:web:4ffb04fdffd9b4b9e1ceab",
  measurementId: "G-WXSS5FYSJJ",
};

// Initialise firebase
initializeApp(firebaseConfig);

// Initialise services
const db = getFirestore();

export { db };
