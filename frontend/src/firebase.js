// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi6hYGppG1a-vvzxyQLbxYOBFduybsAuk",
  authDomain: "our-readers-community.firebaseapp.com",
  projectId: "our-readers-community",
  storageBucket: "our-readers-community.appspot.com",
  messagingSenderId: "47980687254",
  appId: "1:47980687254:web:1856f35793890f55a037b7",
  measurementId: "G-52JH5XWNNR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth =  getAuth(app)