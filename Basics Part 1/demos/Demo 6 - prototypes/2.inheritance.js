function American(name) {
  this.annoying = true;
  this.name = name;
}

American.prototype.setSurname = function (surname) {
  this.surname = surname;
};

function SouthAfrican(name, loadsheddingLevel) {
  // We call the American fn ctor from the SouthAfrican fn ctor
  American.call(this, name);
  this.loadsheddingLevel = loadsheddingLevel;
}
// We need this to link the prototype chain
SouthAfrican.prototype = Object.create(American.prototype);

const saffa = new SouthAfrican('Luke', 3);

// This method is defined on American
// but we can use it on the SouthAfrican instance!
saffa.setSurname('Warren');

console.log(saffa);

// `saffa.annoying` would be true!
// `saffa.loadsheddingLevel` would be 3!
