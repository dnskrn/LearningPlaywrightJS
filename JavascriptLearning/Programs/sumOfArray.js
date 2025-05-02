// Sum of Array Elements: Write a function that calculates the sum of all numbers in an array.
function sumOfArray(ar){
    let sum=0;
    for(let s of ar){
        sum+=s;
    }
    return sum;
}

console.log(sumOfArray([1,2,3,4,5,6,7,8,9,10]))