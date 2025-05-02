//Find the Second Largest Element in an Array: Write a function that finds the second largest element in an array of numbers.

const secondLargest = (ar) => {
    for (let j = 0; j < ar.length; j++) {
        for (let i = 0; i < ar.length - 1; i++) {
            if (ar[i] < ar[i + 1]) {
                [ar[i], ar[i + 1]] = [ar[i + 1], ar[i]];
            }
        }
    }

    for (let j = 0; j < ar.length; j++) {
        if (ar[j] !== ar[j + 1]) {
            return ar[j + 1];
        }
    }

    return ar
}

console.log(secondLargest([1, 5, 8, 3, 6, 4, 8]))

function findSecondLargest(arr) {
    if (arr.length < 2) {
        return undefined;
    }
    const sortedArr = [...new Set(arr)].sort((a, b) => b - a);
    return sortedArr[1];
}

console.log(findSecondLargest([3, 7, 1, 9, 4, 9])); // Output: 7



