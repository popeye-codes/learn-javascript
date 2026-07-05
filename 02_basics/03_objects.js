// ================= Objects =================

// Singleton
// Object.create() -> Constructor method

// 🌟 Objects created using object literals {} are NOT singleton.
// 🌟 Objects created using constructors (e.g., Object.create(), new Object())
//    create singleton objects.

// ================= Object Literals =================

const mySymbol = Symbol("key1");

const jsUser = {
    // key: value
    // By default, property names (keys) are strings.
    // The only primitive that can also be used directly as a key is Symbol.
    name: "Shivam",

    // Explicit string key
    "full name": "Shivam Raj",

    // 🌟 Symbol as key -> MUST use []
    [mySymbol]: "mykey1",

    location: "Jaipur",
    email: "shivamraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// ========== Accessing Properties ==========

// Preferred way
console.log(jsUser.email);

// Bracket notation
console.log(jsUser["email"]);

// String keys containing spaces must use []
console.log(jsUser["full name"]);

// Symbol keys must also use []
console.log(jsUser[mySymbol]);
console.log(typeof jsUser[mySymbol]); // string

// ========== Modifying Properties ==========

jsUser.email = "chat@gmail.com";

// Object.freeze(jsUser); // Prevents further modifications

jsUser.email = "freeze@gmail.com";

console.log(jsUser);

// ========== Adding Methods ==========

jsUser.greeting = function () {
    console.log("Hello JS User");
};

jsUser.greeting2 = function () {
    console.log(`Hello JS User, ${this.name}`);
};

jsUser.greeting();
jsUser.greeting2();


// ======================================================
// 🌟 Revision Notes
// ======================================================

// ✔ Prefer dot notation (.)
// jsUser.email

// Use bracket notation [] when:
// 1. Key contains spaces
//    jsUser["full name"]

// 2. Key is a Symbol
//    jsUser[mySymbol]

// 3. Property name is stored inside a variable
//    jsUser[key]

// Object.freeze(obj)
// - Prevents modifying existing properties.
// - Prevents adding new properties.
// - Prevents deleting properties.

// 'this' inside an object method
// - Refers to the current object.
// - Example:
//   this.name

// ---> 🌟Note:

// to access value mostly try to do with dot(.) - operator

// special cases :

// 1. when key is explicitly define as string -> "key" then access with ["key"]

// 2. when need to use "Symbol" as key, then access by [key]