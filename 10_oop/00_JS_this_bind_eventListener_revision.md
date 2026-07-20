# JavaScript `this` Keyword — Revision Notes

## 1. The Golden Rule of `this`

**`this` is decided by HOW a function is called, not where the function is written.**

Always ask:

> "Who is calling this function?"

The caller decides `this`.

---

# 2. Normal Object Method Call

Example:

```js
const user = {
    name: "Shivam",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Who called `greet()`?

```js
user.greet()
^^^^
```

So:

```js
this = user
```

Output:

```
Shivam
```

---

# 3. Function Stored in Another Variable

Example:

```js
const user = {
    name: "Shivam",

    greet() {
        console.log(this.name);
    }
};

const fn = user.greet;

fn();
```

Important:

```js
const fn = user.greet;
```

does NOT store the object.

It only stores the function reference.

Before:

```
user
 |
 └── greet -----> function
```

After:

```
user
 |
 └── greet -----> function <----- fn
```

`fn` does not know it came from `user`.

Now:

```js
fn();
```

Who called it?

Nobody.

So:

```
this = undefined
```

(strict mode)

---

# 4. Function Reference Can Be Assigned to Another Object

Example:

```js
const person = {
    name: "Shivam",

    greet() {
        console.log(this.name);
    }
};


const obj = {
    name: "Rahul"
};


obj.greet = person.greet;

obj.greet();
```

What happened?

`person.greet` is a function.

We assigned that function to `obj.greet`.

Now:

```
obj
 |
 ├── name = Rahul
 └── greet -----> same function
```

When:

```js
obj.greet();
```

Who called?

```
obj
```

Therefore:

```js
this = obj
```

Output:

```
Rahul
```

---

# 5. Important: Function Does Not Remember Its Owner

Wrong thinking:

> "This function belongs to person, so this should be person."

No.

JavaScript does not care where the function came from.

It only cares:

> "Who called it now?"

---

# 6. Event Listener Problem

Example:

```js
class React {

    constructor() {

        this.library = "React";
        this.server = "localhost:3000";

        document
            .querySelector("button")
            .addEventListener(
                "click",
                this.handleClick
            );
    }


    handleClick() {
        console.log(this);
    }
}


const app = new React();
```

Inside constructor:

```js
this = app
```

So:

```js
this.handleClick
```

means:

```js
app.handleClick
```

Browser receives only the function.

It does NOT receive the app object.

---

When button is clicked:

Browser executes the function.

Caller is the button.

Therefore:

```js
this = button
```

Not:

```js
this = app
```

---

# 7. Why `this.server` Gives Undefined?

Inside:

```js
handleClick() {
    console.log(this.server);
}
```

Without bind:

```js
this = button
```

So JavaScript checks:

```js
button.server
```

But button has no server property.

Therefore:

```
undefined
```

---

# 8. bind() Fix

Syntax:

```js
function.bind(object)
```

Example:

```js
this.handleClick.bind(this)
```

Inside constructor:

```js
this = app
```

So this becomes:

```js
app.handleClick.bind(app)
```

Meaning:

> Create a new function where `this` is permanently fixed to app.

---

# 9. After bind()

Example:

```js
document
.querySelector("button")
.addEventListener(
    "click",
    this.handleClick.bind(this)
);
```

Flow:

```
React Object
      |
      |
      v
handleClick.bind(app)

      |
      |
      v

New function created

this = app (fixed)
```

Now even if:

* button calls it
* setTimeout calls it
* another object calls it

`this` remains:

```js
app
```

---

# 10. bind() Does NOT Insert Object Into Function

Wrong:

```js
function(){
    this = app;
}
```

No.

Correct:

```
bind creates a new function
and remembers:

this should always be app
```

---

# 11. Quick Comparison

## Without bind

```js
button.addEventListener(
    "click",
    app.handleClick
);
```

Click:

```
Caller = button

this = button
```

---

## With bind

```js
button.addEventListener(
    "click",
    app.handleClick.bind(app)
);
```

Click:

```
Caller = button

but bind already fixed this

this = app
```

---

# 12. Final Rules To Remember

### Rule 1:

```
object.method()
```

`this = object`

Example:

```js
user.login()
```

---

### Rule 2:

```
function()
```

No object before dot.

`this = undefined` (strict mode)

---

### Rule 3:

Assignment does not carry owner.

Example:

```js
const fn = user.method;
```

`fn` does not know about `user`.

---

### Rule 4:

`bind()` permanently fixes `this`.

Example:

```js
fn.bind(user)
```

means:

```
this will always be user
```

---

## One Line Summary

**Normal function → caller decides `this`**

**bind() → bind decides `this`**
