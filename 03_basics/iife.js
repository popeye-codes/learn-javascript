// ====================== IIFE ======================

// Immediately Invoked Function Expression (IIFE)

// Named IIFE
(function chai() {
    console.log("DB CONNECTED");
})();

// Why the semicolon (;)?
// An IIFE executes immediately.
// The semicolon tells JavaScript that this statement has ended.
// Without it, the next IIFE may be treated as a continuation,
// resulting in a syntax error.


// ====================== Arrow Function IIFE ======================

// Unnamed (Anonymous) IIFE
((name) => {
    console.log(`DB CONNECTED2 ${name}`);
})("shivam");