const reverseNumber = (num) => {
    let reversedNumber = 0;
    while (num > 0) {
        let digit = num % 10;
        reversedNumber = reversedNumber * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversedNumber;
}

console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(987654321)); // Output: 123456789