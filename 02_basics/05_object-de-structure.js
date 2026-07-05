// ================= Object Destructuring =================

const course = {
    coursename: "JS in Hinglish",
    price: "999",
    courseInstructor: "Shivam"
};

// Instead of accessing properties repeatedly using dot notation,
// we can use object destructuring.

// Destructure property
const { courseInstructor } = course;

// Destructure and rename the variable
const { courseInstructor: instructor } = course;

// console.log(courseInstructor); // Shivam
console.log(instructor); // Shivam


// ================= JSON =================

// APIs usually send data in JSON (JavaScript Object Notation).

// JSON looks similar to a JavaScript object, but:
// 🌟 Keys must always be strings (inside double quotes).
// 🌟 String values must also be inside double quotes.
// 🌟 JSON cannot contain functions, comments, or undefined.

// Example JSON

// {
//     "name": "Shivam",
//     "coursename": "JS in Hinglish",
//     "price": "free"
// }


// Sometimes an API returns an array of objects.

// [
//     {},
//     {},
//     {}
// ]