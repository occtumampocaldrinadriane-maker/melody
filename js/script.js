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


// =================================
// RAINY GARDEN MODE
// =================================

const rainToggle = document.getElementById("rainToggle");
const rainContainer = document.getElementById("rainContainer");

let rainActive = false;

function createRain() {

    rainContainer.innerHTML = "";

    for (let i = 0; i < 120; i++) {

        const drop = document.createElement("span");

        drop.classList.add("raindrop");

        drop.style.left = Math.random() * 100 + "%";

        drop.style.animationDuration =
            (0.6 + Math.random() * 0.7) + "s";

        drop.style.animationDelay =
            (Math.random() * 3) + "s";

        drop.style.opacity =
            (0.3 + Math.random() * 0.7);

        drop.style.height =
            (15 + Math.random() * 20) + "px";

        rainContainer.appendChild(drop);

    }

}

rainToggle.addEventListener("click", function () {

    rainActive = !rainActive;

    document.body.classList.toggle("rainy-mode", rainActive);

    if (rainActive) {

        createRain();

        rainToggle.textContent = "☀️ Stop Rain";

    } else {

        rainToggle.textContent = "🌧️ Rainy Day";

    }

});

// =================================
// TWINKLING NIGHT STARS
// =================================

const starContainer = document.getElementById("starContainer");

// CREATE STARS

for (let i = 0; i < 100; i++) {

    const star = document.createElement("span");

    star.classList.add("star");

    // RANDOM STAR POSITION

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    // RANDOM TWINKLING SPEED

    star.style.animationDuration =
        (1 + Math.random() * 3) + "s";

    // RANDOM ANIMATION DELAY

    star.style.animationDelay =
        Math.random() * 3 + "s";

    starContainer.appendChild(star);

}




// STORYBOOK SCROLL REVEAL

const storySections = document.querySelectorAll(".story-section");

const storyObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.25
    }
);

storySections.forEach(function (section) {
    storyObserver.observe(section);
});






// =====================================
// THE LITTLE MEMORY JAR
// =====================================

const memoryJar = document.getElementById("memoryJar");
const memoryOverlay = document.getElementById("memoryOverlay");
const closeMemory = document.getElementById("closeMemory");
const memoryMessage = document.getElementById("memoryMessage");
const anotherMemory = document.getElementById("anotherMemory");

// Little messages inside the jar

const memoryMessages = [

    "Some people make ordinary days feel a little more special. 🌷",

    "Never forget that you deserve kindness, happiness, and peace. 💗",

    "Even the smallest steps forward are worth celebrating. 🌱",

    "May you always find something beautiful in every new day. 🌼",

    "The world is a little brighter because of the good things you bring into it. ✨",

    "Remember to give yourself the same kindness you give to others. 🦋",

    "Some of life's sweetest moments are the ones we never planned. 🌸",

    "Keep dreaming, keep growing, and never stop believing in yourself. 🌻",

    "You are allowed to take your time. Beautiful things grow slowly. 🌿",

    "May your days be filled with little reasons to smile. ☀️"

];

// Keep track of previously displayed messages

let remainingMemories = [];

function getRandomMemory() {

    // Refill the list when all messages have been displayed

    if (remainingMemories.length === 0) {

        remainingMemories = [...memoryMessages];

    }

    const randomIndex = Math.floor(
        Math.random() * remainingMemories.length
    );

    return remainingMemories.splice(randomIndex, 1)[0];

}


// Display a random memory

function showMemory() {

    memoryMessage.textContent = getRandomMemory();

}


// Open the memory jar

memoryJar.addEventListener("click", function () {

    memoryOverlay.classList.add("active");

    showMemory();

});


// Show another memory

anotherMemory.addEventListener("click", function () {

    showMemory();

});


// Close the memory jar

closeMemory.addEventListener("click", function () {

    memoryOverlay.classList.remove("active");

});


// Close when clicking outside the card

memoryOverlay.addEventListener("click", function (event) {

    if (event.target === memoryOverlay) {

        memoryOverlay.classList.remove("active");

    }

});


// Close using Escape key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        memoryOverlay.classList.remove("active");

    }

});