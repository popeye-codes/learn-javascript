// ============================================================
// for...of Loop
// ============================================================

// Used to iterate over iterable objects like:
// Arrays, Strings, Maps, Sets, etc.

// Examples:
// ["", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World";

for (const ch of greetings) {
    // console.log(`Each character is: ${ch}`);
}


// ============================================================
// Map in JavaScript
// ============================================================

// Map is a collection of key-value pairs.
//
// ✔ Maintains insertion order.
// ✔ Keys are unique.
// ✔ A key can be of any data type.
// ✔ Iterable using for...of.

const map = new Map();

map.set("IN", "India");
map.set("US", "United States");
map.set("FR", "France");

// Duplicate key
map.set("IN", "India"); // No new entry is added because the key already exists.

console.log(map);


// ============================================================
// Iterating over a Map
// ============================================================

for (const [key, value] of map) {
    console.log(key, ":-", value);
}


// ============================================================
// Plain Object
// ============================================================

const myObject = {
    game1: "NFS",
    game2: "Spiderman"
};


// ❌ Objects are NOT iterable with for...of.

// for (const [key, value] of myObject) {
//     console.log(key, value);
// }

// To iterate over an object, use:
// Object.keys()
// Object.values()
// Object.entries()