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
    name: 'Cathy',
  },
  {
    age: 6,
    name: 'Bob',
  },
];

const filter = (fn) => (items) => items.filter(fn);

const filterByAgeLessThan10 = filter(({ age }) => age < 10);

console.log({ filterByAgeLessThan10 });

const youngDogs = filterByAgeLessThan10(dogs);
const youngCats = filterByAgeLessThan10(cats);

console.log({ youngDogs, youngCats });
