const programmer = {
  // Does not create a new scope!
  i: 10,
  arrow: () => console.log(this.i, this),
  normieFunction: function () {
    console.log(this.i, this);
  },
};

function Kevin() {
  var that = this;

  this.shaveHead = (that) => {
    console.log('SUCCESS', that);
  };
}

console.log('-- Arrow --');
programmer.arrow(); // prints undefined, global

console.log('-- Function --');
programmer.normieFunction(); // prints 10, Object {...}
