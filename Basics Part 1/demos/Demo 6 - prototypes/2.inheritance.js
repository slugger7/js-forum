function Person(name) {
  this.name = name;
}

Person.prototype.setSurname = function (surname) {
  this.surname = surname;
};

function SouthAfrican(name, loadsheddingLevel) {
  // We call the Person fn ctor from the SouthAfrican fn ctor
  Person.call(this, name);

  this.loadsheddingLevel = loadsheddingLevel;
}

// We need this to link the prototype chain
SouthAfrican.prototype = Object.create(Person.prototype);

SouthAfrican.prototype.shoutShout = function () {
  console.log('Let it all out! These are the things... sing it with me now...');
};

const saffa = new SouthAfrican('Luke', 2);
saffa.shoutShout();

// This method is defined on American
// but we can use it on the SouthAfrican instance!
saffa.setSurname('Warren');

console.log(saffa);
