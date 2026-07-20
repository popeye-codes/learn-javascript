// =======================
// Property Descriptors
// =======================

// Object.getOwnPropertyDescriptor(object, property)
// Returns metadata (descriptor) of a property.

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

/*
Output:
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
}
*/

// writable: false     -> Value cannot be changed.
// enumerable: false   -> Property won't appear in loops/Object.keys().
// configurable: false -> Property cannot be deleted or reconfigured.


// -----------------------
// Math.PI Example
// -----------------------

// console.log(Math.PI);
// Math.PI = 5;      // Won't change because writable is false.
// console.log(Math.PI);


// =======================
// Custom Object
// =======================

const fruits = {
    name: "apple",
    price: 120,
    isAvailable: true,

    orderChai: function () {
        console.log("Not worked");
    }
};

console.log(fruits);

// Every object's property has a descriptor.
console.log(Object.getOwnPropertyDescriptor(fruits, "name"));

/*
Output:
{
    value: 'apple',
    writable: true,
    enumerable: true,
    configurable: true
}
*/


// =======================
// Object.defineProperty()
// =======================

// We can modify the descriptor of an existing property.

Object.defineProperty(fruits, "name", {
    writable: false,
    enumerable: false
});

// Now "name" cannot be modified.
// Also, since enumerable is false,
// it won't appear in Object.keys(), Object.entries(),
// or for...in loops.

// console.log(Object.getOwnPropertyDescriptor(fruits, "name"));


// =======================
// Iteration
// =======================

// Object.entries() returns only enumerable properties.

for (let [key, value] of Object.entries(fruits)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
}

/*
Output:

price: 120
isAvailable: true

"name" is skipped because enumerable is false.
"orderChai" is skipped because we filtered out functions.
*/