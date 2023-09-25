// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "movies-13bc8.firebaseapp.com",
  projectId: "movies-13bc8",
  storageBucket: "movies-13bc8.appspot.com",
  messagingSenderId: "1032118882761",
  appId: "1:1032118882761:web:447608e10954c00d5e1818",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "Reviews");
export const usersRef = collection(db, "users");
export default app;
