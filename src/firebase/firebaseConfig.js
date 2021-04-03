import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDHk9iyFbHkupan57y0z8yxazLzTDKQsGA",
  authDomain: "project-management-4d6ba.firebaseapp.com",
  databaseURL: "https://project-management-4d6ba-default-rtdb.firebaseio.com",
  projectId: "project-management-4d6ba",
  storageBucket: "project-management-4d6ba.appspot.com",
  messagingSenderId: "403916640176",
  appId: "1:403916640176:web:4acf7fdcd61a5898af1075",
  measurementId: "G-G6ZH77ED2E",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const db = fb.firestore();
