// Check if Two Strings are Anagrams: Write a function that checks if two strings are anagrams of each other (contain the same characters with the same frequencies).   

function checkAnagramStrings(str1,str2){
    for(let s of str1.toLowerCase()){
        // console.log(s)
        if(str1.toLowerCase().replaceAll(s,"").length !== str2.toLowerCase().replaceAll(s,"").length){
            return false;
        }
    }

    return true;
}

console.log(checkAnagramStrings("silent","listen"))
console.log(checkAnagramStrings("hello","world"))