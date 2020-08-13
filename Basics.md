---
marp: true
_class: invert
--- 

# Javascript 1

---

# Basics

---

## What is JS

- First appeared December 4, 1995
- Java - just because they where riding on the back of Java
- Adds functionality to your HTML and CSS

---

## Where to use it

- In your browser console
- `F12` should get you there (please tell me you have been in the dev tools)
- `alert("Hello world")`
- We're done here you now know JS ;-)

---

## Where to use it

### HTML

- `<script>alert("hello world");</script>`
- Save it
- HTML file now has HTML, CSS, JS in it

---

## Where to use it

### JS File

- `<script src="./path/to/js/file/index.js"></script>`
- Can't be self closing
- Recommended to add to end of body
- Components have been rendered

---
## Where to use it

- index.js
``` Javascript
alert("hello world");
```
- Main?
- Just runs

---

## Hello world seems boring alerts suck

```
<button onclick="alert('hello world');">Say hello damnit</button>
```
- Same sin as as inline styling

---

## Redemption

- index.js
```
function sayHello() {
    alert("hello world");
}
```
- index.html
```
<button onclick="sayHello()">Say hello</button>
```

---

## Functions

- Function
``` javascript
function fnName(arg1, arg2) { console.log("hello world", arg1); }
```
- Arrow
``` javascript
const fnName = (arg1, arg2) => { console.log("hello world", arg1); }
```

---

## Functions
### Function

- Pros
  - More similar to conventional languages
  - Creates scope
- Cons
  - More to type (We are all lazy)

---

## Functions
### Arrow

- Pros
  - `() => console.log("hello world");`
  - small
  - `const greet = arg1 => console.log("hello", arg1); greet("Kevin");`
  - no need to wrap 1 argument with braces
- Cons
  - Does not create scope

---

## Variables
### `var`

- Avoid
- Headaches galore
- Scopes to nearest function
- Mutable

---

## Variables
### `const`

- Preferred
- Scopes to block
- Use it instead of var
- Immutable
---

## Variables
### `let`

- Use less often than `const`
- Scopes to block
- Mutable

---

## Collections

---

## Functional concepts


---

## Prototypes

---

## Dynamic Objects

---

## New hotness

---

## References

- https://en.wikipedia.org/wiki/JavaScript
- https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
- https://www.w3schools.com
- https://developer.mozilla.org/en-US/docs/Web/JavaScript

---