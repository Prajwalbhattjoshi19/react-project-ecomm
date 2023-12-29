// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtam1KJC7Wt-xhxxI4PTMI1Q9zzhvG7DY",
  authDomain: "ecom-login-cart.firebaseapp.com",
  projectId: "ecom-login-cart",
  storageBucket: "ecom-login-cart.appspot.com",
  messagingSenderId: "76591783310",
  appId: "1:76591783310:web:bbce15b8c9c8a32d4d58df",
  measurementId: "G-F9VM0ZZ89Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);