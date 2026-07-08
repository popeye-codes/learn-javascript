// ============================================================
// map()
// ============================================================

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map() returns a new array after transforming each element.

// const newNums = myNums.map((num) => num + 10);

// console.log(newNums);


// ============================================================
// Method Chaining
// ============================================================

// The output of one method becomes the input of the next method.

const newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)      // Works on the result of the previous map()
    .filter((num) => num >= 40);

console.log(newNums);