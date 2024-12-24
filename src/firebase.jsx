// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqbUurctS6lgGgnxTwXYA7t1XVLzm5ldk",
    authDomain: "harshproject-f7039.firebaseapp.com",
    databaseURL: "https://harshproject-f7039-default-rtdb.firebaseio.com",
    projectId: "harshproject-f7039",
    storageBucket: "harshproject-f7039.firebasestorage.app",
    messagingSenderId: "93572985694",
    appId: "1:93572985694:web:7896c2968f7612d80fd5cf",
    measurementId: "G-MFD1FYSVZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);