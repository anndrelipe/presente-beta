// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA6SPPgVxfuD4EgrfKOYnTHa_DL5HbIGA",
  authDomain: "presente-4cdc9.firebaseapp.com",
  projectId: "presente-4cdc9",
  storageBucket: "presente-4cdc9.appspot.com",
  messagingSenderId: "511184361720",
  appId: "1:511184361720:web:d7ea631a0227baba48830d"
};

const firebaseClient = initializeApp(firebaseConfig); // Initialize Firebase

export default firebaseClient