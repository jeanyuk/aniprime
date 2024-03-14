import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "sample.firebaseapp.com",
  projectId: "react-auth-6788d",
  storageBucket: "react.appspot.com",
  messagingSenderId: "999999999999",
  appId: "1:999999999:web:3f7ff4766e2b89ca5d32f4",
  measurementId: "G-VJISA9SUIIJ",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
