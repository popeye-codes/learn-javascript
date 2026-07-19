// ES6


// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const user1 = new User("XYZ", "xyz@g.com", "123");

// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());


// behind the scene

function User(username, email, password) {
    this.username = username;
    this.password = password;
    this.email = email;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;
}

const user2 = new User("XYZ", "xyz@g.com", "123");

console.log(user2.encryptPassword());
console.log(user2.changeUsername());
