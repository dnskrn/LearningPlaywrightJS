// https://www.youtube.com/watch?v=MX48mv73jf8


// console.log(a);  //undefined
// var a = 10

// console.log(b); //ReferenceError
// let b = 10

// console.log(c); //ReferenceError
// const c = 10

// greet()

// function greet() {
//     console.log("Hello World Hoisting ")
// }

// In JavaScript, let, const, and var are used to declare variables, but they differ in scope, mutability, and hoisting behavior. Here's a breakdown:

// 1. let
// Scope: Block-scoped. The variable is only accessible within the block {} where it is defined.
// Reassignment: You can reassign the value of a let variable.
// Hoisting: let is hoisted, but it is not initialized. Accessing it before declaration results in a ReferenceError (Temporal Dead Zone).
// Example:

// 2. const
// Scope: Block-scoped, like let.
// Reassignment: You cannot reassign a const variable. However, if the variable holds an object or array, you can modify its contents.
// Hoisting: Like let, it is hoisted but not initialized, leading to a ReferenceError if accessed before declaration.
// Example:

// 3. var
// Scope: Function-scoped. The variable is accessible throughout the function where it is declared, or globally if declared outside a function.
// Reassignment: You can reassign the value of a var variable.
// Hoisting: var is hoisted and initialized to undefined. Accessing it before declaration does not throw an error but returns undefined.
// Example:

// Key Differences
// Feature	let	const	var
// Scope	Block-scoped	Block-scoped	Function-scoped
// Reassignment	Allowed	Not allowed	Allowed
// Hoisting	Yes (TDZ)	Yes (TDZ)	Yes (initialized to undefined)
// Recommendation
// Use const by default for variables that won't be reassigned.
// Use let for variables that need to be reassigned.
// Avoid var in modern JavaScript as it can lead to bugs due to its function scope and hoisting behavior.


// Closure in JavaScript
// A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.
// Closures are created every time a function is created, at function creation time.

// a closure function is function that remember the environment in which it was created even after the outer function has finished execution

// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer Variable: ${outerVariable}`);
//         console.log(`Inner Variable: ${innerVariable}`);
//     };
// }

// const newFunction = outerFunction("outside");
// newFunction("inside");

// Explanation:
// - `outerFunction` takes an argument `outerVariable` and returns `innerFunction`.
// - `innerFunction` has access to `outerVariable` due to closure, even after `outerFunction` has finished execution.

// function counter() {
//     let count = 0;

//     return {
//         increament: function () {
//             count++;
//             return count;
//         },
//         decrement: function () {
//             count--;
//             return count;
//         },
//         displayCount: function () {
//             let message = `Current count: ${count}`;
//             return message;
//         }
//     }
// }

// const mycounter = counter();

// console.log(mycounter.increament());
// console.log(mycounter.displayCount());
// console.log(mycounter.increament());
// console.log(mycounter.displayCount());
// console.log(mycounter.decrement());
// console.log(mycounter.displayCount())


//setTimeout and setinterval
// setTimeout => used to execute a function after a specified delay
// setinterval => used to execute a function repeatedly at specified intervals

// setTimeout(() => {
//     console.log("Hello World");

// }, 2000);

// const timerid=setInterval(() => {
//     console.log("Hello After every 2 Seconds");
// }, 2000)

// setTimeout(() => {
//     clearInterval(timerid)
//     console.log("Clearing Interval");

// }, 10000);

// Promises in JavaScript
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

//Promises handle asynchronus tasks in javaScript by providing a more readable and structured approach than callback for handling outputs
// 1. Pending
// 2. fullfilled
// 3. rejected

// const myPromise = new Promise((resolve, reject) => {
//     let success = true; // Simulate success or failure
//     if (success) {
//         resolve("Promise resolved successfully!");
//     } else {
//         reject("Promise rejected!");
//     }
// });

// Handling Promises
// myPromise
//     .then((result) => {
//         console.log(result); // Logs: Promise resolved successfully!
//     })
//     .catch((error) => {
//         console.error(error); // Logs: Promise rejected!
//     })
//     .finally(() => {
//         console.log("Promise handling complete.");
//     });

// Explanation:
// - `resolve`: Called when the operation is successful.
// - `reject`: Called when the operation fails.
// - `.then()`: Handles the resolved value of the promise.
// - `.catch()`: Handles the rejected value of the promise.
// - `.finally()`: Executes code after the promise is settled (resolved or rejected).

// Example: Simulating an API call with a Promise
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { id: 1, name: "John Doe" };
//             resolve(data); // Simulate successful API response
//         }, 2000);
//     });
// }

