// An impure function
function addName(obj, name) {
  obj.name = name;
  return obj;
}

const person = {
  age: 1,
};

console.log('before', person);

addName(person, 'Luke');

console.log('after', person);
