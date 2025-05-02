const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(12));
console.log(isPrime(17));
console.log(isPrime(99));