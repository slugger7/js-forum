
setTimeout(() => console.log('Macro task 1'), 0);
setTimeout(() => console.log('Macro task 2'), 0);

const promise = Promise.resolve();
promise.then(() => console.log('Micro task 1'));
promise.then(() => console.log('Micro task 2'));

function doWork(){
    console.log('Stack frame');
}

doWork();
