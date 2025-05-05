# JavaScript Interview Cheat Sheet (Detailed)

## I. Fundamentals

### 1. Variables and Data Types
- **Declaration**:
    - `let`: Block-scoped, can be reassigned. (ES6+)
    - `const`: Block-scoped, cannot be reassigned after initialization. (ES6+)
    - `var`: Function-scoped (or global if declared outside a function), can be reassigned and redeclared (generally avoid).

- **Primitive Data Types**:
    - `String`: Sequence of characters (`'hello'`, `"world"`).
    - `Number`: Integers and floating-point numbers (`10`, `3.14`). Includes `NaN` (Not-a-Number) and `Infinity`.
    - `Boolean`: `true` or `false`.
    - `Null`: Intentional absence of a value. `typeof null` is `'object'` (historical bug).
    - `Undefined`: Variable declared but not assigned a value.
    - `Symbol`: Unique and immutable primitive value (ES6+). Used as object property keys to avoid naming collisions.
    - `BigInt`: Integers of arbitrary length (ES2020+).

- **Non-Primitive Data Types (Objects - reference types)**:
    - `Object`: Collection of key-value pairs.
    - `Array`: Ordered list of values.
    - `Function`: Callable object.
    - Other types: `Date`, `RegExp`, `Map`, `Set`, `WeakMap`, `WeakSet`, etc.

