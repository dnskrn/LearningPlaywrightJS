// Count Occurrences of a Character in a String: Write a function that counts the occurrences of a specific character in a string.

let countOfCharacter = (str, c) => {
    let lengthOfString = str.length;
    return lengthOfString - str.replaceAll(c,"").length;
}

console.log(countOfCharacter("avyan","a"))