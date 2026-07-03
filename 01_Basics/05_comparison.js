// console.log("2" > 1);
// console.log("02" > 1);

// Note: --> 
// 🌟🌟 Always compare same dataTypes
// console.log(2 > 5);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);

/* 
🌟 NOte :-
Equality check == and comaprison > < >= <= works differently
Comparison convert "null" to an number, treating it as 0. 
that's why null >=0 is -> true and null > 0 is -> false
*/

console.log("\ncomapring undefine\n");
console.log(undefined == 0);
console.log(undefined <= 0);


// === => Strict check dataType+ value without any coversion.

console.log("2" === 2);
