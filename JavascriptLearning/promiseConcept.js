new Promise((resolve, reject) => {
    const x = 10;
    const y = 10;
    if (x + y > 20) {
        resolve("Success: The sum is greater than 20");
    } else {
        reject("Error: The sum is not greater than 20");
    }
}).then((message) => {
    console.log(message); // This will run if the promise is resolved
}).catch((error) => {
    console.error(error); // This will run if the promise is rejected
}).finally(() => {
    console.log("Promise has been settled (either resolved or rejected)"); // This will run regardless of the promise's outcome
});


const randomNumberPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
    setTimeout(() => {
        if (randomNumber > 50) {
            resolve(randomNumber); // Resolve the promise with the random number if it's greater than 50
        } else {
            reject(`Random number ${randomNumber} is less than or equal to 50`); // Reject the promise if it's not
        }
    }, 2000); // Simulate a delay of 2 seconds
});

randomNumberPromise.then((number) => {
    console.log(`Success! Random number is: ${number}`); // This will run if the promise is resolved
}).catch((error) => {
    console.error(`Error: ${error}`); // This will run if the promise is rejected
});
