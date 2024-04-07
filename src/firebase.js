import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD3-ptTZG8r15xFY11B9ywLJM53juMI_rQ",
  authDomain: "responsiveb-assignment.firebaseapp.com",
  projectId: "responsiveb-assignment",
  storageBucket: "responsiveb-assignment.appspot.com",
  messagingSenderId: "161848447793",
  appId: "1:161848447793:web:8b8f50b4d2c263f0d61610",
  measurementId: "G-CVRQVXVXJ9",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
