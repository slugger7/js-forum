async function justDoIt() {
    const asyncFns = [
        () => new Promise(resolve => setTimeout(resolve, 3000, "Kevin")),
        () => new Promise(resolve => setTimeout(resolve, 1000, "Luke")),
        () => new Promise(resolve => setTimeout(resolve, 3000, "Tim")),
    ];

    console.log("Before all creating awaiters");

    const awaiters = asyncFns.map(fn => fn());

    console.log("After calling awaiters");

    const people = [];

    for await (const person of awaiters) {
        console.log("Waiting for somethnig");
        people.push(person);
    }

    console.log(await Promise.all(awaiters));

    console.log("Done waiting we have our people");

    const [kevin, luke, tim] = people;

    console.log({ kevin, luke, tim });
}

console.log("Before we do the things");

justDoIt();

console.log("After we started doing things");