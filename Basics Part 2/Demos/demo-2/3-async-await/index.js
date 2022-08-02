const pinkyPromise = new Promise(resolve => setTimeout(resolve, 3000, 'Strong pinky'));

const justDo = async () => {
    console.log("Before await");

    const whatPinky = await pinkyPromise;

    console.log("After Promise", whatPinky);
};

console.log("Before we call our async fn");

justDo().then(() => {
    console.log('donezies')
});

console.log("After we called our async fn");
