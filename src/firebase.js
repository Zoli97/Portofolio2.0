// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtGUKT4r-GESFn-urqNlCL9kejkc3q3Ok",
  authDomain: "modernportofolio.firebaseapp.com",
  projectId: "modernportofolio",
  storageBucket: "modernportofolio.appspot.com",
  messagingSenderId: "426570339882",
  appId: "1:426570339882:web:4bf3ead9f2578ca66d5553",
  measurementId: "G-M2MKEZ0EKM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
