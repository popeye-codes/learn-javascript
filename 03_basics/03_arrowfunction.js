// ====================== Objects & 'this' ======================

const user = {
    username: "Sam",
    price: 999,

    welcomeMessage: function () {
        // 'this' refers to the current object that is calling the method.
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
};

// user.welcomeMessage();

// Changing the current object's property.
user.username = "John";

// user.welcomeMessage();


// ====================== Global 'this' ======================

// In Node.js, the global 'this' at the top level is an empty object {}.
// In browsers, the global object is 'window'.
console.log(this);


// ====================== 'this' inside a Regular Function ======================

// function chai() {
//     let username = "shiv";

//     // 'this' exists inside a regular function,
//     // but it does NOT refer to local variables.
//     console.log(this);
//     console.log(this.username); // undefined
// }

// chai();


// ====================== Function Expression ======================

// const chai = function () {
//     let username = "shiv";

//     // Same behavior as a regular function.
//     console.log(this);
//     console.log(this.username); // undefined
// };

// chai();


// ====================== Arrow Function ======================

const chai = () => {
    let username = "shiv";

    // Arrow functions do NOT have their own 'this'.
    // They inherit 'this' from the surrounding (lexical) scope.
    console.log(this);
    console.log(this.username); // undefined
};

chai();


// ====================== Arrow Functions ======================

// Explicit Return
const addTwo = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo(3, 2));


// Implicit Return

const addThree = (num1, num2) => num1 + num2;

// Parentheses also perform an implicit return.
// const addThree = (num1, num2) => (num1 + num2);

console.log(addThree(8, 9));


// ====================== Returning an Object ======================

// Wrap the object in parentheses.
// Otherwise '{}' is treated as the function body.

const returnObject = () => ({
    username: "Raghu"
});

console.log(returnObject());