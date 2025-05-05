import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvnKWFE5FzpV1MhrZzbF5eoR3yUHuEBhs",
  authDomain: "taddart-money-tracker.firebaseapp.com",
  projectId: "taddart-money-tracker",
  storageBucket: "taddart-money-tracker.appspot.com",
  messagingSenderId: "246597599441",
  appId: "1:246597599441:web:a85775206971648d5005f0",
  measurementId: "G-01VCBTWDDY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export the auth object
