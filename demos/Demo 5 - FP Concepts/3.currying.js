// This function returns a function
function getProperty(propertyName) {
  // This function to be exact
  return function getPropertyFromObject(obj) {
    return obj[propertyName];
  };
}

// getProperty has an arity of 2
// when we apply it with a single argument, the returned function has an arity 1

const getName = getProperty('name');
console.log({ getName });

const name = getName({ name: 'Tony' });

console.log({ name });
