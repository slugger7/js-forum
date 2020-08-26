const theStack = [];
const theEventQueue = [];
const runtimeState = {
  isBusyOrderingPizza: false,
};

// A method our runtime natively supports (because we like pizza)
function orderPizza(cb) {
  runtimeState.isBusyOrderingPizza = true;

  theEventQueue.push({
    fn: cb,
    done: () => !runtimeState.isBusyOrderingPizza,
  });

  // ... 3 seconds later ...

  runtimeState.isBusyOrderingPizza = false;
}

async function processStack() {
  let frame = theStack.pop();

  while (frame) {
    if (frame.isOrderPizza) {
      orderPizza(frame.arg);
    } else {
      frame.fn(frame.args);
    }

    frame = theStack.pop();
  }
}

while (true) {
  processStack();

  let message = theEventQueue.splice(0, 1); // The the first message in the queue

  if (message.done()) {
    theStack.push({ fn: message.fn });
  }
}
