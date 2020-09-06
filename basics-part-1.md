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
- Recommended to add to end of body to make sure the DOM is fully loaded
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

```javascript
function fnName(arg1, arg2) {
  console.log('hello world', arg1);
}
```

- Arrow

```javascript
const fnName = (arg1, arg2) => {
  console.log('hello world', arg1);
};
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
  - Captures `this` keyword
- Cons
  - Does not create scope

---

## Variables

### `var`

- Avoid (headaches galore and not hipster)
- Scopes to nearest function
- If no function to scope to, be scoped to window function ie global (!!!)
- Mutable

---

## Variables

### `const`

- Preferred
- Scopes to block
- Use it instead of `var`
- Immutable
- Should be the default

---

## Variables

### `let`

- Use less often than `const`
- Scopes to block
- Mutable

---

## Logic

### `if`

```javascript
const number = '5';
if (number === 5) {
  console.log('Number is 5');
} else {
  console.log('Number is not 5');
}
```

---

## Logic

- `===` `!==` - always
- `==` `!=` - avoid (unless you know what you are doing)
- Double equals uses type coercion to try and convert the type on the right to match the type on the left
- Demo logic and funnies

---

## Loops

- `while`
- `for`, `for of`, `for in`
- `do ... while`

---

## Loops

### `while`

```javascript
let count = 0;
const max = 50;
while (count != 50) {
  count++;
  console.log('This is how much we have looped: ', count);
}
```

- what if count starts at 51?

---

## Loops

### `for`

```javascript
for (let count = 0; count <= 5; count++;) {
    console.log("Current count: ", count);
}
```

---

## Loops

### `do ... while`

```javascript
do {
  console.log('We only show this once');
} while (false);
```

---

## Collections

- `forEach`, `map`, `filter`, `find`, `reduce`, `some`
- Functions that exist on collections are great
- Assume:

```javascript
const people = ['Kevin', 'Luke', 'Tim'];
```

---

## Collections

### `forEach`

```javascript
people.forEach((person) => console.log(`Hello ${person}`));
```

---

## Collections

### `map`

```javascript
const newPeople = people.map((person) => {
  const newPerson = 'Hello ' + person;
  return newPerson;
});
// newPeople = ["Hello Kevin", "Hello Luke", "Hello Tim"];
```

```javascript
const newPeople = people.map((person) => 'Hello ' + person);
// newPeople = ["Hello Kevin", "Hello Luke", "Hello Tim"];
```

---

## Collections

### `filter`

```javascript
const peopleWithK = people.filter((person) => person.toUpperCase().includes('K'));
// peopleWithK = ["Kevin", "Luke"];
```

---

## Collections

### `some`

Lazily evaluates if any item in the collection matches the predicate

```javascript
const doesContainSomeoneWithK = people.some((person) => person.toUpperCase().includes('K'));
// peopleWithK = true
```

---

## Collections

### `find`

```javascript
const tim = people.find((person) => person === 'Tim');
// tim = "Tim";
const nick = people.find((person) => person === 'Nick');
// nick = undefined
```

---

## Collections

### `reduce`

Usually used to aggregate items in a collection.

```javascript
const mashed = people.reduce((accumulator, person) => `${accumulator} ${person}`, '');
// mashed = "Kevin Luke Tim";
```

---

## Collections

### Many more

- `split`
- `includes`
- `join`
- `...` < not a spread operator

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

---

## Purity Example

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

## Currying

- A function that returns another function

```javascript
function getProperty(propertyName) {
  return function getPropertyFromObject(obj) {
    return obj[propertyName];
  };
}

const getName = getProperty('name');
const name = getName({ name: 'Tony' });
// name === 'Tony'
```

---

## Prototypes

The weird and wacky way that JavaScript implements something resembling inheritance

---

## Prototypes

### Object Constructors

- A way of creating a class-like function
- Defines a way of creating the object
- Provides some pridictability while sacrificing dynamic objects

```js
function Person(name) {
  this.name = name;
}

const person = new Person('Peter');

person.surname = 'Griffon'; // This does nothing, you must go via the prototype!
```

---

## Prototypes

### What the hell are they?

- Essentially, a linked list of objects pointing to the next object in the chain
- Adding to the prototype is the only way to add a property or function to a function constructor

---

## Prototypes

### Example

```js
function American(name) {
  this.annoying = true;
  this.name = name;
}

American.prototype.setSurname = function (surname) {
  this.surname = surname;
};

const donald = new American('Donald');
donald.setSurname('Trump');

// Result:
// {
//     name: "Donald",
//     surname: "Trump",
//     annoying: true,
//     __proto__: {
//        setSurname: function() { ... }
//     }
// }
```

---

## Prototypes

### Inheritance

You can inherit the features and prototype chain from another function constructor

```js
function SouthAfrican(name, loadsheddingLevel) {
  American.call(this, name);
  this.loadsheddingLevel = loadsheddingLevel;
}
// We need this to link the prototype chain
SouthAfrican.prototype = Object.create(American);

const saffa = new SouthAfrican('Luke', 3);

// This method is defined on the American object!
saffa.setSurname('Warren');

// `saffa.annoying` would be true!
// `saffa.loadsheddingLevel` would be 3!
```

---

## Prototypes

### How does this work?

- Own properties vs Prototype properties
- We keep looking up the chain until we find a property that matches

`SouthAfrican (owned) --> South African (prototype) --> American --> Object --> null`

---

## What is `this`, a keyword for ants!?

---

## Some simple rules for understanding `this`

- `this` in the global scope refers to the window object
- `this` in an object refers to that object
- You can set `this` to be what you want using `.call` and `.apply`
- `this` when used in an arrow function 'captures' the this at the time od definition

---

## `this` in the global scope

```js
function whatIsThis() {
  this.aDeadOneOfThese = 'upsidedown spider'; // this === window object
}
```

---

## `this` in an object

```js
function WhatIsThis() {
  this.aDeadOneOfThese = 'upsidedown spider';

  this.change = function () {
    // This refers to the object instance so we can change the value on that object instance
    this.aDeadOneOfThese = 'changed';
  };
}

var obj = new WhatIsThis();
obj.change();
obj.aDeadOneOfThese; // Is now 'changed'
```

---

## `this` using `call`

```js
function whatIsThis() {
  this.aDeadOneOfThese = 'upsidedown spider'; // this === window object
}
const obj = {};
whatIsThis.call(obj);

console.log(obj); // obj.aDeadOneOfThese === 'upsidedown spider'
```

---

## Using `this` with arrow functions

> An arrow function does not have its own `this`. The `this` value of the enclosing lexical scope is used; arrow functions follow the normal variable lookup rules. So while searching for this which is not present in the current scope, an arrow function ends up finding the `this` from its enclosing scope.

**Mozilla Docs**

---

## Sorry... What?

> An arrow function **does not have its own `this`**. The `this` value of the **enclosing lexical scope** is used; **arrow functions follow the normal variable lookup rules**. So while searching for this which is **not present in the current scope**, an arrow function ends up **finding the `this` from its enclosing scope.**

**Mozilla Docs**

---

## An Example

```js
var programmer = {
  // Does not create a new scope!
  i: 10,
  arrow: () => console.log(this.i, this),
  normieFunction: function () {
    console.log(this.i, this);
  },
};

obj.arrow(); // prints undefined, Window {...} (or the global object)
obj.normieFunction(); // prints 10, Object {...}
```

---

## New hotness

- Spread `...`
- String templates
- Destructure
  - nested
  - rename

---

## Live Demo

---
