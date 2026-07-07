// ============================================================
// Truthy & Falsy Values
// ============================================================

const userEmail = "";   // Empty string -> falsy
const userMail = [];    // Empty array -> truthy

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// ============================================================
// Falsy Values
// ============================================================

// These are the only falsy values in JavaScript:
//
// false
// 0
// -0
// 0n (BigInt)
// "" (empty string)
// null
// undefined
// NaN

// Everything except the above values is truthy.


// ============================================================
// Truthy Values
// ============================================================

// Examples:
//
// "0"
// "false"
// " " (string containing a space)
// []
// {}
// function(){}


// ============================================================
// Checking for an Empty Array
// ============================================================

// Arrays are truthy, even when empty.

if (userMail.length === 0) {
    console.log("Array is Empty");
}


// ============================================================
// Checking for an Empty Object
// ============================================================

const emptyObj = {};

// Object.keys() returns an array containing all keys.
// If its length is 0, the object has no properties.

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}


// ============================================================
// Loose Equality (==) - Unexpected Results
// ============================================================

// JavaScript performs type coercion with ==
//
// false == 0    // true
// false == ""   // true
// 0 == ""       // true

// Prefer strict equality (===) to avoid unexpected behavior.


// ============================================================
// Nullish Coalescing Operator (??)
// ============================================================

// The ?? operator only checks for:
// - null
// - undefined
//
// It returns the first value that is NOT null or undefined.

let val1;

// val1 = 5 ?? 10;              // 5
// val1 = null ?? 10;           // 10
// val1 = undefined ?? 15;      // 15
val1 = null ?? 10 ?? 20;        // 10 (first non-nullish value)

console.log(val1);


// ============================================================
// Ternary Operator
// ============================================================

// Syntax:
// condition ? expressionIfTrue : expressionIfFalse;

const iceTeaPrice = 100;

iceTeaPrice <= 80
    ? console.log("Less than 80")
    : console.log("More than 80");