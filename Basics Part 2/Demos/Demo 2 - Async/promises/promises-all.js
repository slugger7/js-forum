const promises = [
    Promise.resolve("Kevin"),
    Promise.resolve("Luke"),
    Promise.resolve("Tim"),
    //Promise.reject("Yeah we messed up"),
]; 

const allPromise = Promise.all(promises);

allPromise
    .then(([kevin, luke, tim]) => {
        console.log({ kevin, luke, tim });
    })
    .catch(err => console.error("Something went wrong", err));