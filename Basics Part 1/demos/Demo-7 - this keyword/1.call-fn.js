function setADeadOneOfThese() {
  this.aDeadOneOfThese = true; // this === global/window object
}

setADeadOneOfThese();
console.log('global/window:', window.aDeadOneOfThese);

const spider = {};
setADeadOneOfThese.call(spider);

console.log('spider:', spider);
