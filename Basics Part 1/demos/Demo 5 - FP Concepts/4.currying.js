const dogs = [
  {
    age: 10,
    name: 'Peter',
  },
  {
    age: 9,
    name: 'Jane',
  },
];

const cats = [
  {
    age: 11,
    firstName: 'Cathy',
  },
  {
    age: 6,
    firstName: 'Bob',
  },
];

const filter = (fn) => (items) => items.filter(fn);

const filterByAgeLessThan10 = filter(({ age }) => age < 10);

console.log({ filterByAgeLessThan10 });

const youngDogs = filterByAgeLessThan10(dogs);
const youngCats = filterByAgeLessThan10(cats);

console.log({ youngDogs, youngCats });

// insert Ramda plug here
