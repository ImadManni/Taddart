import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "***************",
  authDomain: "**********",
  projectId: "***********",
  storageBucket: "************************",
  messagingSenderId: "*********",
  appId: "******************************",
  measurementId: "********",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export the auth object
