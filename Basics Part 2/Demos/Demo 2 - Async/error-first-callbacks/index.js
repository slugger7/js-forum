const fetchPeople = (callback) => {
    const people = ["Kevin", "Luke", "Tim"];
    setTimeout(() => callback(null, people), 3000);
};

const ourCallback = (err, people) => {
    if (err) {
        console.error("We had some issues fetching our people");
        return; // handle the error dont swallow it
    }

    console.log("We Have the people", { people });
}

console.log("Before we call our async function");

fetchPeople(ourCallback);

console.log("We have called our async function");


// Curried example


const curriedCallback = (index) => (err, people) => {
    if (err) {
        console.error("We had some issues fetching our people");
        return;
    }

    console.log(`We have the person at ${index}`, { person: people[index]});
}

console.log("Before we call our async function with a curried callback");

const headCallback = curriedCallback(0);

console.log("Set up our curried function");

fetchPeople(headCallback);

console.log("We called our async function with our curried people");