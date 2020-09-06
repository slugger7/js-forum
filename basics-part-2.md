---
marp: true
_class: invert
---

# Javascript 2

---

## Modules & imports

### External code

- Node
- CDN "imports" - `<script ...>` before yours (jquery)
- Security risks

---

## Modules & imports

### Node

- LTS every 2 years
- NPM (yay)
- Backend/frontend

---

## Modules & imports

### Node - creating a project

- `npm init` - create a project
- `package.json` - project scripts, info, dependencies...
- `package-lock.json` - locking versions of sub dependencies
- `node_modules` - where dependencies are saved

---

## Modules & imports

### Node - NPM

- Node Package Manager / whatever acronym is on their site
- `npm i ramda`
- `npm i --save-dev jest`
- `npm un jest`

---

## Modules & imports

### Node - import/require

- `const { map } = require("ramda");`
- `const R = require("ramda");`
- `import { map } from "ramda";`
- `import R from "ramda";`
- `import React, { useState, useEffect } from "react";`
- `import * as Foo from "no-default-export";`
- Demo

---

## Modules & imports

### Node - creating modules - require

- greeter.js

```js
const greet = (name) => console.log(`Hello ${name}`);
module.exports = { greet };
```

- index.js

```js
const { greet } = require('./greeter');
greet('Kevin');
```

- Demo

---

## Modules & imports

### Node - creating modules - import

- greeter.js

```js
export const greet = (name) => console.log(`Hello ${name}`);
export default greet;
```

- index.js

```js
import { greet } from './greeter';
greet('Kevin');
```

- Demo

---

## Async

- Callbacks
- Promises
- Async/await

---

## Async - Callbacks

- Error first callbacks
- Promisify
- Currying
- First class functions

---

## Async - setTimeout

```js
const doSomething = () => console.log('Something has been done');
setTimeout(doSomething, 3000);
```

- `doSomething` is our callback fn

---

## Async - error first callbacks

```js
const callback = (err, value) => {
  if (err) {
    handleErr(err);
    return;
  }

  handleValue(value);
};

somethingAsync(data, data1, callback);
```

---

## Async - currying

```js
const callbackForCustomer = (customerId) => (err, customerData) => {
  if (err) {
    console.error('We failed getting customer or something', err);
  }

  doSomethingWithCustomer(customer, customerId);
};

const callback = callBackForCustomer(1);
getCustomerData(1, callback);
```

---

## Async - promisify

---

## Async - Promises

- Flows nicely
- Can be returned
- Monad
- Error handling
- Any & all

---

## Async - promises

- `doSomethingAsync.then(asyncResult => console.log("asyncResult"));`
- returning from `then` fn will be wrapped in promise
- pipeline

---

## Async - creating promises

```js
const lukeOrKevin = (name) =>
  new Promise((resolve, reject) => {
    if (name === 'Luke') {
      resolve('LuKe WaS fOuNd');
    }
    if (name === 'Kevin') {
      resolve("It's me");
    }
    reject(`Could not find Luke or kevin instead found ${name}`);
  });
const messageHandler = (message) => console.log(message);
lukeOrKevin('Tim')
  .then(messageHandler)
  .catch((err) => {
    console.error(error);
    return lukeOrKevin('Kevin');
  })
  .then(messageHandler);
```

DEMO this

---

## Async - promise - any & all

```js
const promises = [promise1, promise2, promise3];
const allPromise = Promise.all(promises);

allPromise.then(([promise1Res, promise2Res, promise3Res]) => {
  console.log('We got all our results great');
});
```

- all or nothing

---

## Async - promise - any & all

```js
const promises = [slowPromise1, quickPromise, failedPromise];
Promise.any((quickPromiseResult) => console.log('Fastest gun in the west'));
```

- first to the finish line

---

## Async - async/await

