//Find the Missing Number in a Sequence: Write a function that finds the missing number in an array of consecutive numbers (assuming only one number is missing).
function findMissingNumber(ar){
    let actualSum=0;
    let expectedSum=0;

    for(let a of ar){
        actualSum+=a;
    }

    for(let i=ar[0];i<=ar[ar.length-1];i++){
        expectedSum+=i;
    }

    return expectedSum-actualSum;
}


console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8])); // Output: 5