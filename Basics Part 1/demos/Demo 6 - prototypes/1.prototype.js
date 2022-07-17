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

console.log({donald});
console.log({American});

const johnny = new American("Johnny");

donald.buildWall = function() {
  console.log(`${this.name} is building it`);
};

donald.buildWall();
try {
  johnny.buildWall();
} catch (err) {
  console.log("Johnny was unable to build a wall")
}

console.log({johnny});

American.prototype.makeBourbon = function() {
  console.log(this.name + ': 51% Corn, aged for 4 years in virgin oak');
}

johnny.makeBourbon();
donald.makeBourbon();

class Brit {
  constructor(name){
    this.annoying = false;
    this.name = name;
  }

  shout = function() {
    console.log("Oh yeah baby! love " + this.name);
  }

  // Instance method
  shout = () => {
    console.log("Oh yeah baby! Love " + this.name);
  }

  // Prototype method
  setSurname(surname) {
    this.surname = surname;
  }
}

var austin = new Brit("Austin")
austin.setSurname('Powers');
austin.shout();
console.log(austin);