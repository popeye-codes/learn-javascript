// =======================
// Getters & Setters
// =======================

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // Getter
    get email() {
        return this._email.toUpperCase();
    }

    // Setter
    set email(value) {
        this._email = value;
    }

    // Getter
    get password() {
        // Returning a transformed value instead of the stored value.
        return this._password.toUpperCase();
    }

    // Setter
    set password(value) {
        /*
        If we wrote:
            this.password = value;

        the setter would call itself repeatedly,
        causing infinite recursion and a
        "Maximum call stack size exceeded" error.

        Therefore, we store the actual value
        in a different property (_password).
        */
        this._password = value;
    }
}

const u1 = new User("u@gmail.com", "abc");

console.log(u1.password); // ABC
console.log(u1.email);    // U@GMAIL.COM

// Getters behave like properties, not functions.
// So we use:
// u1.email
// NOT:
// u1.email()