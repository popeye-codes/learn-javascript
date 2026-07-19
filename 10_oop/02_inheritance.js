// ================================
// Inheritance using ES6 Classes
// ================================

// Parent Class (Base Class)
class User {
    constructor(username) {
        // Initialize username for every User object
        this.username = username;
    }

    // Method available to all User objects
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// Child Class (Derived Class)
// Teacher inherits all properties and methods of User
class Teacher extends User {

    constructor(username, email, password) {

        // Calls the Parent(User) constructor
        // Required before using 'this'
        super(username);

        // Teacher's own properties
        this.email = email;
        this.password = password;   // <-- Fix typo (use '.' not ',')
    }

    // Method specific to Teacher
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

// Create a Teacher object
const t1 = new Teacher("X-Men", "mG@mail.com", "123");

// Calls Teacher's own method
t1.addCourse();

// Create a normal User object
const masalaChai = new User("masalaChai");

// Calls inherited method from User class
masalaChai.logMe();

// Teacher inherited logMe() from User
t1.logMe();

// Compare two different objects
// Returns false because both objects have different memory references
console.log(t1 === masalaChai);

// Checks whether t1 is an object of Teacher
console.log(t1 instanceof Teacher);

// Teacher extends User,
// so t1 is also considered an instance of User
console.log(t1 instanceof User);