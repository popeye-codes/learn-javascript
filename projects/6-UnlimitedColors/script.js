// Project: Random Background Color Changer
// Concepts Covered:
// - Random HEX Color Generator
// - setInterval()
// - clearInterval()
// - DOM Manipulation
// - Event Listeners

// Generate a random HEX color
const randomColor = function () {
    const hexVal = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hexVal[Math.floor(Math.random() * 16)];
    }

    return color;
};

// Stores the interval ID returned by setInterval()
let intervalReference;

const startChangingColor = function () {

    // Prevent multiple intervals from being created
    if (!intervalReference) {
        intervalReference = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function () {
    clearInterval(intervalReference);

    // Reset the reference so a new interval can be started later
    intervalReference = null;
};

// Start changing the background color
document.querySelector("#start").addEventListener("click", startChangingColor);

// Stop changing the background color
document.querySelector("#stop").addEventListener("click", stopChangingColor);