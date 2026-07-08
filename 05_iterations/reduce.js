// ============================================================
// reduce()
// ============================================================

// reduce() executes a callback for each array element and
// reduces the array to a single value.

const myNums = [1, 2, 3];

const myTotal = myNums.reduce((accumulator, currentValue) => {

    console.log(
        `Accumulator: ${accumulator}, Current Value: ${currentValue}`
    );

    return accumulator + currentValue;

}, 0); // Initial value of the accumulator

console.log(myTotal);


// ============================================================
// Practical Example
// ============================================================

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
];

// Calculate the total price of all items in the cart.

const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 0);

console.log(priceToPay);



// reduce() callback parameters:
//
// accumulator -> Stores the accumulated result.
// currentValue -> Current array element.
//
// Syntax:
// array.reduce((accumulator, currentValue) => {
//     return updatedAccumulator;
// }, initialValue);