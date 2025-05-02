// Rotate an Array: Write a function that rotates an array to the right by a given number of steps.

function rotateArrayRight(ar, k) {
    let n = ar.length;
    k = k % n;

    for (let i = 0; i < k; i++) {
        let last = ar[n - 1];
        for (let j = n - 1; j > 0; j--) {
            ar[j] = ar[j - 1];
        }
        ar[0] = last;
    }

    return ar;
}

console.log(rotateArrayRight([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

function rotateArray(arr, k) {
    const len = arr.length;
    k = k % len; // Handle cases where k > length

    return arr.slice(-k).concat(arr.slice(0, len - k));
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

