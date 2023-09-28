// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSSlXVCiBZTL6ZQavMK0TsCKbTe5zA-Q8",
  authDomain: "practice-253b7.firebaseapp.com",
  projectId: "practice-253b7",
  storageBucket: "practice-253b7.appspot.com",
  messagingSenderId: "895131698742",
  appId: "1:895131698742:web:273ad2de8ad9fb0b887a97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
