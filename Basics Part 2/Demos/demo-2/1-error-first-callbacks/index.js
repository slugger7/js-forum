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