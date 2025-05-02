const getData1= ()=>{
    return new Promise((resolve,reject)=>{
        console.log("getData1 started");
        setTimeout(()=>{
            const data=[1,2,3,4,5]
            resolve(data);
        }, 2000);
        console.log("getData1 completed");
    });
}

const getData2= ()=>{
    return new Promise((resolve,reject)=>{
        console.log("getData2 started");
        setTimeout(()=>{
            reject("Error in getData2");
        }, 2000);
        console.log("getData2 completed");
    });
}

const getData3= ()=>{
    return new Promise((resolve,reject)=>{
        console.log("getData3 started");
        setTimeout(()=>{
            const data=[10,20,30,40,50]
            resolve(data);
        }, 15000);
        console.log("getData3 completed");
    });
}

Promise.allSettled([
    getData1(),
     getData2(), 
     getData3()
    ])
    .then((results) => {
        // console.log("All functions resolved:", results);
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Function ${index + 1} resolved with value:`, result.value);
            } else {
                console.error(`Function ${index + 1} rejected with reason:`, result.reason);
            }
        });
        // console.log("All functions settled:", results);
    })
    .catch((error) => {
        console.error("One or more functions failed:", error);
    });
