//Title Case a Sentence: Write a function that converts a sentence to title case (first letter of each word is capitalized).

function titleCaseSentence(str) {
    return str
        .split(" ")
        .map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())
        .join(" ");
}

console.log(titleCaseSentence("Hello dinesh how Are you ?"))
