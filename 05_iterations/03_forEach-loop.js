// ============================================================
// forEach Loop
// ============================================================

// forEach() executes a callback function once for each element
// in the array.

const myArray = ["js", "ruby", "java", "python"];


// ============================================================
// Using an Anonymous Callback Function
// ============================================================

// The callback function has no name.

myArray.forEach(function (item) {
    // console.log(item);
});


// ============================================================
// Using an Arrow Function
// ============================================================

myArray.forEach((item) => {
    // console.log(item);
});


// ============================================================
// Passing a Function Reference
// ============================================================

function printMe(item) {
    console.log(item);
}

// Pass only the function reference (don't call it).

myArray.forEach(printMe);

// myArray.forEach(printMe);   // ✅ Correct
// myArray.forEach(printMe()); // ❌ Wrong


// ============================================================
// Callback Parameters
// ============================================================

// forEach() provides:
// 1. item  -> current element
// 2. index -> current index
// 3. array -> complete array being traversed

myArray.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});


// ============================================================
// Array of Objects
// ============================================================

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
];

// Access object properties using forEach()

myCoding.forEach((item) => {
    console.log(item.languageName);
});