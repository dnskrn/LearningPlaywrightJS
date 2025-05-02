//sync vs async behavior in JavaScript

//synchronous behavior in JavaScript
// In JavaScript, synchronous code is executed in a single thread, meaning that each operation must complete before the next one begins. 
// This can lead to blocking behavior, especially with I/O operations like network requests or file reading. On the other hand, asynchronous code allows for non-blocking operations, enabling multiple tasks to be executed concurrently without waiting for each one to finish before starting the next. This is achieved through callbacks, promises, and async/await syntax, which help manage the flow of asynchronous operations more effectively.  

// start
//1 -- done -> fetch 1000 records from the database -> 20 Seconds
//2 -- done -> display 1000 records on the UI -> 10 Seconds
//3 -- done -> send email to 1000 users -> 5 Seconds
//4 -- done -> send SMS to 1000 users -> 5 Seconds
//5 -- done -> send push notification to 1000 users -> 5 Seconds
// end

// console.log("Start");
// for(let i = 0; i < 1000; i++) {
//     // Simulating a time-consuming task
//     console.log(i);
// }
// console.log("End");


//Async:
// In JavaScript, asynchronous code allows for non-blocking operations, enabling multiple tasks to be executed concurrently without waiting for each one to finish before starting the next. This is achieved through callbacks, promises, and async/await syntax, which help manage the flow of asynchronous operations more effectively.
// Asynchronous programming is particularly useful for I/O operations, such as network requests or file reading, where waiting for a response can lead to performance bottlenecks in synchronous code. By using asynchronous techniques, developers can improve the responsiveness and efficiency of their applications, ensuring that they remain user-friendly even during long-running tasks.

// start
//1 -- done -> fetch 1000 records from the database -> 20 Seconds
//2 -- done -> display 1000 records on the UI -> 10 Seconds
//3 -- done -> send email to 1000 users -> 5 Seconds
//4 -- done -> send SMS to 1000 users -> 5 Seconds
//5 -- done -> send push notification to 1000 users -> 5 Seconds    
// end

console.log("Start");
setTimeout(() => {
    console.log("Fetching records from the database...");
}, 10000); // Simulating a 20-second delay for fetching records
setTimeout(() => {
    console.log("Displaying records on the UI...");
}, 5000); // Simulating a 10-second delay for displaying records   

console.log("End")
setTimeout(() => {
    console.log("send email to 1000 users...");
}, 1000); // Simulating a 10-second delay for displaying records   
