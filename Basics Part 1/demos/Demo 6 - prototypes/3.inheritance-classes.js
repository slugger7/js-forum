

class Person {
  constructor(name) {
    this.name = name;
  }

  setSurname (surname) {
    this.surname = surname;
  }
}

class SouthAfrican extends Person {
  constructor(name, loadsheddingLevel){
    super(name);
    this.loadsheddingLevel = loadsheddingLevel;
  }

  shoutShout() {
    console.log('Let it all out! These are the things... sing it with me now...');
  }
}

const saffa = new SouthAfrican('Luke', 2);
saffa.shoutShout();

saffa.setSurname('Warren');

console.log(saffa);