### 2. Operators
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `++`, `--`, `**` (exponentiation - ES2016).
- **Comparison**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.
- **Logical**: `&&`, `||`, `!`.
- **Ternary**: `condition ? exprIfTrue : exprIfFalse`.
- **Bitwise**: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`.
- **Other**:
    - `typeof`: Returns a string indicating the data type of an operand.
    - `instanceof`: Checks if an object is an instance of a particular constructor.
    - `in`: Checks if a property exists in an object.
    - `...` (spread syntax): Expands an iterable (like an array or string) or an object.
    - `??` (nullish coalescing operator - ES2020): Returns the right-hand side operand when the left-hand side is `null` or `undefined`.
    - `?.` (optional chaining operator - ES2020): Returns `undefined` instead of throwing an error if an intermediate property is `null` or `undefined`.

### 3. Control Flow
- **Conditionals**:
    - `if/else if/else`: Conditional execution of code blocks.
    - `switch`: Executes different code blocks based on the value of an expression. Use `break` to avoid fall-through.

- **Loops**:
    - `for`: Iterates a specific number of times.
    - `while`: Iterates as long as a condition is true.
    - `do...while`: Executes at least once, then continues as long as a condition is true.
    - `for...in`: Iterates over the enumerable string properties of an object (not recommended for arrays).
    - `for...of` (ES6+): Iterates over iterable objects (arrays, strings, maps, sets, etc.).
    - `break`: Exits a loop or `switch` statement.
    - `continue`: Skips the current iteration of a loop.

### 4. Functions
- **Function Declaration**:
    ```javascript
    function functionName(parameter1, parameter2) {
        // function body
        return result;
    }
    ```

- **Function Expression**:
    ```javascript
    const myFunction = function(parameter) {
        return parameter * 2;
    };
    ```

- **Arrow Functions (ES6+)**:
    ```javascript
    const arrowFunction = (param1, param2) => param1 + param2;
    const singleParamArrow = param => param * param;
    const noParamArrow = () => console.log('Hello');
    const objectLiteralReturn = () => ({ value: 1 });
    ```

- **Immediately Invoked Function Expressions (IIFEs)**:
    ```javascript
    (function() {
        const privateVar = 'secret';
        console.log(privateVar);
    })();
    ```

- **Parameters**:
    - Default parameters (ES6+): `function greet(name = 'Guest') { ... }`
    - Rest parameters (ES6+): `function sum(...numbers) { ... }`
    - Arguments object (legacy): Available inside non-arrow functions.

### 5. Scope and Closures
- **Scope**:
    - Global Scope: Accessible from anywhere.
    - Function Scope: Variables declared within a function are only accessible within that function.
    - Block Scope (ES6+): Variables declared with `let` or `const` are only accessible within the block.

- **Closures**:
    A function that "remembers" its lexical environment.
    ```javascript
    function outerFunction(outerVar) {
        return function innerFunction(innerVar) {
            console.log(outerVar, innerVar);
        };
    }
    const myInnerFunc = outerFunction('hello');
    myInnerFunc('world'); // Output: hello world
    ```

### 6. Objects
- **Creating Objects**:
    - Object literal: `const myObj = { key1: 'value1', key2: 42 };`
    - Constructor function: 
        ```javascript
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        const person1 = new Person('Alice', 30);
        ```
    - ES6 Classes:
        ```javascript
        class Car {
            constructor(make, model) {
                this.make = make;
                this.model = model;
            }
            start() {
                console.log('Engine started');
            }
        }
        const myCar = new Car('Toyota', 'Camry');
        ```

- **Accessing Properties**:
    - Dot notation: `myObj.key1`
    - Bracket notation: `myObj['key2']`

- **Prototypes and Inheritance**:
    - Prototype chain: Objects inherit properties and methods from their prototype.
    - ES6 Classes provide structured inheritance using `extends` and `super`.

### 7. Arrays
- **Creating Arrays**:
    - Array literal: `const myArray = [1, 'hello', true];`
    - `Array.of(element1, element2, ...)` (ES6+): Creates a new Array instance.

- **Common Methods**:
    - `push`, `pop`, `shift`, `unshift`, `splice`, `slice`, `concat`, `join`.
    - Iteration: `forEach`, `map`, `filter`, `reduce`, `find`, `findIndex`.
    - Sorting: `sort`, `reverse`.

### 8. Asynchronous JavaScript
- **Promises**:
    - `.then`, `.catch`, `.finally`.
    - `Promise.all`, `Promise.race`.

- **Async/Await**:
    ```javascript
    async function fetchData() {
        try {
            const response = await fetch('url');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    ```

- **Event Loop**:
    - Call Stack, Task Queue, Microtask Queue.

### 9. Error Handling
- **try...catch...finally**:
    ```javascript
    try {
        // code that might throw an error
    } catch (error) {
        console.error(error);
    } finally {
        console.log('Cleanup actions');
    }
    ```

- **Custom Error Classes**:
    ```javascript
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = 'ValidationError';
        }
    }
    ```

# JavaScript Concepts and Examples

## Variable Declarations: `var`, `let`, and `const`

### Key Differences
| Feature       | `let`          | `const`        | `var`           |
|---------------|----------------|----------------|-----------------|
| **Scope**     | Block-scoped   | Block-scoped   | Function-scoped |
| **Reassignment** | Allowed       | Not allowed    | Allowed         |
| **Hoisting**  | Yes (TDZ)      | Yes (TDZ)      | Yes (initialized to `undefined`) |

### Examples
```javascript
console.log(a);  // undefined
var a = 10;

console.log(b);  // ReferenceError
let b = 10;

console.log(c);  // ReferenceError
const c = 10;

greet();
function greet() {
  console.log("Hello World Hoisting");
}
```

---

## Closures in JavaScript
A **closure** is a function that remembers the environment in which it was created, even after the outer function has finished execution.

### Example
```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");
```

---

## `setTimeout` and `setInterval`
- **`setTimeout`**: Executes a function after a specified delay.
- **`setInterval`**: Executes a function repeatedly at specified intervals.

### Example
```javascript
setTimeout(() => {
  console.log("Hello World");
}, 2000);

const timerId = setInterval(() => {
  console.log("Hello every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(timerId);
  console.log("Clearing Interval");
}, 10000);
```

---

## Promises in JavaScript
A **Promise** represents the eventual completion or failure of an asynchronous operation.

### States
1. **Pending**
2. **Fulfilled**
3. **Rejected**

### Example
```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Promise handling complete."));
```

---

## Async/Await
- **`async`**: Declares a function that returns a Promise.
- **`await`**: Pauses execution until the Promise is resolved.

### Example
```javascript
async function fetchDataFromAPI() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("Data Fetched:", data);
  } catch (err) {
    console.log("Error:", err);
  }
}