// fetchData()
//     .then((data) => {
//         console.log("Data fetched:", data);
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error);
//     });

// 18
// async => Declaring a function with async makes it return promise
// await => It Pauses the execution of the code until the promise it's waiting for is resolved

// async function fetchDataFromAPI() {
//     try{
//         const response= await fetch("https://jsonplaceholder.typicode.com/todos/1"); //https://jsonplaceholder.typicode.com/todos/1
        
//         const data = await response.json();
//         console.log("Data Fetched from API", data)
//     } catch(err){
//         console.log("Error: ", err);
        
//     }
// }

// fetchDataFromAPI().then(()=>{
//     console.log("Fetched Successful");
// })

// 19
// call => Runs the function immediately, passing each argument separately
// apply => Runs the function immediately, passing each argument as an array
// bind => Creates a new function with preset this and arguments which you call later

// function cook(ing1, ing2, ing3){
//     console.log(`${this.name} ${this.lastname} is having a meal with ${ing1}, ${ing1} and ${ing1}`)
// }

// const adam={name: "Adam", lastname:"chris"};

// cook.call(adam, "rice","beans","water")
// cook.apply(adam, ["rice","beans","water"])

// const cookForAdam = cook.bind(adam, "rice","beans","water")

// cookForAdam()

// 22
// Difference Betn Async/await and Promise
// async/await => it is a cleaner, more readable way to handle Promise
// promise => promises are the underlying mechanism

// A Promise in JavaScript is like a "contract" that represents a value that will be available in the future. It is used to handle asynchronous operations, such as fetching data from a server, without blocking the rest of the code from running.

// Think of a Promise as a delivery service:

// You place an order (start an asynchronous task).
// The delivery service promises to deliver the package (resolve) or inform you if something goes wrong (reject).
// You can specify what to do when the package arrives (.then()) or if there’s an issue (.catch()).
// Here’s a simple example:

// Key Points:
// Pending: The Promise is waiting for the task to finish.
// Resolved: The task succeeded, and the Promise provides the result.
// Rejected: The task failed, and the Promise provides an error.
// Promises make it easier to manage asynchronous code compared to traditional callbacks, especially when chaining multiple operations.

// Using Promises
// function fetchDataWithPromise() {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//         .then((response) => response.json())
//         .then((data) => {
//             console.log("Data fetched with Promise:", data);
//         })
//         .catch((error) => {
//             console.error("Error with Promise:", error);
//         });
// }

// Using Async/Await
// async function fetchDataWithAsyncAwait() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data = await response.json();
//         console.log("Data fetched with Async/Await:", data);
//     } catch (error) {
//         console.error("Error with Async/Await:", error);
//     }
// }

// Call both functions to demonstrate
// fetchDataWithPromise();
// fetchDataWithAsyncAwait();

// The reduce method in JavaScript is used to process an array and reduce it to a single value. It iterates through the array, applying a callback function to an accumulator and each element in the array. The result of the callback function is stored in the accumulator, which is ultimately returned as the final result.

// Key Points:
// Purpose: To combine all elements of an array into a single value (e.g., sum, product, object, or even another array).
// Callback Function: The callback function takes four arguments:
// accumulator: The running total or result.
// currentValue: The current element being processed.
// currentIndex (optional): The index of the current element.
// array (optional): The array being processed.
// Initial Value: You can provide an initial value for the accumulator. If not provided, the first element of the array is used as the initial value, and the iteration starts from the second element.

// Example 1: Summing Numbers
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 10

// // Example 2: Flattening an Array
// const nestedArray = [[1, 2], [3, 4], [5]];
// const flatArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// console.log(flatArray); // Output: [1, 2, 3, 4, 5]

// // Example 2: Flattening an Array
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// const fruitCount = fruits.reduce((accumulator, fruit) => {
//   accumulator[fruit] = (accumulator[fruit] || 0) + 1;
//   return accumulator;
// }, {});
// console.log(fruitCount); // Output: { apple: 3, banana: 2, orange: 1 }

// Why Use reduce?
// It is powerful for transforming arrays into any desired output.
// It avoids the need for manual loops, making the code more concise and expressive.
// Let me know if you'd like further clarification or examples!


// Currying in JavaScript is a functional programming concept where a function is transformed into a sequence of functions, 
// each taking a single argument. Instead of taking all arguments at once, a curried function takes the first argument 
// and returns another function that takes the next argument, and so on, until all arguments are provided. Once all arguments are supplied, 
// the original function is executed.

