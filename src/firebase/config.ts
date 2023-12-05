// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjHs1HSbhx_fptSLCeP7krqIfGdmkd57o",
    authDomain: "control-hot-keyword.firebaseapp.com",
    databaseURL: "https://control-hot-keyword-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "control-hot-keyword",
    storageBucket: "control-hot-keyword.appspot.com",
    messagingSenderId: "155871966056",
    appId: "1:155871966056:web:ce31c5ffa506cff0835cdd",
    measurementId: "G-8XPBMX55J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);