fetchDataFromAPI();
```

---

## Currying in JavaScript
Currying transforms a function into a sequence of functions, each taking a single argument.

### Example
```javascript
const curriedAdd = a => b => a + b;
console.log(curriedAdd(2)(3)); // Output: 5
```

---

## Generator Functions
A **Generator Function** can pause and resume execution using the `yield` keyword.

### Example
```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

---

## WeakMap and WeakSet
- **WeakMap**: Key-value pairs where keys are objects and are weakly referenced.
- **WeakSet**: A collection of objects, weakly referenced.

### Example
```javascript
const weakMap = new WeakMap();
let obj = { name: "John" };
weakMap.set(obj, "Some value");
obj = null; // Eligible for garbage collection

const weakSet = new WeakSet();
let obj1 = { id: 1 };
weakSet.add(obj1);
obj1 = null; // Eligible for garbage collection
```

---

## `this` in JavaScript
The value of `this` depends on the context in which a function is called.

### Example
```javascript
"use strict";
function show() {
  console.log(this);
}
show(); // undefined in strict mode
```

## Types of Promises in JavaScript

Promises in JavaScript can be categorized based on their states and usage. Below are the types of promises with examples:

### 1. **Pending**
A promise is in the pending state when it is neither resolved nor rejected. It is waiting for the asynchronous operation to complete.

#### Example
```javascript
const pendingPromise = new Promise((resolve, reject) => {
  console.log("Promise is pending...");
  setTimeout(() => resolve("Promise resolved!"), 3000);
});
```

---

### 2. **Fulfilled**
A promise is fulfilled when the asynchronous operation completes successfully, and the `resolve` function is called.

#### Example
```javascript
const fulfilledPromise = new Promise((resolve, reject) => {
  resolve("Promise fulfilled successfully!");
});

fulfilledPromise.then((result) => console.log(result));
```

---

### 3. **Rejected**
A promise is rejected when the asynchronous operation fails, and the `reject` function is called.

#### Example
```javascript
const rejectedPromise = new Promise((resolve, reject) => {
  reject("Promise rejected due to an error!");
});

rejectedPromise.catch((error) => console.error(error));
```

---

### 4. **Chained Promises**
Promises can be chained together to handle multiple asynchronous operations in sequence.

#### Example
```javascript
const chainedPromise = new Promise((resolve, reject) => {
  resolve(10);
});

chainedPromise
  .then((value) => {
    console.log("First then:", value);
    return value * 2;
  })
  .then((value) => {
    console.log("Second then:", value);
    return value * 3;
  })
  .then((value) => {
    console.log("Third then:", value);
  });
```

---

### 5. **Promise.all**
`Promise.all` takes an array of promises and resolves when all promises are fulfilled. If any promise is rejected, it immediately rejects.

#### Example
```javascript
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log("All promises resolved:", results))
  .catch((error) => console.error("One of the promises failed:", error));
```

---

### 6. **Promise.race**
`Promise.race` resolves or rejects as soon as the first promise in the array settles (either fulfilled or rejected).

#### Example
```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, "Second"));

Promise.race([promise1, promise2])
  .then((result) => console.log("Race winner:", result))
  .catch((error) => console.error("Race error:", error));
```

---

### 7. **Promise.any**
`Promise.any` resolves as soon as any one of the promises is fulfilled. If all promises are rejected, it throws an `AggregateError`.

#### Example
```javascript
const promise1 = Promise.reject("Error in promise1");
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "Promise2 resolved"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 200, "Promise3 resolved"));

Promise.any([promise1, promise2, promise3])
  .then((result) => console.log("First fulfilled promise:", result))
  .catch((error) => console.error("All promises rejected:", error));
```

