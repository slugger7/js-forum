function American(name) {
  this.annoying = true;
  this.name = name;
}

American.prototype.setSurname = function (surname) {
  this.surname = surname;
};

const donald = new American('Donald');
donald.setSurname('Trump');

function SouthAfrican(name, loadsheddingLevel) {
  American.call(this, name);
  this.loadsheddingLevel = loadsheddingLevel;
}
SouthAfrican.prototype = new American();

const saffa = new SouthAfrican('Luke', 3);
saffa.setSurname('Warren');

console.log(saffa);
