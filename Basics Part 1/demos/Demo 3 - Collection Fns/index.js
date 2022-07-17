const people = [
  {
    name: "Kevin",
    age: 55,
  },
  {
    name: "Luke",
    age: 45,
  },
  {
    name: "Tim",
    age: 21,
  },
];

const theForeach = () => {
  console.log("Foreach");
  people.forEach(person => console.log("Hello ", person.name));
};

const theFind = () => {
  console.log("Find");
  const kevin = people.find(person => person.name === "Kevin");
  console.log("Kevin: ", kevin);
};

const theMap = () => {
  console.log("Map");
  const namesWithNamesAndAges = people.map(person => ({
    name: person.name,
    nameWithAge: [person.name, person.age].join(" "),
  }));
  console.log("Just Names: ", namesWithNamesAndAges);
};

const theFilter = () => {
  console.log("Filter");
  const peopleWithK = people.filter(person =>
    person.name
      .toUpperCase()
      .includes("K")
  );
  console.log("People With K: ", peopleWithK);
};

const theSome = () => {
  console.log("Some");
  const doesContainSomeoneWithK = people.some(person =>
    person.name
      .toUpperCase()
      .includes("K")
  );
  console.log("Does contain someone with K: ", doesContainSomeoneWithK);
};

const theReduce = () => {
  console.log("Reduce");
  const totalAge = people.reduce(
    (total, person) => total + person.age,
    0
  );
  console.log("Total age: ", totalAge);
};

const bananaSplit = () => {
  console.log("Split");
  const bananas = "Kevin)Luke)Tim";
  const arrayOfPeople = bananas.split(")");
  console.log("Array of people: ", arrayOfPeople);
};