---

### 8. **Promise.allSettled**
`Promise.allSettled` waits for all promises to settle (either fulfilled or rejected) and returns an array of their results.

#### Example
```javascript
const promise1 = Promise.resolve("Resolved promise1");
const promise2 = Promise.reject("Rejected promise2");
const promise3 = Promise.resolve("Resolved promise3");

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => console.log("All promises settled:", results));
```

---

### 9. **Promise.finally**
The `finally` method is executed after a promise is settled, regardless of whether it was fulfilled or rejected.

#### Example
```javascript
const myPromise = new Promise((resolve, reject) => {
  resolve("Promise resolved!");
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Promise handling complete."));
```

These examples demonstrate the versatility of promises in handling asynchronous operations in JavaScript.



### 10. **Async and Await**

`async` and `await` are modern JavaScript features that simplify working with promises, making asynchronous code easier to read and write. They allow you to write asynchronous code that looks synchronous.

#### Key Points:
1. **`async`**: Declares a function as asynchronous. An `async` function always returns a promise.
2. **`await`**: Pauses the execution of an `async` function until the promise is resolved or rejected. It can only be used inside an `async` function.

---

#### Example 1: Basic Usage
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```
**Explanation**:
- The `fetchData` function is declared as `async`.
- The `await` keyword pauses the function until the `fetch` promise is resolved.
- If an error occurs, it is caught in the `catch` block.

---

#### Example 2: Sequential Execution
```javascript
async function processTasks() {
  const task1 = await new Promise((resolve) => setTimeout(() => resolve("Task 1 completed"), 1000));
  console.log(task1);

  const task2 = await new Promise((resolve) => setTimeout(() => resolve("Task 2 completed"), 2000));
  console.log(task2);

  const task3 = await new Promise((resolve) => setTimeout(() => resolve("Task 3 completed"), 1000));
  console.log(task3);
}

processTasks();
```
**Explanation**:
- Each `await` pauses the function until the respective promise is resolved.
- Tasks are executed sequentially, one after the other.

---

#### Example 3: Parallel Execution with `Promise.all`
```javascript
async function processTasksInParallel() {
  const task1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 completed"), 1000));
  const task2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 completed"), 2000));
  const task3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 completed"), 1000));

  const results = await Promise.all([task1, task2, task3]);
  console.log("All tasks completed:", results);
}

processTasksInParallel();
```
**Explanation**:
- Promises are created for each task.
- `Promise.all` runs all promises in parallel and waits for all of them to resolve.
- The `await` keyword pauses until all promises are resolved.

---

#### Example 4: Error Handling
```javascript
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
    const data = await response.json();
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    console.log("Fetch attempt complete.");
  }
}

fetchDataWithErrorHandling();
```
**Explanation**:
- The `try` block handles successful promise resolution.
- The `catch` block handles errors, such as network issues or invalid URLs.
- The `finally` block executes regardless of success or failure.

---

#### Example 5: Using `async` Functions with Array Methods
```javascript
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

async function fetchAllData() {
  const results = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      return response.json();
    })
  );
  console.log("Fetched data:", results);
}

fetchAllData();
```
**Explanation**:
- `async` functions can be used inside array methods like `map`.
- `Promise.all` ensures all fetch operations are completed before proceeding.

---

#### Key Differences Between Promises and Async/Await:
| Feature            | Promises                          | Async/Await                     |
|--------------------|-----------------------------------|----------------------------------|
| Syntax             | `.then()`, `.catch()`, `.finally()` | `async` and `await` keywords    |
| Readability        | Can become complex with chaining  | Cleaner and more readable       |
| Error Handling     | `.catch()` for errors             | `try` and `catch` blocks        |
| Execution Style    | Explicit chaining                | Synchronous-like flow           |

---

Using `async` and `await` makes asynchronous code easier to understand and maintain, especially when dealing with multiple asynchronous operations.

