// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "echoblog-3f540.firebaseapp.com",
  projectId: "echoblog-3f540",
  storageBucket: "echoblog-3f540.appspot.com",
  messagingSenderId: "193839378773",
  appId: "1:193839378773:web:72e071296066858480ffdc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);