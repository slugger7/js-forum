function American(name) {
  this.annoying = true;
  this.name = name;

  // Instance method
  this.shout = function(){
    console.log("Loud noises! Love " + this.name);
  }
}

American.prototype.setSurname = function (surname) {
  this.surname = surname;
};

const donald = new American('Donald');

donald.setSurname('Trump');
donald.shout();

console.log(donald);

class ClassyAmerican {
  constructor(name){
    this.annoying = false;
    this.name = name;
  }

  shout = function(){
    console.log("Loud noises! Love " + this.name);
  }

  // Instance method
  shout = () => {
    console.log("Loud noises! Love " + this.name);
  }

  // Prototype method
  setSurname(surname) {
    this.surname = surname;
  }
}

var classyAmerican = new ClassyAmerican("Kevin")
classyAmerican.setSurname('Heritage');

console.log(classyAmerican);