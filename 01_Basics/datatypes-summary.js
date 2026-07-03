// primitive -> it's call by value

// 7 - types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

// Symbol -> assingne unique value
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);

const bigNumber = 2464244446267572n;

// Reference (Non Primitive) 

// Arrays, Objects, Functions

// Arrays []
const heros = ["Stark", "Spider-Men", "Tony-Stark"];

//objects {key: value}
let myobj ={
    name : "Shiva",
    age: 22
}

// function
const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof(outsideTemp));
console.log(typeof(myFunction));


// dataTypes typeof()
console.log(typeof 10);              // "number"
console.log(typeof "Hello");         // "string"
console.log(typeof true);            // "boolean"
console.log(typeof null);            // "object"
console.log(typeof undefined);       // "undefined"
console.log(typeof Symbol("id"));    // "symbol"
console.log(typeof 123n);            // "bigint"

console.log(typeof [1, 2, 3]);       // "object"
console.log(typeof {name: "Raj"});   // "object"
console.log(typeof function() {});   // "function"

// Primitive data types and typeof values

// Number    => "number"
// String    => "string"
// Boolean   => "boolean"
// null      => "object"      // This is a historical bug in JavaScript
// undefined => "undefined"
// Symbol    => "symbol"
// BigInt    => "bigint"

// Non-primitive (Reference types)

// Array     => "object"
// Object    => "object"
// Function  => "function"(object-function)    // Functions are special objects