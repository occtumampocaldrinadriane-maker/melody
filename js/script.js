const enterButton = document.getElementById("enterButton");

const welcomeScreen = document.getElementById("welcomeScreen");
const gardenScreen = document.getElementById("gardenScreen");

enterButton.addEventListener("click", function () {

    welcomeScreen.style.display = "none";

    gardenScreen.classList.add("active");

});

// INTERACTIVE FLOWERS

const flowers = document.querySelectorAll(".flower");

const messageCard = document.getElementById("messageCard");

const flowerMessage = document.getElementById("flowerMessage");

const closeMessage = document.getElementById("closeMessage");

// Open flower message
flowers.forEach(function (flower) {

    flower.addEventListener("click", function () {

        const message = flower.dataset.message;

        flowerMessage.textContent = message;

        messageCard.classList.add("show");

    });

});

// Close flower message
closeMessage.addEventListener("click", function () {

    messageCard.classList.remove("show");

});

// MELODY'S LITTLE GARDEN CAT

const gardenCat = document.getElementById("gardenCat");
const catEmoji = document.getElementById("catEmoji");
const catMessage = document.getElementById("catMessage");
const catMessageText = document.getElementById("catMessageText");

const catMessages = [
    "Meow! Hello there! 🐾",
    "Psst... you're doing a great job today!",
    "This little garden is happier with you in it. 🌷",
    "Sending you a tiny purr of happiness! 🐈",
];

let catMessageIndex = 0;

gardenCat.addEventListener("click", function () {

    catMessageText.textContent = catMessages[catMessageIndex];

    catMessage.classList.add("show");

    catEmoji.textContent = "😺";

    catMessageIndex++;

    if (catMessageIndex >= catMessages.length) {
        catMessageIndex = 0;
    }

});

// HIDDEN SWEETS

const sweets = document.querySelectorAll(".sweet");

sweets.forEach(function (sweet) {

    sweet.addEventListener("click", function () {

        const message = sweet.dataset.message;

        flowerMessage.textContent = message;

        messageCard.classList.add("show");

    });

});

// LIGHT AND DARK MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️ Day Mode";

    } else {

        themeToggle.textContent = "🌙 Night Mode";

    }

});

// BACKGROUND MUSIC

const musicToggle = document.getElementById("musicToggle");
const backgroundMusic = document.getElementById("backgroundMusic");

musicToggle.addEventListener("click", async function () {

    if (backgroundMusic.paused) {

        try {
            await backgroundMusic.play();
            musicToggle.textContent = "⏸ Pause Music";

        } catch (error) {

            console.log("Music could not be played:", error);
            musicToggle.textContent = "🎵 Try Again";

        }

    } else {

        backgroundMusic.pause();
        musicToggle.textContent = "🎵 Play Music";

    }

});

// FALLING FLOWER PETALS

const petalContainer = document.getElementById("petalContainer");

const petalSymbols = ["🌸", "🌼", "🌷"];

for (let i = 0; i < 15; i++) {

    const petal = document.createElement("span");

    petal.classList.add("petal");

    petal.textContent =
        petalSymbols[Math.floor(Math.random() * petalSymbols.length)];

    petal.style.left = Math.random() * 100 + "%";

    petal.style.animationDuration =
        (6 + Math.random() * 8) + "s";

    petal.style.animationDelay =
        (Math.random() * 10) + "s";

    petal.style.fontSize =
        (12 + Math.random() * 12) + "px";

    petalContainer.appendChild(petal);
}

// =================================
// MELODY'S LITTLE LETTER
// =================================

const melodyOpenLetter = document.getElementById("openLetter");
const melodyCloseLetter = document.getElementById("closeLetter");
const melodyLetterOverlay = document.getElementById("letterOverlay");

// OPEN LETTER
melodyOpenLetter.addEventListener("click", function () {

    melodyLetterOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

});

// CLOSE LETTER
function closeMelodyLetter() {

    melodyLetterOverlay.classList.remove("active");

    document.body.style.overflow = "";

}

// CLOSE USING THE X BUTTON
melodyCloseLetter.addEventListener("click", closeMelodyLetter);

// CLOSE WHEN CLICKING OUTSIDE THE LETTER
melodyLetterOverlay.addEventListener("click", function (event) {

    if (event.target === melodyLetterOverlay) {
        closeMelodyLetter();
    }

});

// CLOSE USING ESCAPE KEY
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeMelodyLetter();
    }

});

// =================================
// HIDDEN GARDEN SURPRISE
// =================================

const secretBottle = document.getElementById("secretBottle");
const secretMessage = document.getElementById("secretMessage");
const closeSecret = document.getElementById("closeSecret");

// Open the surprise
secretBottle.addEventListener("click", function () {
    secretMessage.classList.add("active");
    document.body.style.overflow = "hidden";
});

// Close the surprise
function closeSecretMessage() {
    secretMessage.classList.remove("active");
    document.body.style.overflow = "";
}

closeSecret.addEventListener("click", closeSecretMessage);

// Close when clicking outside the card
secretMessage.addEventListener("click", function (event) {
    if (event.target === secretMessage) {
        closeSecretMessage();
    }
});

// Close using Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeSecretMessage();
    }
});

// =================================
// SUNSET MODE
// =================================

const sunsetToggle = document.getElementById("sunsetToggle");

sunsetToggle.addEventListener("click", function () {

    document.body.classList.toggle("sunset-mode");

    if (document.body.classList.contains("sunset-mode")) {
        sunsetToggle.innerHTML = "☀️ Daytime Mode";
    } else {
        sunsetToggle.innerHTML = "🌅 Sunset Mode";
    }

});