//Remove Duplicates from an Array: Write a function that removes duplicate elements from an array.

const newArr = (ar) => {
    let newAr=[];

    for(let i of ar){
        if(!newAr.includes(i)){
            newAr.push(i);
        }
    }

    return newAr;
}

const removeDuplicates=(ar)=>{
    return [...new Set(ar)]
}


console.log(newArr([1,1,3,2,3,5,6,7,3,4,5,7,8,9,3,3,4,7,9,0]))
console.log(removeDuplicates([1,1,3,2,3,5,6,7,3,4,5,7,8,9,3,3,4,7,9,0]))