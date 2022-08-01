// This function returns a function
function getProperty2(propertyName) {
  // This function to be exact
  return function getPropertyFromObject(obj) {
    return obj[propertyName];
  };
}

// Shorthand
const getProperty = propertyName => obj => obj[propertyName];

// getProperty has an arity of 2
// when we apply it with a single argument,
// the returned function has an arity 1

const getName = getProperty('name');
console.log({ getName, numOfArgs: getName.length });

const name = getProperty({ name: 'Tony' });

console.log(name);
