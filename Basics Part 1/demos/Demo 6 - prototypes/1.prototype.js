function American(name) {
  this.annoying = true;
  this.name = name;
}

American.prototype.setSurname = function (surname) {
  this.surname = surname;
};

const donald = new American('Donald');
donald.setSurname('Trump');

console.log(donald);

// What this looks like under the hood:
// {
//     name: "Donald",
//     surname: "Trump",
//     annoying: true,
//     __proto__: {
//        setSurname: function() { ... }
//     }
// }
