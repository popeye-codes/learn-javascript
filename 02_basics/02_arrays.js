const marvel_heros =["Thor", "Itron-Man", "Spider-Man"];
const dc_heros = ["Super-man", "Flash", "Bat-Man"];

// .push modifie into original array
//marvel_heros.push(dc_heros); // will merge both array => takes another array as element 



//console.log(marvel_heros); // // outpu after .push on marvel_heros -> [
//   'Thor',
//   'Itron-Man',
//   'Spider-Man',
//   [ 'Super-man', 'Flash', 'Bat-Man' ]
// ] 

// console.log(marvel_heros[3][1]);

// concat return new array not modifed in original array
// let afterConcat = marvel_heros.concat(dc_heros); // concat merge both array elem togrther in a array
// console.log(afterConcat);

// better to use spread - operator instead of Concat()

const all_new_heroes = [...marvel_heros, ...dc_heros]; //... means it being spread => its no more  a Array , all elem become individual

//console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // all value spread out now matter how much nested array are there
console.log(real_another_array); // output: [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]



console.log(Array.isArray("shivam")); // check is this a array?
console.log(Array.from("shivam")); // will convert into array -> [ 's', 'h', 'i', 'v', 'a', 'm' ]
console.log(Array.from({name: "shivam"})); //need to tell need to make array from "key" or "value" ---> intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