- Similar to C#
- Preferred
- interchangeable with promises (don't though)
- Synchronous

---

## Async - async/await

```js
const pinkyPromise = new Promise.resolve('Strong pinky');

const message = await pinkyPromise;
```

- "infects" codebase
- Wrapped by function

---

## Async - async/await

```js
const pinkyPromise = new Promise.resolve('Strong pinky');

const justDo = async () => {
  const message = await pinkyPromise;
};

justDo();
```

---

## Async - async/await

```js
const pinkyPromise = new Promise.resolve('Strong pinky');

async function justDo() {
  const message = await pinkyPromise;
}

justDo();
```

- anything returned needs to be awaited
- demo

---

## Async - async/await

- any & all could use `Promise.all`

```js
const asyncFns = [asyncFn1, asyncFn2, asyncFn3];
const awaiters = asyncFns.map((fn) => fn());
const [res1, res2, res3] = awaiters.map(async (awaiter) => await awaiter);
```

- ideas on any?

---

# The Ellusive "Event Model"

---

## The Story of a Single Thread That Could!

- Your code is run in a _single thread_
- However, a given JavaScript (example v8) runtime support an _asynchronous_ model

### Key Concepts

- The Stack
- The Event Queue
- Pizza _(assumed knowledge)_

---

## The Stack

- Think: Stack of cards
- First in last out datastructure for functions

---

## The Event Queue

- A queue of messages
- Map to callback functions that need to be pushed back onto the stack

---

## Our very own pizza ordering runtime

`$ pizzaRuntime ./sick-example.js`

```js
doTheThing();

function doTheThing() {
  doTheOtherThingFirst();
}

function doTheOtherThingFirst() {
  /// ...
}
```

```js
const theStack = [];

theStack.push({ fn: doTheThing, args: null });
theStack.push({ fn: doTheOtherThingFirst, args: null });
```

---

## Process Frames

```js
const frame = theStack.pop();

while (frame) {
  frame.fn(frame.args);

  frame = theStack.pop();
}

// The stack is empty...
```

---

## But what about async stuff?

```js
orderFood();

function orderFood() {
  orderPizza(pizzaIsHereCallback); // native API call
}

function pizzaIsHereCallback() {
  console.log('The pizzas are here!');
}
```

---

## Adding features to our runtime

```js
const theStack = [];
const theEventQueue = [];
const runtimeState = {
  isBusyOrderingPizza: false,
};

// A method our runtime natively supports (because we like pizza)
function nativeOrderPizza(cb) {
  runtimeState.isBusyOrderingPizza = true;

  theEventQueue.push({
    fn: cb,
    done: () => !runtimeState.isBusyOrderingPizza,
  });

  // ... 3 seconds later ...

  runtimeState.isBusyOrderingPizza = false;
}
```

---

## Interpreting the program

```js
orderFood();

function orderFood() {
  orderPizza(pizzaIsHereCallback); // native API call
}

function pizzaIsHereCallback() {
  console.log('The pizzas are here!');
}
```

```js
theStack.push({ fn: orderFood, args: null });
theStack.push({ fn: orderPizza, args:  });
```

---

## Processing Frames and Event Queue

```js
while (true) {
  processStack();

  let message = theEventQueue.splice(0, 1); // The first message in the queue

  if (message.done()) {
    theStack.push({ fn: message.fn });
  }
}

function processStack() {
  let frame = theStack.pop();

  while (frame) {
    if (frame.isNativeCall) {
      nativeOrderPizza(frame.arg);
    } else {
      frame.fn(frame.args);
    }

    frame = theStack.pop();
  }
}
```

---

## References

- https://en.wikipedia.org/wiki/JavaScript
- https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
- https://www.w3schools.com
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
- https://nodejs.org/api/fs.html#fs_dir_read_callback
- https://blog.jcoglan.com/2011/03/11/promises-are-the-monad-of-asynchronous-programming/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
- The Event Model: https://www.youtube.com/watch?v=XzXIMZMN9k4
- https://www.tutorialsteacher.com/javascript/this-keyword-in-javascript
