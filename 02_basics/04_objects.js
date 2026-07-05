// ================= Objects (Part 2) =================

// Object created using constructor -> Singleton object
const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


// ========== Nested Objects ==========

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shivam",
            lastname: "Raj"
        }
    }
};

// console.log(regularUser.fullname.userfullname.firstname);


// ========== Merging Objects ==========

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// ❌ Creates nested objects
// const obj3 = { obj1, obj2 };
// Output:
// {
//   obj1: { '1': 'a', '2': 'b' },
//   obj2: { '3': 'a', '4': 'b' }
// }


// Object.assign(target, source1, source2, ...)
// {} is the target object.
// Remaining objects are source objects.
// All properties are copied into the target object.

// const obj3 = Object.assign({}, obj1, obj2);

// 🌟 Best way: Use spread operator
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);


// ========== Array of Objects (Example: Data from Database) ==========

const users = [
    {
        id: 1,
        email: "s2gmail.com"
    },
    {
        id: 2,
        email: "s3gmail.com"
    },
    {
        id: 3,
        email: "s4gmail.com"
    }
];

// Access object inside array
console.log(users[1].email);


// ========== Useful Object Methods ==========

console.log(tinderUser);

// Returns all keys as an array
console.log(Object.keys(tinderUser));

// Returns all values as an array
console.log(Object.values(tinderUser));

// Returns an array of [key, value] pairs
console.log(Object.entries(tinderUser));

// Checks whether the object has the given property
console.log(tinderUser.hasOwnProperty("isLoggedIn"));






// ======================================================
// 🌟 Revision Notes
// ======================================================

// Object.assign(target, ...sources)
// - Copies properties from source objects into the target object.
// - Returns the target object.

// 🌟 Best way to merge objects
// const merged = { ...obj1, ...obj2 };

// Object.keys(obj)
// - Returns an array of all keys.

// Object.values(obj)
// - Returns an array of all values.

// Object.entries(obj)
// - Returns an array of [key, value] pairs.

// obj.hasOwnProperty(key)
// - Returns true if the property exists directly on the object.
// - Retur`ns false otherwise.
