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

```Javascript
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

```
function functionName(arg1, arg2) { console.log("hello world")}
```

- Arrow

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

Most of the time you are dealing with collections/arrays

There are a number of very useful functions to know to make life easier

---

## `find` - Get one item from the collection

- FirstOfDefault in C# terms
- Gets the first item matching the predicatr function passed
- Will stop at the first item it finds

```js
const luke = people.find((person) => person.name === 'Luke');
```

---

## Dynamic Objects

- Anything goes in JS
- You can add or remove items from an object at anytime

```javascript
const person = {
  age: 10,
};
person['first'] = 'Donald';
person.surname = 'Trump';
delete person.age;

// Result: { first: 'Donald', surname: 'Trump' }
```

---

## Functional concepts

Due to the anything goes nature of JavaScript, it can useful to apply functional programming concepts.

Understanding these concepts will help you use well known utility libraries such as `lodash` or `ramda`.

---

## Purity

### What?

- Speaks to the nature of a `function` in JS
- Given the same input, produces the same output
- Does not mutate any external state (including params)

### Why?

- Easier to test
- Easier to debug without side effects as the code can be repeatably run

---

## Purity Example

### Impure

- Mutates the params coming in!

```javascript
function addName(obj, name) {
  obj.name = name;
  return obj;
}
```

### Pure

- Return a new object

```javascript
function addName(obj, name) {
  return {
    ...obj,
    name,
  };
}
```

---

## Prototypes

The weird and wacky way that JavaScript implements something resembling inheritance

---

## Object Constructors

- A way of creating a class-like function
- Defines a way of creating the object
- Provides some pridictability while sacrificing dynamic objects

```
function Person(name){
    this.name = name;
}

const person = new Person('Peter');

person.surname = "Griffon"; // This does nothing!
```

---

## New hotness

-

---

## References

- https://en.wikipedia.org/wiki/JavaScript
- https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
- https://www.w3schools.com
- https://developer.mozilla.org/en-US/docs/Web/JavaScript

---
