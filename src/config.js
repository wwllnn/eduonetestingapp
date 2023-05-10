// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDALLw__8PnZNT4_gY4wgUSX4i_qLGSfuM",
  authDomain: "eduonetestingapp.firebaseapp.com",
  databaseURL: "https://eduonetestingapp-default-rtdb.firebaseio.com",
  projectId: "eduonetestingapp",
  storageBucket: "eduonetestingapp.appspot.com",
  messagingSenderId: "263461140968",
  appId: "1:263461140968:web:59ddfe79b0d9ffe13f0c5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { db, auth, provider }