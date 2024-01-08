// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWm5fly1Wm6IvprHNsngjZmd_2quBoskc",
    authDomain: "test-upload-firebase-126df.firebaseapp.com",
    projectId: "test-upload-firebase-126df",
    storageBucket: "test-upload-firebase-126df.appspot.com",
    messagingSenderId: "155365594320",
    appId: "1:155365594320:web:98a9044862f936cc837ad5",
    measurementId: "G-V0N84TCKGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);