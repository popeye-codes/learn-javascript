// ====================== Scope ======================

// var c = 300;

let a = 300;

if (true) {
    // Block Scope
    let a = 10;
    const b = 20;

    // var is function-scoped, not block-scoped.
    // That's why 'c' would still be accessible outside this block.
    // var c = 30;

    // console.log("Inside if:", a);
}

// console.log(a); // 300 (Global variable)
// console.log(b); // ❌ Error (Block scoped)
// console.log(c); // 30 (if declared using var)


// ====================== Lexical Scope ======================

function one() {
    const username = "shivam";

    // Child function can access variables of its parent.
    function two() {
        const website = "youtube";
        console.log(username);
    }

    // Parent cannot access child variables.
    // console.log(website); // ❌ Error

    two();
}

// one();


// ====================== Nested Block Scope ======================

if (true) {
    const username = "raj";

    if (username === "raj") {
        const website = "youtube";

        // Inner block can access outer block variables.
        // console.log(username + website);
    }

    // console.log(website); // ❌ Error
}

// console.log(username); // ❌ Error


// ====================== Hoisting ======================

// Function Declaration
// Can be called before its definition because it is hoisted.

console.log(addOne(5));

function addOne(num) {
    return num + 1;
}


// Function Expression
// Cannot be called before initialization.
// The variable exists but remains in the Temporal Dead Zone (TDZ).

// console.log(addTwo(5)); // ❌ Error

const addTwo = function (num) {
    return num + 2;
};

console.log(addTwo(5));