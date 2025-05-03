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
