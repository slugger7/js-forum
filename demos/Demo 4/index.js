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

const templateString = () => {
  console.log("Foreach");
  people.forEach((person) => console.log(`Hello ${person.name}`));
};

const objectDestructuring = () => {
  console.log("Find");
  const kevin = people.find(({ name }) => name === "Kevin");
  console.log("Kevin: ", kevin);
};

const arrayDestructuring = () => {
  console.log("arrayDestructure");
  const bananas = "Kevin)Luke)Tim";
  const [kevin, luke, tim] = bananas.split(")");
  console.log("Array of people: ", kevin, luke, tim);
};

const destructureRenaming = () => {
    console.log("Destructure Renaming");
    const [kevin, luke, tim] = people;
    const { name } = kevin;
    const { name: lukesName } = luke;
    const { name: timsName } = tim;

    console.log("Name: ", name);
    console.log("LukesName: ", lukesName);
    console.log("TimsName: ", timsName);
}

const spreading = () => {
  console.log("Spreading");

  const joinedFunction = (...args) => {
    console.log("Args: ", args);
  };

  const twoArityFunction = (arg1, arg2, ...rest) => {
    console.log("Arg1: ", arg1);
    console.log("Arg2: ", arg2);
    console.log("Rest: ", rest);
  };

  joinedFunction(...people);
  twoArityFunction(...people);
};
