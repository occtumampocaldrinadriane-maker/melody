// Import Firebase database
import { db } from "./firebase.js";

// Import Firestore functions
import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";


// Get HTML elements
const letterJar = document.getElementById("letterJar");
const letterJarOverlay = document.getElementById("letterJarOverlay");
const closeLetterJar = document.getElementById("closeLetterJar");

const letterText = document.getElementById("letterText");
const sendLetter = document.getElementById("sendLetter");
const letterStatus = document.getElementById("letterStatus");


// Open letter jar
letterJar.addEventListener("click", () => {
    letterJarOverlay.classList.add("active");
});


// Close letter jar
closeLetterJar.addEventListener("click", () => {
    letterJarOverlay.classList.remove("active");
});


// Close when clicking outside the card
letterJarOverlay.addEventListener("click", (event) => {
    if (event.target === letterJarOverlay) {
        letterJarOverlay.classList.remove("active");
    }
});


// Close using Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        letterJarOverlay.classList.remove("active");
    }
});


// Submit a letter to Firebase
sendLetter.addEventListener("click", async () => {

    const message = letterText.value.trim();

    if (!message) {
        letterStatus.textContent = "Write a little something first. 🌷";
        return;
    }

    sendLetter.disabled = true;
    letterStatus.textContent = "Placing your letter in the jar... 💌";

    try {

        await addDoc(collection(db, "letters"), {
            message: message,
            createdAt: serverTimestamp()
        });

        letterStatus.textContent = "Your letter has been safely placed in the jar! 💗";

        letterText.value = "";

    } catch (error) {

        console.error("Error saving letter:", error);

        letterStatus.textContent =
            "Something went wrong. Please try again.";

    } finally {

        sendLetter.disabled = false;

    }

});