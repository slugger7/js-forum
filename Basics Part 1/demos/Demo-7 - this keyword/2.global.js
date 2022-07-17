function WhatIsThis() {
  this.aDeadOneOfThese = false;

  this.change = function () {
    // This refers to the object instance
    // so we can change the value on that object instance!
    this.aDeadOneOfThese = true;
  };
}

const loveGuruRef = new WhatIsThis();
loveGuruRef.change();

console.log(loveGuruRef);