// Why Use Currying?
// Reusability: It allows you to create specialized functions by pre-filling some arguments.
// Readability: It can make code more declarative and easier to understand.
// Composability: It works well with functional programming techniques, enabling better composition of functions.
// Example of Currying
// Here’s a simple example to illustrate currying:
// A normal function
// function add(a, b) {
//     return a + b;
//   }
//   console.log(add(2, 3)); // Output: 5
  
//   // Curried version of the same function
//   function curriedAdd(a) {
//     return function(b) {
//       return a + b;
//     };
//   }
//   const addTwo = curriedAdd(2); // Partially applied function
//   console.log(addTwo(3)); // Output: 5
//   console.log(curriedAdd(2)(3)); // Output: 5

// // Using Arrow Functions for Currying
// // You can make curried functions more concise using arrow functions:

// const curriedAdd1 = a => b => a + b;
// console.log(curriedAdd1(2)(3)); // Output: 5

// // Practical Use Case
// // Currying is particularly useful when you need to create reusable functions with pre-filled arguments. For example:

// const multiply = a => b => a * b;

// const double = multiply(2); // Pre-fill 'a' with 2
// const triple = multiply(3); // Pre-fill 'a' with 3

// console.log(double(5)); // Output: 10
// console.log(triple(5)); // Output: 15
// console.log(multiply(5)(10))
// // Currying with reduce
// // Currying can also be combined with reduce for advanced functional programming tasks. Let me know if you'd like an example!




// // 25
// // dnskrn: what is Generator function

// //  **Generator function** in JavaScript is a special type of function that can pause its execution and later resume from where it left off. 
// //  It is defined using the `function*` syntax (note the asterisk `*` after the `function` keyword). 
// //  Instead of returning a single value, a generator function returns an **iterator** object that can produce multiple values over time, 
// //  one at a time, using the `yield` keyword.

// // ### Key Features:
// // 1. **Pause and Resume**: A generator function can pause execution at any `yield` statement and resume later.
// // 2. **Iterator Protocol**: The returned object conforms to the iterator protocol, meaning it has a `next()` method that returns `{ value, done }`.
// // 3. **Lazy Evaluation**: Values are generated on demand, making it memory-efficient for large sequences.

// // ### Syntax:
// // ```javascript
// function* generatorFunction() {
//     yield 1; // Pauses here and returns 1
//     yield 2; // Pauses here and returns 2
//     yield 3; // Pauses here and returns 3
// }


// // ### Example:
// // javascript
// function* numberGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const gen = numberGenerator();

// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: 3, done: false }
// console.log(gen.next()); // { value: undefined, done: true }


// // ### Use Cases:
// // 1. **Iterating over sequences**: Useful for generating sequences of values lazily.
// // 2. **Asynchronous programming**: Often used with `async`/`await` or libraries like `co` for managing asynchronous code.
// // 3. **Infinite sequences**: Generators can produce infinite sequences without consuming memory for all values upfront.

// function* infiniteSequence(){
//     let num=1;
//     while(true){
//         yield num;
//         num++
//     }
// }
// const seq= infiniteSequence();
// console.log(`From infiniteSequence Method : ${seq.next().value}`);
// console.log(`From infiniteSequence Method : ${seq.next().value}`);

// for(let i=1;i<=5;i++)
//     console.log(`From infiniteSequence Method : ${seq.next().value}`);

// // 26
// // WeakMap and WeakSet in JavaScript

// // WeakMap
// // A WeakMap is a collection of key-value pairs where the keys are objects and the values can be arbitrary values. 
// // The keys in a WeakMap are weakly referenced, meaning they do not prevent garbage collection if there are no other references to the key object.

// const weakMap = new WeakMap();
// let obj = { name: "John" };

// weakMap.set(obj, "Some value");
// console.log(weakMap.get(obj)); // Output: Some value

// obj = null; // The object is now eligible for garbage collection
// // The key-value pair in the WeakMap will also be removed automatically

// // WeakSet
// // A WeakSet is a collection of objects, where each object is weakly referenced. 
// // Like WeakMap, objects in a WeakSet do not prevent garbage collection if there are no other references to them.

// const weakSet = new WeakSet();
// let obj1 = { id: 1 };

// weakSet.add(obj1);
// console.log(weakSet.has(obj1)); // Output: true

// obj1 = null; // The object is now eligible for garbage collection
// // The object will be removed from the WeakSet automatically

// // Key Points:
// // 1. WeakMap and WeakSet are useful for managing memory efficiently, especially when working with temporary or ephemeral objects.
// // 2. They do not have methods to iterate over their elements because their contents are weakly held and can be garbage-collected at any time.

"use strict"
//todo this as global property

function show(){
    console.log(this);
}

show();
























































