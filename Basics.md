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

## Variables
### var

- Avoid
- Globally scoped
- Headaches galore
```
() => {
    var name = "kevin";
}
console.log(name);
```

---

## Variables
### const

- Preferred

---

## Variables
### let

---

## References

- https://en.wikipedia.org/wiki/JavaScript

---