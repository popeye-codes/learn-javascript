// ==========================================================
// PROMISES
// A Promise is an object representing the eventual completion
// or failure of an asynchronous operation.
// ==========================================================



// ==========================================================
// Example 1 : Creating and Consuming a Promise
// ==========================================================

// Create a new Promise
const promise1 = new Promise(function (resolve, reject) {

    // Perform an asynchronous task
    // Examples:
    // - Database calls
    // - Network requests
    // - Cryptography

    setTimeout(function () {
        console.log("Async task is complete");

        // resolve() tells the Promise that the task succeeded.
        // It is directly connected to .then().
        resolve();

    }, 1000);

});


// Consume the Promise
promise1.then(function () {
    console.log("Promise Consumed");
});



// ==========================================================
// Example 2 : Creating and Consuming without storing Promise
// ==========================================================

new Promise(function (resolve, reject) {

    setTimeout(function () {

        console.log("Async task 2");
        resolve();

    }, 1000);

}).then(function () {

    console.log("Async 2 resolved");

});



// ==========================================================
// Example 3 : Passing Data using resolve()
// ==========================================================

const promise3 = new Promise(function (resolve, reject) {

    setTimeout(function () {

        // Pass data to .then()
        resolve({
            username: "shivam",
            email: "example@g.com"
        });

    }, 1000);

});


// Whatever is passed into resolve()
// is received as the argument inside .then()
promise3.then(function (user) {

    console.log(user);

});



// ==========================================================
// Example 4 : Promise Chaining
// ==========================================================

const promise4 = new Promise(function (resolve, reject) {

    setTimeout(function () {

        let error = true;

        if (!error) {

            resolve({
                username: "DATABASE",
                password: "root@123"
            });

        } else {

            reject("Error: Something Wrong");

        }

    }, 1000);

});


promise4
    .then((user) => {

        console.log(user);

        // Whatever is returned here
        // becomes the input of the next .then()
        return user.username;

    })

    .then((username) => {

        console.log(username);

    })

    .catch((error) => {

        console.log(error);

    })

    .finally(() => {

        // Always executes
        // whether Promise is resolved or rejected.
        console.log("The promise is either resolved or rejected.");

    });



// ==========================================================
// Example 5 : Handling Promise using async / await
// ==========================================================

const promise5 = new Promise(function (resolve, reject) {

    setTimeout(function () {

        let error = true;

        if (!error) {

            resolve({
                username: "javascript",
                password: "root@123"
            });

        } else {

            reject("Error: JS went wrong");

        }

    }, 1000);

});


// async/await is another way to consume Promises.
// If the Promise rejects, await throws an error.
// Therefore, we usually wrap it inside try...catch.

async function consumepromise5() {

    try {

        // await pauses this function until
        // promise5 gets resolved or rejected.
        const response = await promise5;

        console.log(response);

    } catch (error) {

        console.log(error);

    }

}

consumepromise5();



// ==========================================================
// Example 6 : Real-world Example using fetch()
// async / await
// ==========================================================

// async function getAllUsers() {

//     try {

//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         // response.json() also returns a Promise.
//         // Therefore we need another await.
//         const data = await response.json();

//         console.log(data);

//     } catch (error) {

//         console.log("Error:", error);

//     }

// }

// getAllUsers();



// ==========================================================
// Same fetch() example using .then() and .catch()
// ==========================================================

fetch("https://jsonplaceholder.typicode.com/users")

    .then((response) => {

        // response.json() returns a Promise
        return response.json();

    })

    .then((data) => {

        console.log(data);

    })

    .catch((error) => {

        console.log(error);

    });



// ==========================================================
// 🌟 Interesting Takeaway (Next Lecture)
// ==========================================================

// Even though fetch() is asynchronous,
// why doesn't the rest of the code wait for it?
