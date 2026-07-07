// ============================================================
// for...in Loop
// ============================================================

// Used to iterate over the enumerable keys (property names)
// of an object.

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// ============================================================
// Using for...in with Arrays
// ============================================================

// For arrays, for...in returns the index (key),
// not the element itself.

const programming = ["js", "rb", "py"];

for (const key in programming) {
    console.log(programming[key]);
}


// ============================================================
// Using for...in with Map
// ============================================================

// Map is iterable, but NOT enumerable.
// Therefore, for...in does not iterate over a Map.
// Use for...of instead.

const map = new Map();

map.set("IN", "India");
map.set("US", "United States");
map.set("FR", "France");

// Updating an existing key
map.set("IN", "India");

// This prints nothing because Map has no enumerable properties.

// for (const key in map) {
//     console.log(key);
// }


// ============================================================
// Notes
// ============================================================

// ✅ for...of
// - Iterates over iterable objects.
// - Returns values directly.
// - Works with Arrays, Strings, Maps, Sets, etc.

// ✅ for...in
// - Iterates over enumerable keys.
// - Returns property names (or array indexes).
// - Mainly used with Objects.
// - Can be used with Arrays, but for...of is generally preferred.



// Enumerable property:

// A property that JavaScript includes when iterating over an object

// using loops like for...in or methods like Object.keys().