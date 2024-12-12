// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt81FIEl5FLrsk93mBHdCVo4KqxholGes",
  authDomain: "smart-haven-8d0a0.firebaseapp.com",
  databaseURL: "https://smart-haven-8d0a0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-haven-8d0a0",
  storageBucket: "smart-haven-8d0a0.firebasestorage.app",
  messagingSenderId: "767847292943",
  appId: "1:767847292943:web:c3bb36f10a58c98559c37a",
  measurementId: "G-J4JCB1WEZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Firestore
const db = getFirestore(app);
// Initialize Realtime Database
const database = getDatabase(app);

// Export the initialized services
export { database, auth, db };