# 🌟 Lexical Scope & Lexical `this`

## What does "Lexical" mean?

**Lexical = Based on where the code is written (its location in the source code).**

JavaScript decides scope from where a function is **defined**, not where it is **called**.

---

## Lexical Scope

A child function can access variables of its parent because it is **written inside** the parent.

```js
function outer() {
    let username = "Shivam";

    function inner() {
        console.log(username); // ✅ Accessible
    }

    inner();
}

outer();
```

```
Global
│
└── outer()
      │
      ├── username
      │
      └── inner()
```

### Rule
- ✅ Child can access Parent variables.
- ❌ Parent cannot access Child variables.

---

## Lexical `this` (Arrow Functions)

Arrow functions **do not have their own `this`.**

Instead, they inherit `this` from the surrounding (lexical) scope.

```js
const user = {
    username: "Raj",

    regular: function () {
        console.log(this.username);
    },

    arrow: () => {
        console.log(this.username);
    }
};
```

### Rule
- Regular Function → Gets its own `this` (depends on how it's called).
- Arrow Function → Uses `this` from where it is written.

---

## Easy Way to Remember

**Lexical = Location 📍**

Ask yourself:

> **Where is this function written?**

Not:

> **Where is this function called?**

🌟 Note:-->
JavaScript is a lexically scoped language. Scope is determined by where functions and variables are written in the code, not where they are called.

I think this is worth keeping in your notes because lexical scope and lexical this are concepts that confuse many learners initially, and this single page ties them together clearly.