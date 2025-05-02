//Promise.race

const rejectPromise1 = () => {
    return new Promise((resolve, reject) => {
        console.log("Promise started");
        setTimeout(() => {
            reject("Promise rejected successfully");
        }, 2000);
        console.log("Promise completed");
    });
};

const resolvePromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Promise started");
        setTimeout(() => {
            resolve("Promise resolved successfully");
        }, 800);
        console.log("Promise completed");
    });
};

const rejectPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Promise started");
        setTimeout(() => {
            reject("Promise rejected successfully");
        }, 2000);
        console.log("Promise completed");
    });
};

Promise.race([
    rejectPromise1(),
    resolvePromise(),
    rejectPromise()
])
    .then((result) => {
        console.log(result); // This will run if the first promise resolves
    }).catch((error) => {
        console.error(error); // This will run if the first promise rejects
    });