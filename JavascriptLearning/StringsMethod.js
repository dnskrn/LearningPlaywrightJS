console.log("Hello World".length) //11
let str = "Naveen"
console.log(str.length) //6

console.log("Apple"[2]) //p

console.log("JavaScript".charAt(4)) //S

let lang="JAVASCRIPT"
console.log(lang.charAt(lang.length)) //Nothing will be Printed without any Error
console.log(lang.charAt(lang.length-1))  //T

console.log(lang.charCodeAt(3)) //65 for A
console.log(lang.toLocaleLowerCase().charCodeAt(3)) //97 for a

lang=lang+"CODING"
console.log(lang.slice(2,-5)) //VASCRIPTC
// -16 -15 -14 -13 -12 -11 -10 -9 -8 -7 -6 -5  -4  -3  -2  -1 
//  J   A   V   A   S   C   R  I  P  T  C   O   D   I   N   G
//  0   1   2   3   4   5   6  7  8  9  10  11  12  13  14  15

console.log(lang.substring(2,6)) //VASC
console.log(lang.substring(2,-5)) //JA
console.log(lang.substring(-2,-5)) //Nothing will be Printed without any Error
console.log(lang.substring(-2,-5)) //JAVAS

console.log("Naveen".concat("Automation").concat("LABS")) //NaveenAutomationLABS

let fruits="Aplle_Mango_Banana_Grapes"
let ar=fruits.split("_");
console.log(ar) //[ 'Aplle', 'Mango', 'Banana', 'Grapes' ]
console.log(ar[1]) // Mango
console.log(ar[5]) // undefined
console.log(fruits.includes("Mango")) // true
console.log(fruits.includes("Papaya")) //false
console.log(ar.includes("Mango")) // true
console.log(ar.includes("Papaya")) //false


//replace
//replaceAll
//trim
//trimStart
//trimEnd

console.log(" JavaScript ".padStart(20,"*")) //******** JavaScript
console.log(" JavaScript ".padEnd(30,"*"))   // JavaScript ******************

console.log("javaScript".startsWith("J")) // false
console.log("javaScript".startsWith("j")) // true

console.log("javaScript".endsWith("t")) // true
console.log("javaScript".endsWith("T")) // false

console.log("*#* ".repeat(5))

console.log("Hello Mr. Avyan Arya".indexOf("Avyan")); //10
console.log("Hello Mr. Avyan Arya".indexOf("M")); //6
console.log("Hello Mr. Avyan Arya".indexOf("Avyan Arya")); //10
console.log("Hello Mr. Avyan Arya".indexOf("AvyanArya")); //-1

console.log("Hello Mr. Avyan Arya Hello Avyan Hello".lastIndexOf("Hello")); //33
console.log("Hello Mr. Avyan Arya Hello Avyan Hello".lastIndexOf("Avyan")); //27