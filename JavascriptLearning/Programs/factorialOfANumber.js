//Factorial of a Number: Write a function that calculates the factorial of a non-negative integer.

const factorial = (num) => {
    let fact=1;
    while(num>0){
        // fact=fact*num;
        fact *=num;
        --num;
    }
    return fact;
}

console.log(factorial(5))
console.log(factorial(6))