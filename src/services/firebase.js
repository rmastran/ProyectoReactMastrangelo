// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9yUP29DgJZTAXSqrVWM8p5w_WjGS9fec",
  authDomain: "coder-firebase-renzo.firebaseapp.com",
  projectId: "coder-firebase-renzo",
  storageBucket: "coder-firebase-renzo.appspot.com",
  messagingSenderId: "819050558845",
  appId: "1:819050558845:web:a398d2326158b23cd40814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);