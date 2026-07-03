// ===============================
// JavaScript Math
// ===============================

// Math is a built-in object.
console.log(Math);



// ============== Common Math Methods ==============

// Returns the absolute (positive) value.
console.log(Math.abs(-4)); // 4

// Rounds to the nearest integer.
console.log(Math.round(4.7)); // 5

// Always rounds UP.
console.log(Math.ceil(4.2)); // 5

// Always rounds DOWN.
console.log(Math.floor(4.9)); // 4

// Smallest value.
console.log(Math.min(4, 3, 6, 8)); // 3

// Largest value.
console.log(Math.max(4, 3, 6, 8)); // 8



// ================ Math.random() ================


// Returns a random decimal number in the range [0, 1)
console.log(Math.random());

// Random decimal between 1 and 11 (1 inclusive, 11 exclusive)
console.log(Math.random() * 10 + 1);

// Random integer between 1 and 10 (both inclusive)
console.log(Math.floor(Math.random() * 10) + 1);



// ======== Random Number in a Custom Range ==========

const min = 10;
const max = 20;

// Formula:
// Math.floor(Math.random() * (max - min + 1)) + min
//
// max - min + 1  -> Total numbers in the range (inclusive)
// Math.random()  -> Random decimal in [0, 1)
// * (...)        -> Scales it to the desired range
// Math.floor()   -> Removes decimal part
// + min          -> Shifts the range to start from 'min'

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: Random integer between 10 and 20 (inclusive)


/* Note :
const min = 10;

const max = 20;

Formula:
Math.floor(Math.random() * (max - min + 1)) + min

Explanation:

(max - min + 1)
-> Gives the total number of values in the range.
-> +1 ensures the maximum value (max) is also included.

Math.random()
-> Generates a random decimal number in the range [0, 1).

Math.floor()
-> Removes the decimal part and returns an integer.

+ min
-> Shifts the range so that the smallest possible value is 'min'.

Example:
min = 10
max = 20

Possible outputs:
10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20

*/