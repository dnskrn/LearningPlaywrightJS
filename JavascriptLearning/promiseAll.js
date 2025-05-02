//case:1
//f1 -- resolve
//f2 -- resolve
//f3 -- resolve


// const function1= ()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("Function 1 started");
//         setTimeout(()=>{
//             resolve("Function 1 resolved");
//         }, 2000);
//         console.log("Function 1 Completed");
//     });
// };

// const function2= ()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("Function 2 started");
//         setTimeout(()=>{
//             resolve("Function 2 resolved");
//         }, 3000);
//         console.log("Function 2 Completed");
//     });
// };

// const function3= ()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("Function 3 started");
//         setTimeout(()=>{
//             resolve("Function 3 resolved");
//         }, 1000);
//         console.log("Function 3 Completed");
//     });
// };

// Promise.all([
//     function1(),
//      function2(), 
//      function3()
//     ])
//     .then((results) => {
//         console.log("All functions resolved:", results);
//     })
//     .catch((error) => {
//         console.error("One or more functions failed:", error);
//     });     
    
console.log("##########################################################################");    
// case:2
//f1 -- resolve
//f2 -- reject
//f3 -- resolve 

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

Promise.all([
    getData1(),
     getData2(), 
     getData3()
    ])
    .then((results) => {
        console.log("All functions resolved:", results);
    })
    .catch((error) => {
        console.error("One or more functions failed:", error);
    });
