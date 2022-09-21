// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYACHT_jDkrVE1Dwo8k8-9AS1MFg51YNI",
  authDomain: "srts-db81a.firebaseapp.com",
  projectId: "srts-db81a",
  storageBucket: "srts-db81a.appspot.com",
  messagingSenderId: "889478557855",
  appId: "1:889478557855:web:3fa8f0f235eda7b570b2aa",
  measurementId: "G-RZD0MKHYDZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
