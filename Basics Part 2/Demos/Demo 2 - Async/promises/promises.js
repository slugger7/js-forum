const lukeOrKevin = (name) => new Promise((resolve, reject) => {

    const results = {
        LUKE: () => resolve('LuKe WaS fOuNd'),
        KEVIN: () => resolve("It's me")
    }

    setTimeout
    let resolveFn = results[name.toUpperCase()];

    if (!resolveFn) {
        resolveFn = () => reject(`Could not find Luke or kevin instead found ${name}`);
    }

    setTimeout(resolveFn, 3000);
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
        return lukeOrKevin("Kevin")
    })
    .then(probe("Second Then"))
    .then(() => lukeOrKevin("luke"))
    .then(probe("Third Then"));

console.log("After calling our then chain");