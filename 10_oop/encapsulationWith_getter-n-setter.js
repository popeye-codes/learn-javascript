// ======================================================
// Private Fields (#) in JavaScript
// ======================================================
//
// Before private fields existed, developers used "_"
// as a convention to indicate that a property should
// be treated as private.
//
// Example:
// this._password = "abc";
//
// But "_" does NOT make a property private.
// Anyone can still access it.
//
// JavaScript introduced "#" to provide REAL privacy.
// Private fields can only be accessed inside the class.
//
// ======================================================



// ======================================================
// 1. "_" is NOT Private
// ======================================================

class User1 {
    constructor(name) {
        this._name = name;
    }
}

const user1 = new User1("Shivam");

console.log(user1._name); // Shivam

// Anyone can modify it.
user1._name = "Rahul";
console.log(user1._name); // Rahul



// ======================================================
// 2. Private Fields (#)
// ======================================================

class User2 {

    // Private field
    #name;

    constructor(name) {
        this.#name = name;
    }

    showName() {
        console.log(this.#name);
    }
}

const user2 = new User2("Shivam");

user2.showName();

// ❌ Not allowed
// console.log(user2.#name);



// ======================================================
// 3. Multiple Private Fields
// ======================================================

class User3 {

    #email;
    #password;

    constructor(email, password) {
        this.#email = email;
        this.#password = password;
    }

    showDetails() {
        console.log(this.#email);
        console.log(this.#password);
    }
}

const user3 = new User3("u@gmail.com", "abc");

user3.showDetails();



// ======================================================
// 🌟🌟 4. Getters & Setters with Private Fields
// ======================================================

class User4 {

    #email;
    #password;

    constructor(email, password) {

        // Calls the setters
        this.email = email;
        this.password = password;
    }

    // Getter
    get email() {
        return this.#email.toUpperCase();
    }

    // Setter
    set email(value) {
        this.#email = value;
    }

    // Getter
    get password() {
        return this.#password.toUpperCase();
    }

    // Setter
    set password(value) {
        this.#password = value;
    }
}

const user4 = new User4("u@gmail.com", "abc");

console.log(user4.email);      // U@GMAIL.COM
console.log(user4.password);   // ABC



// ======================================================
// 5. Constructor Flow
// ======================================================
//
// constructor(email) {
//     this.email = email;
// }
//
// "this.email = email"
// DOES NOT directly assign the value.
//
// Instead, it calls:
//
// set email(value) {
//     this.#email = value;
// }
//
// Flow:
//
// constructor
//      |
//      v
// this.email = email
//      |
//      v
// Setter executes
//      |
//      v
// this.#email = value
//
//


// ======================================================
// 6. Modifying a Private Field
// ======================================================

class Counter {

    #count = 0;

    increment() {
        this.#count++;
    }

    show() {
        console.log(this.#count);
    }
}

const counter = new Counter();

counter.increment();
counter.increment();
counter.increment();

counter.show(); // 3



// ======================================================
// 7. Outside Access
// ======================================================

// ❌ All of these are Syntax Errors

// console.log(user4.#email);
// console.log(user4.#password);
// counter.#count++;



// ======================================================
// Revision
// ======================================================

/*

PRIVATE FIELDS (#)

• Introduced in modern JavaScript.
• Declared using #fieldName.
• Truly private.
• Accessible only inside the class.
• Access using this.#fieldName.
• Outside access causes SyntaxError.
• Often used with getters and setters.
• Better than "_" because "_" is only a convention.

Difference

_ = Convention
# = Real Private

*/