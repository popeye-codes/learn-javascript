// =======================
// Date in JavaScript
// =======================

let myDate = new Date();

// Different date formats
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate); // object


// =======================
// Creating Dates
// =======================

// Months start from 0 (0 = January, 11 = December)
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());

// Year, Month, Day, Hour, Minute, Second
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3, 54);
console.log(myCreatedDate2.toLocaleString());

// YYYY-MM-DD format
let myCreatedDate3 = new Date("2026-07-04");
console.log(myCreatedDate3.toLocaleString());

// MM-DD-YYYY format
let myCreatedDate4 = new Date("01-14-2026");
console.log(myCreatedDate4.toLocaleString());


// =======================
// Timestamps
// =======================

let myTimeStamp = Date.now(); // Current timestamp in milliseconds

// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());

console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds


// =======================
// Date Getters
// =======================

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1); // Months are 0-based
console.log(newDate.getDay()); // 0 = Sunday, 6 = Saturday


// =======================
// Most Used: Formatting with toLocaleString()
// =======================

// "long"	Saturday
// "short"	Sat
// "narrow"	S
let weekday = newDate.toLocaleString("default", {
    weekday: "long"
});

console.log(weekday); // Example: Saturday