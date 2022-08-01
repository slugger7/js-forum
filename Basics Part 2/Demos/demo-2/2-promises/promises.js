const lukeOrKevin = (name) => new Promise((resolve, reject) => {
    const results = {
        LUKE: 'LuKe WaS fOuNd',
        KEVIN: "It's KEVIN"
    };

    setTimeout(() => {

        const person = results[name.toUpperCase()];

        if(person){
            resolve(person);
        }
        else{
            reject(`${name} was not found`)
        }

    }, 3000);
});

const probe = (message) => (data) => {
    console.log(message, data);
    return data;
}

console.log("Before calling lukeOrKevin");

lukeOrKevin("Tim")
    .then(probe("First then"))
    .catch((err) => {
        console.error(err);
        return lukeOrKevin("Kevin") // Promises returned from within promises are unwrapped
    })
    .then(probe("Second Then"))
    .then(() => "luke") // Not returning a promise
    .then(probe("Third Then"));

console.log("After calling our then chain");