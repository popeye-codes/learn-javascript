const marvel_heros = ["Thor", "Iron-Man", "Spider-Man"];
const dc_heros = ["Super-Man", "Flash", "Bat-Man"];

// push modifies original array
// marvel_heros.push(dc_heros); 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat returns new array (does NOT modify original)
const all_heros_concat = marvel_heros.concat(dc_heros);
// console.log(all_heros_concat);

// spread operator (modern and best way)
const all_new_heroes = [...marvel_heros, ...dc_heros];
// console.log(all_new_heroes);

// flatten nested arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// Array utility methods
console.log(Array.isArray("shivam")); 
console.log(Array.from("shivam")); 
console.log(Array.from({ name: "shivam" })); 
// object needs key/value instruction, otherwise returns []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));