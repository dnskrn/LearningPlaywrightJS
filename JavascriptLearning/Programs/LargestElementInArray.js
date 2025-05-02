// Find the Largest Element in an Array: Write a function that finds the largest element in an array of numbers.
const largest = (ar) => {
    let largest = ar[0];
    for (let a of ar) {
        if (a > largest) {
            largest = a;
        }
    }
    return largest;
}

console.log(largest([1, 7, 3, 9, 5, 12, 4, 6]))
console.log(largest([]))
console.log(largest([1, 7, 3, 9, 5, 12, 4, 6]))