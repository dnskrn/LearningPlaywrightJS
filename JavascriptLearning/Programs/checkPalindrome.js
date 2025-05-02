//Check for Palindrome: Write a function that checks if a given string is a palindrome (reads the same forwards and backward).

function checkPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str.charAt(left) !== str.charAt(right)) {
            return false
        }
        ++left
        --right
    }
    return true
}

function checkPalindromeUsingPDF(str){
    return str === str.split("").reverse().join("")
}

console.log(checkPalindrome("MADAMADAM"));
console.log(checkPalindrome("DINESHhsenid"));

console.log(checkPalindromeUsingPDF("MADAMADAM"));
console.log(checkPalindromeUsingPDF("DINESHhsenid"));



