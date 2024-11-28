import { initializeApp } from "firebase/app";
import {getAuth} from   "firebase/auth";
import {getFirestore} from   "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCrdIc2g9czrlynJmyDqQIN1KcnpTORMGY",
  authDomain: "news-89ca2.firebaseapp.com",
  projectId: "news-89ca2",
  storageBucket: "news-89ca2.firebasestorage.app",
  messagingSenderId: "524553080824",
  appId: "1:524553080824:web:e912b6f537d1ab4088100d"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);