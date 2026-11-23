// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSdQQquXqvDQVWSeJ8uQFjZVj6dYhsEMM",
    authDomain: "dear-little-garden.firebaseapp.com",
    projectId: "dear-little-garden",
    storageBucket: "dear-little-garden.firebasestorage.app",
    messagingSenderId: "1093376986957",
    appId: "1:1093376986957:web:5b50d0eaa0da904ee87104",
    measurementId: "G-9XVDFBKXYS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);


// Export Firebase services
export { app, db, auth };