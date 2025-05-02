//1. Reverse a String: Write a function that reverses a given string.

function reverseString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString = reversedString + str.charAt(i);
    }
    return reversedString;
}

console.log(reverseString("Hello Dinesh"));

console.log("Hello Dinesh".split('').reverse().join(''))
