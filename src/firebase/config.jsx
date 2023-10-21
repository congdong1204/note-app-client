// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYMYBa_XTN8ezfc0d_wA9s6Asb6ZHvo3M",
  authDomain: "note-app-mern.firebaseapp.com",
  projectId: "note-app-mern",
  storageBucket: "note-app-mern.appspot.com",
  messagingSenderId: "27453656931",
  appId: "1:27453656931:web:b151b90d90549a979f0d56",
  measurementId: "G-MVXDTYN82Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);