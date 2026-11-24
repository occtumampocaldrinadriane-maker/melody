// Import Firebase services
import { auth, db } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

import {
    collection,
    getDocs,
    query,
    orderBy,
    doc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";


// YOUR ADMIN UID
const ADMIN_UID = "CMGZT10WhRZRXWG4eAlSICudav53";


// HTML ELEMENTS
const loginSection = document.getElementById("loginSection");
const inboxSection = document.getElementById("inboxSection");

const loginForm = document.getElementById("loginForm");
const adminEmail = document.getElementById("adminEmail");
const adminPassword = document.getElementById("adminPassword");

const loginStatus = document.getElementById("loginStatus");
const loginButton = document.getElementById("loginButton");

const logoutButton = document.getElementById("logoutButton");

const letterList = document.getElementById("letterList");
const inboxStatus = document.getElementById("inboxStatus");

const letterCount = document.getElementById("letterCount");
const refreshLetters = document.getElementById("refreshLetters");

const letterModal = document.getElementById("letterModal");
const closeLetterModal = document.getElementById("closeLetterModal");

const letterDate = document.getElementById("letterDate");
const letterContent = document.getElementById("letterContent");

const deleteLetterButton = document.getElementById("deleteLetterButton");


// CURRENT LETTER
let selectedLetterId = null;


// LOGIN
loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email = adminEmail.value.trim();
    const password = adminPassword.value;

    loginButton.disabled = true;
    loginStatus.textContent = "Opening your little inbox... 💌";

    try {

        const result = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        if (result.user.uid !== ADMIN_UID) {

            await signOut(auth);

            loginStatus.textContent =
                "This account is not authorized.";

            return;
        }

        loginStatus.textContent = "";

    } catch (error) {

        console.error(error);

        loginStatus.textContent =
            "Login failed. Please check your details.";

    } finally {

        loginButton.disabled = false;

    }

});


// CHECK LOGIN STATUS
onAuthStateChanged(auth, async (user) => {

    if (user && user.uid === ADMIN_UID) {

        loginSection.hidden = true;
        inboxSection.hidden = false;

        await loadLetters();

    } else {

        loginSection.hidden = false;
        inboxSection.hidden = true;

    }

});


// LOAD LETTERS
async function loadLetters() {

    letterList.replaceChildren();

    inboxStatus.textContent = "Looking for your letters... 💌";

    try {

        const lettersQuery = query(
            collection(db, "letters"),
            orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(lettersQuery);

        letterCount.textContent = snapshot.size;

        if (snapshot.empty) {
            

            inboxStatus.textContent =
                "Your letter jar is still waiting for its first letter. 🌷";

            return;
        }

        inboxStatus.textContent =
            `${snapshot.size} little letter(s) in your inbox. 💗`;

        snapshot.forEach((letterDocument) => {

            const letter = letterDocument.data();

            const card = document.createElement("button");

            card.type = "button";
            card.className = "letter-card";

            const heading = document.createElement("h3");
            heading.textContent = "💌 A Little Letter";

            const preview = document.createElement("p");
            preview.textContent =
                letter.message.slice(0, 90) +
                (letter.message.length > 90 ? "..." : "");

            const date = document.createElement("p");

            date.textContent = letter.createdAt
                ? letter.createdAt.toDate().toLocaleString()
                : "Just received";

            card.append(heading, preview, date);

            card.addEventListener("click", () => {
                openLetter(letterDocument.id, letter);
            });

            letterList.appendChild(card);

        });

    } catch (error) {

        console.error(error);

        inboxStatus.textContent =
            "Couldn't load your letters. Please try again.";

    }

}


// OPEN LETTER
function openLetter(id, letter) {

    selectedLetterId = id;

    letterContent.textContent = letter.message;

    letterDate.textContent = letter.createdAt
        ? letter.createdAt.toDate().toLocaleString()
        : "Date unavailable";

    letterModal.classList.add("active");

}


// CLOSE LETTER
closeLetterModal.addEventListener("click", () => {

    letterModal.classList.remove("active");

    selectedLetterId = null;

});


// DELETE LETTER
deleteLetterButton.addEventListener("click", async () => {

    if (!selectedLetterId) return;

    const confirmed = confirm(
        "Are you sure you want to delete this letter?"
    );

    if (!confirmed) return;

    try {

        await deleteDoc(
            doc(db, "letters", selectedLetterId)
        );

        letterModal.classList.remove("active");

        selectedLetterId = null;

        await loadLetters();

    } catch (error) {

        console.error(error);

        alert("Unable to delete this letter.");

    }

});


// LOGOUT
logoutButton.addEventListener("click", async () => {

    try {

        await signOut(auth);

    } catch (error) {

        console.error(error);

        alert("Unable to log out.");

    }

});

// REFRESH INBOX

refreshLetters.addEventListener("click", async () => {

    refreshLetters.disabled = true;
    refreshLetters.textContent = "Refreshing... 🌷";

    await loadLetters();

    refreshLetters.disabled = false;
    refreshLetters.textContent = "🔄 Refresh Letters";

});