// Merge Two Sorted Arrays: Write a function that merges two sorted arrays into a single sorted array.
function mergeSortedArray(ar1,ar2){
    for(let e of ar2){
        ar1.push(e)
    }

    for(let i=0;i<ar1.length;i++){
        for(let j=0;j<ar1.length-1;j++){
            if(ar1[j]>ar1[j+1]){
                [ar1[j],ar1[j+1]]= [ar1[j+1],ar1[j]]
            }
        }
    }

    return ar1;
}

console.log(mergeSortedArray([1, 3, 5], [2, 4, 6]));