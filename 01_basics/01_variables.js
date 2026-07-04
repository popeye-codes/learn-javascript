const accountId = 14453;

let accountEmail = "shivam@gamil.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// accountId = 2; // not allowed

accountEmail = "hc@hc.com";
accountPassword= "212122";
accountCity ="Bangaluru";


console.log(accountId);

let accountState;
/*
prefer not to use "var" 
becoz of issue in block - scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


// =========================
// const in JavaScript (IMPORTANT)
// =========================

/*
const does NOT mean "fully unchangeable"

👉 It means:
- You cannot reassign the variable
- But you CAN modify the content inside (for objects/arrays)
*/

// -------------------------
// 1. Primitive values
// -------------------------
const a = 10;

// a = 20; ❌ Not allowed (reassignment not allowed)

// -------------------------
// 2. Arrays
// -------------------------
const arr = [1, 2, 3];

// arr = [4, 5, 6]; ❌ Not allowed (new reference not allowed)

// BUT internal changes ARE allowed
arr.push(4);   // ✅ allowed
arr[0] = 99;   // ✅ allowed

console.log(arr);

// -------------------------
// 3. Objects
// -------------------------
const user = {
  name: "shivam"
};

// user = {}; ❌ Not allowed

user.name = "raj"; // ✅ allowed (modifying property)
console.log(user);

/*
=========================
FINAL RULE
=========================

const = cannot change reference
BUT can change internal data (arrays/objects)
*/