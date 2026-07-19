function setUsername(username) {
    // Complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {

    // We are calling another function to set the username.
    // Using .call() lets us decide what 'this' should be.
    // Here, we pass the current object ('this'),
    // so setUsername() adds username to the same object
    // that createUser() is creating.
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const user1 = new createUser("shuk", "s@gmail.com", "123");
console.log(user1);

/*
Without .call()

setUsername(username);

The function gets called,
but 'this' inside setUsername is not the object
created by createUser().

So username is NOT added to user1.


With .call()

setUsername.call(this, username);

- call() invokes the function immediately.
- The first argument tells JavaScript what 'this' should be.
- Here, 'this' is the object being created by new createUser().
- So username, email and password all end up in the same object.
*/