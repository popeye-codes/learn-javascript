class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // Static methods belong to the class itself,
    // not to objects (instances) created using 'new'.
    static createId() {
        return `123`;
    }
}

const user1 = new User("Shivam");

//******* Error *******
// Static methods cannot be called using an object (instance).
// console.log(user1.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@ph.com");

// Inherited instance method from User
iphone.logMe();

// ******* Error *******
// createId() is static, so it belongs to the User class,
// not to Teacher or User objects (instances).
// console.log(iphone.createId());

// 🌟 Correct way
// Call a static method using the class name.
console.log(User.createId());