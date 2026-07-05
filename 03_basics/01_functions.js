// ================= Functions =================

function sayMyName() {
    console.log("Hello");
}

// sayMyName();


// ========== Function without return value ==========

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

// const result = addTwoNumbers(3, 2);

// console.log(result); // undefined


// ========== Function returning a value ==========

function sum(number1, number2) {
    return number1 + number2;
}

const returnedResult = sum(2, 3);

// console.log(returnedResult);


// ========== Default Parameters ==========

// Default value is used only when no argument
// (or undefined) is passed.

function loginUserMessage(username = "sam") {

    // Empty string ("") and undefined are falsy values.
    if (!username) {
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

// console.log(loginUserMessage("Shivam"));

console.log(loginUserMessage());
// Output: "sam just logged in"


// ========== Rest Parameter (...) ==========

// 🌟 Collects remaining arguments into an array.

function calculateCartPrice(val1, val2, ...num1) {

    // val1 -> first argument
    // val2 -> second argument
    // num1 -> remaining arguments as an array

    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 600, 1000));


// ========== Passing Object to a Function ==========

const user = {
    username: "John Snow",
    price: 9999
};

function handleObject(anyObject) {
    console.log(
        `Username is ${anyObject.username} and price is ${anyObject.price}`
    );
}

// handleObject(user);

// Object can also be passed directly.

handleObject({
    username: "John",
    price: 199
});


// ========== Passing Array to a Function ==========

const myArray = [2000, 400, 500];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myArray));

// Array can also be passed directly.

console.log(returnSecondValue([100, 287, 680, 500]));


// ======================================================
// 🌟 Revision Notes
// ======================================================

// Function without return
// - Returns undefined by default.

// return
// - Immediately exits the function.
// - Returns a value to the caller.

// Default Parameter
// - Used when no argument (or undefined) is passed.

// Rest Parameter (...)
// - Collects remaining arguments into an array.

// Objects and arrays can be passed directly
// or through variables.