function setADeadOneOfThese() {
  this.aDeadOneOfThese = true; // this === global/window object
}

setADeadOneOfThese();
console.log('global:', global.aDeadOneOfThese);

const spider = {};
setADeadOneOfThese.call(spider);

console.log('spider:', spider);
