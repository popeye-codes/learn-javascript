let value = 3;
// let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);

/*

let str1 = "hello";
let str2 = " shivam";
let str3 = str1 + str2;
console.log(str3);

// if String first => treat all as String
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");

console.log("1" + 2 + 2);

// if String is in last => first conversion will happen then convert into String
console.log(1 + 2 + "2");
*/

console.log(+true);
console.log(+"");

let num1, num2, num3;

// works but its bad - way to write
num1 = num2 = num3 = 2 + 2;


let gameCounter = 100;
++gameCounter;
console.log(gameCounter);


// --- post & prefix operator

let x = 3;
const y = x++; // post fix
console.log("Value of x: " + x);
console.log("Value of y: " + y);

let a = 3;
const b = ++a;
console.log(`a: ${a}, b: ${b}`);

let name = "Raj";
let age = 21;

console.log(`Name: ${name}, Age: ${age}`);