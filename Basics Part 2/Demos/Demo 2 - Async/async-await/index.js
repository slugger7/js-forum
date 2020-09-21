const pinkyPromise = new Promise(resolve => setTimeout(resolve, 3000, 'Strong pinky'));

const justDo = async () => {
    console.log("Before we discuss any pinkies");

    const whatPinky = await pinkyPromise;

    console.log("You has pinky? ", whatPinky);
};

console.log("Before we call our async fn");

justDo();

console.log("After we called our async fn");
