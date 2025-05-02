// Array Functions with Examples

// 1. push() - Adds one or more elements to the end of an array
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// 2. pop() - Removes the last element from an array
arr.pop();
console.log(arr); // [1, 2, 3]

// 3. shift() - Removes the first element from an array
arr.shift();
console.log(arr); // [2, 3]

// 4. unshift() - Adds one or more elements to the beginning of an array
arr.unshift(1);
console.log(arr); // [1, 2, 3]

// 5. concat() - Merges two or more arrays
let arr2 = [4, 5];
let merged = arr.concat(arr2);
console.log(merged); // [1, 2, 3, 4, 5]

// 6. slice() - Returns a shallow copy of a portion of an array
let sliced = merged.slice(1, 4);
console.log(sliced); // [2, 3, 4]

// 7. splice() - Adds/removes elements from an array
merged.splice(2, 1, 10);
console.log(merged); // [1, 2, 10, 4, 5]

// 8. forEach() - Executes a function for each array element
merged.forEach((item) => console.log(item)); // Logs each element

// 9. map() - Creates a new array with the results of calling a function on every element
let mapped = merged.map((item) => item * 2);
console.log(mapped); // [2, 4, 20, 8, 10]

// 10. filter() - Creates a new array with elements that pass a test
let filtered = merged.filter((item) => item > 3);
console.log(filtered); // [10, 4, 5]

// 11. reduce() - Reduces the array to a single value
let sum = merged.reduce((acc, item) => acc + item, 0);
console.log(sum); // 22

// 12. find() - Returns the first element that satisfies a condition
let found = merged.find((item) => item > 3);
console.log(found); // 10

// 13. findIndex() - Returns the index of the first element that satisfies a condition
let foundIndex = merged.findIndex((item) => item > 3);
console.log(foundIndex); // 2

// 14. indexOf() - Returns the first index of a specified value
let index = merged.indexOf(10);
console.log(index); // 2

// 15. includes() - Checks if an array contains a specified value
let hasValue = merged.includes(10);
console.log(hasValue); // true

// 16. sort() - Sorts the elements of an array
let sorted = merged.sort((a, b) => a - b);
console.log(sorted); // [1, 2, 4, 5, 10]

// 17. reverse() - Reverses the order of the elements in an array
let reversed = sorted.reverse();
console.log(reversed); // [10, 5, 4, 2, 1]

// 18. join() - Joins all elements of an array into a string
let joined = reversed.join("-");
console.log(joined); // "10-5-4-2-1"

// 19. split() - Splits a string into an array (not an array method but often used with join)
let splitArray = joined.split("-");
console.log(splitArray); // ["10", "5", "4", "2", "1"]

// 20. every() - Checks if all elements pass a test
let allGreaterThanZero = merged.every((item) => item > 0);
console.log(allGreaterThanZero); // true

// 21. some() - Checks if at least one element passes a test
let someGreaterThanFive = merged.some((item) => item > 5);
console.log(someGreaterThanFive); // true

// 22. flat() - Flattens nested arrays
let nested = [1, [2, [3, 4]], 5];
let flattened = nested.flat(2);
console.log(flattened); // [1, 2, 3, 4, 5]

// 23. flatMap() - Maps and flattens the array in one step
let flatMapped = [1, 2, 3].flatMap((x) => [x, x * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6]

// 24. fill() - Fills elements in an array with a static value
let filled = new Array(5).fill(0);
console.log(filled); // [0, 0, 0, 0, 0]

// 25. Array.from() - Creates an array from an iterable or array-like object
let fromString = Array.from("hello");
console.log(fromString); // ["h", "e", "l", "l", "o"]

// 26. Array.isArray() - Checks if a value is an array
console.log(Array.isArray(arr)); // true
console.log(Array.isArray({})); // 

// 27. lastIndexOf() - Returns the last index of a specified value
let lastIndex = merged.lastIndexOf(10);
console.log(lastIndex); //2

// // 28. lastIndexOf() - Returns the last index of a specified value
// let lastIndex = merged.lastIndexOf(10);
// console.log(lastIndex); // 2

// 29. firstIndexOf() - Returns the first index of a specified value (same as indexOf)
let firstIndex = merged.indexOf(10);
console.log(firstIndex); // 2