// Refactor to be pure
function addName(obj, name) {
  return {
    ...obj,
    name,
  };
}

const person = {
  age: 1,
};

console.log('before', person);

const personWithName = addName(person, 'Luke');

console.log('after', person);

console.log('personWithName', personWithName);
