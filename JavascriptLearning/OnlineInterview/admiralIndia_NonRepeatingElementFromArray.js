function getNonRepeatingElementFromArray() {
    ar = [1, 2, 3, 2, 1, 4 ,5,  4];
    for(let a of ar){
        if(ar.indexOf(a)=== ar.lastIndexOf(a)){
            console.log("Non Repeating ELement: ", a)
        }
    }
}

getNonRepeatingElementFromArray()