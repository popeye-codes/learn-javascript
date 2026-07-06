
const user = {
    username: "Sam",
    price: 999,

    welcomeMessage: function() {
        // this -> means current context , in this scope current value to access variable
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }


}

// user.welcomeMessage();
// user.username = "John"; // we have change current - context (the value)
// user.welcomeMessage();

// 🌟 when we access this keyword outside fn
console.log(this); //🌟 as w're inside node-enviroment, this refers to Empty - object(i.e; {}), becoz now inside Global there is no-context
// 🌟but if we run inside browser give window-object(as global object)



// function chai() {
//     // 🌟 when displaying just "this" inside fn gives so many values. console.log(this);
//     let username = "shiv";
//     console.log(this.username); // o/p -> undefined. even now not able to use this - keyword now
// }

// chai();  // ->🌟 we cant use this inside function



// const chai = function () {
//     let username = "shiv";
//     console.log(this.username); // o/p -> undefined. same as Basc fn - declaration
// }

// chai();



//🌟 Arraow function
const chia = () => {
    let username = "shiv";

    //🌟 here also same behaviour as above
    console.log(this);
    console.log(this.username);  
}

chia();


// ---- 🌟 basic - arrow function
// Explicit - return
const addTwo = (num1, num2) => {
    return num1 + num2;
} 
console.log(addTwo(3,2));


// ---- 🌟 arraw func with implicit - return
const add3 = (num1, num2) =>  num1 + num2;

// const add3 = (num1, num2) =>  (num1 + num2); // ⚠️🌟 wrapped in parenthesis means no need of return - keyword

console.log(add3(8, 9));


// 🌟🌟🌟 implicit return -> useful to return object
const returnObject = () => ({username: "Raghu"});

console.log(returnObject());