// if - statement

const isUserLoggedIn = true;


// So how does JavaScript decide?

// It has a fixed set of rules like this:

// Types Compared	Conversion Rule
// Number & String	String → Number
// Boolean & Anything	Boolean → Number
// Object & Primitive	Object → Primitive
// null & undefined	Equal only to each other
// Same Type	Compare directly

// if(2 == "2") { // JavaScript converts the string to a number
//     console.log("executed");
// }

// >, <, >=, <=, ==, !=, ===, !==

const score = 200;

// if(score > 100) {
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // ❌ Error due to Access outside scope


// shortHand-notation

const balance = 1000;

// // implict - scope
// if(balance > 5000) console.log("test");

//=== Nesting control flow ======

// if(balance < 500) {
//     console.log("lesss than");
// } else if(balance < 750) {
//     console.log("Less than 750");
// }
// else {
//     console.log("less than 1200");
// }


// real - world scenario
const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitcard && 2 == 2) {
    console.log("Allow to but course");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}