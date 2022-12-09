
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , onAuthStateChanged } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librarie
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    apiKey: "AIzaSyCuHD1ttgLuZyDFbXcSkXazBhf4l1RhTj0",
  authDomain: "simulation-japanasset.firebaseapp.com",
  projectId: "simulation-japanasset",
  storageBucket: "simulation-japanasset.appspot.com",
  messagingSenderId: "1028604580397",
  appId: "1:1028604580397:web:350c564755d9978c675ea4",
  measurementId: "G-GR198YWC2W"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID ,
  // measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENTID
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
onAuthStateChanged(auth, user => { console.log(user); });