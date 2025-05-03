

# Solvers in Java and JavaScript

## 1. Read the Number from Standard Input
### Java
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();
        System.out.println("You entered: " + number);
    }
}
```

### JavaScript
```javascript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', number => {
    console.log(`You entered: ${number}`);
    readline.close();
});
```

## 2. Multiply Two Floating-Point Numbers
### Java
```java
public class Multiply {
    public static void main(String[] args) {
        float num1 = 2.5f, num2 = 4.2f;
        float result = num1 * num2;
        System.out.println("Product: " + result);
    }
}
```

### JavaScript
```javascript
let num1 = 2.5, num2 = 4.2;
let result = num1 * num2;
console.log("Product:", result);
```

## 3. Swap Two Numbers
### Java
```java
public class Swap {
    public static void main(String[] args) {
        int a = 5, b = 10;
        int temp = a;
        a = b;
        b = temp;
        System.out.println("After swapping: a = " + a + ", b = " + b);
    }
}
```

### JavaScript
```javascript
let a = 5, b = 10;
[a, b] = [b, a];
console.log(`After swapping: a = ${a}, b = ${b}`);
```

## 4. Add Two Binary Strings
### Java
```java
public class AddBinary {
    public static void main(String[] args) {
        String a = "1010", b = "1101";
        int sum = Integer.parseInt(a, 2) + Integer.parseInt(b, 2);
        System.out.println("Sum: " + Integer.toBinaryString(sum));
    }
}
```

### JavaScript
```javascript
let a = "1010", b = "1101";
let sum = (parseInt(a, 2) + parseInt(b, 2)).toString(2);
console.log("Sum:", sum);
```

## 5. Add Two Complex Numbers
### Java
```java
class Complex {
    double real, imag;

    Complex(double r, double i) {
        real = r;
        imag = i;
    }

    Complex add(Complex c) {
        return new Complex(this.real + c.real, this.imag + c.imag);
    }

    @Override
    public String toString() {
        return real + " + " + imag + "i";
    }
}

public class Main {
    public static void main(String[] args) {
        Complex c1 = new Complex(2.3, 4.5);
        Complex c2 = new Complex(1.4, 3.2);
        Complex result = c1.add(c2);
        System.out.println("Sum: " + result);
    }
}
```

### JavaScript
```javascript
class Complex {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }

    add(c) {
        return new Complex(this.real + c.real, this.imag + c.imag);
    }

    toString() {
        return `${this.real} + ${this.imag}i`;
    }
}

let c1 = new Complex(2.3, 4.5);
let c2 = new Complex(1.4, 3.2);
let result = c1.add(c2);
console.log("Sum:", result.toString());
```

## 6. Check Even or Odd Integers
### Java
```java
public class EvenOdd {
    public static void main(String[] args) {
        int num = 5;
        System.out.println(num % 2 == 0 ? "Even" : "Odd");
    }
}
```

### JavaScript
```javascript
let num = 5;
console.log(num % 2 === 0 ? "Even" : "Odd");
```

## 7. Find Largest Among 3 Numbers
### Java
```java
public class Largest {
    public static void main(String[] args) {
        int a = 10, b = 20, c = 15;
        int largest = Math.max(a, Math.max(b, c));
        System.out.println("Largest: " + largest);
    }
}
```

### JavaScript
```javascript
let a = 10, b = 20, c = 15;
let largest = Math.max(a, b, c);
console.log("Largest:", largest);
```

## 8. Find LCM of 2 Numbers
### Java
```java
public class LCM {
    public static void main(String[] args) {
        int a = 12, b = 18;
        int lcm = (a * b) / gcd(a, b);
        System.out.println("LCM: " + lcm);
    }

    private static int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
}
```

### JavaScript
```javascript
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

let a = 12, b = 18;
let lcm = (a * b) / gcd(a, b);
console.log("LCM:", lcm);
```

## 9. Find GCD or HCF of 2 Numbers
### Java
```java
public class GCD {
    public static void main(String[] args) {
        int a = 12, b = 18;
        System.out.println("GCD: " + gcd(a, b));
    }

    private static int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
}
```

### JavaScript
```javascript
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

let a = 12, b = 18;
console.log("GCD:", gcd(a, b));
```

## 10. Display All Prime Numbers from 1 to N
### Java
```java
public class PrimeNumbers {
    public static void main(String[] args) {
        int n = 20;
        for (int i = 2; i <= n; i++) {
            if (isPrime(i)) {
                System.out.print(i + " ");
            }
        }
    }

    private static boolean isPrime(int num) {
        if (num <= 1) return false;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    }
}
```

### JavaScript
```javascript
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let n = 20;
for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        process.stdout.write(i + " ");
    }
}
```

# Java and JavaScript Solutions

## 1. Check Leap Year

### Java
```java
public class LeapYear {
    public static void main(String[] args) {
        int year = 2024;
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            System.out.println(year + " is a leap year.");
        } else {
            System.out.println(year + " is not a leap year.");
        }
    }
}
```

### JavaScript
```javascript
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}
isLeapYear(2024);
```

---

## 2. Check Armstrong Number Between Two Integers

### Java
```java
public class ArmstrongNumbers {
    public static void main(String[] args) {
        int low = 100, high = 999;
        for (int number = low; number <= high; number++) {
            int sum = 0, temp = number, digits = String.valueOf(number).length();
            while (temp > 0) {
                int digit = temp % 10;
                sum += Math.pow(digit, digits);
                temp /= 10;
            }
            if (sum == number) {
                System.out.println(number + " is an Armstrong number.");
            }
        }
    }
}
```

### JavaScript
```javascript
function findArmstrongNumbers(low, high) {
    for (let number = low; number <= high; number++) {
        let sum = 0, temp = number, digits = number.toString().length;
        while (temp > 0) {
            let digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp = Math.floor(temp / 10);
        }
        if (sum === number) {
            console.log(`${number} is an Armstrong number.`);
        }
    }
}
findArmstrongNumbers(100, 999);
```

---

## 3. Check Whether the Input Number is a Neon Number

### Java
```java
public class NeonNumber {
    public static void main(String[] args) {
        int number = 9;
        int square = number * number;
        int sum = 0;
        while (square > 0) {
            sum += square % 10;
            square /= 10;
        }
        if (sum == number) {
            System.out.println(number + " is a Neon number.");
        } else {
            System.out.println(number + " is not a Neon number.");
        }
    }
}
```

### JavaScript
```javascript
function isNeonNumber(number) {
    let square = number * number;
    let sum = 0;
    while (square > 0) {
        sum += square % 10;
        square = Math.floor(square / 10);
    }
    if (sum === number) {
        console.log(`${number} is a Neon number.`);
    } else {
        console.log(`${number} is not a Neon number.`);
    }
}
isNeonNumber(9);
```

---

## 4. Check Whether Input Character is Vowel or Consonant

### Java
```java
public class VowelOrConsonant {
    public static void main(String[] args) {
        char ch = 'a';
        if ("aeiouAEIOU".indexOf(ch) != -1) {
            System.out.println(ch + " is a vowel.");
        } else {
            System.out.println(ch + " is a consonant.");
        }
    }
}
```

### JavaScript
```javascript
function checkVowelOrConsonant(ch) {
    if ("aeiouAEIOU".includes(ch)) {
        console.log(`${ch} is a vowel.`);
    } else {
        console.log(`${ch} is a consonant.`);
    }
}
checkVowelOrConsonant('a');
```

---

## 5. Find Factorial of a Number

### Java
```java
public class Factorial {
    public static void main(String[] args) {
        int number = 5, factorial = 1;
        for (int i = 1; i <= number; i++) {
            factorial *= i;
        }
        System.out.println("Factorial of " + number + " is " + factorial);
    }
}
```

### JavaScript
```javascript
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    console.log(`Factorial of ${number} is ${result}`);
}
factorial(5);
```

---

## 6. Find Even Sum of Fibonacci Series Till Number N

### Java
```java
public class EvenFibonacciSum {
    public static void main(String[] args) {
        int n = 10, a = 0, b = 1, sum = 0;
        while (b <= n) {
            if (b % 2 == 0) {
                sum += b;
            }
            int temp = a + b;
            a = b;
            b = temp;
        }
        System.out.println("Even sum of Fibonacci series till " + n + " is " + sum);
    }
}
```

### JavaScript
```javascript
function evenFibonacciSum(n) {
    let a = 0, b = 1, sum = 0;
    while (b <= n) {
        if (b % 2 === 0) {
            sum += b;
        }
        [a, b] = [b, a + b];
    }
    console.log(`Even sum of Fibonacci series till ${n} is ${sum}`);
}
evenFibonacciSum(10);
```

---

## 7. Calculate Simple Interest

### Java
```java
public class SimpleInterest {
    public static void main(String[] args) {
        double principal = 1000, rate = 5, time = 2;
        double simpleInterest = (principal * rate * time) / 100;
        System.out.println("Simple Interest is " + simpleInterest);
    }
}
```

### JavaScript
```javascript
function calculateSimpleInterest(principal, rate, time) {
    let simpleInterest = (principal * rate * time) / 100;
    console.log(`Simple Interest is ${simpleInterest}`);
}
calculateSimpleInterest(1000, 5, 2);
```

---

## 8. Calculate Compound Interest

### Java
```java
public class CompoundInterest {
    public static void main(String[] args) {
        double principal = 1000, rate = 5, time = 2;
        double compoundInterest = principal * Math.pow((1 + rate / 100), time) - principal;
        System.out.println("Compound Interest is " + compoundInterest);
    }
}
```

### JavaScript
```javascript
function calculateCompoundInterest(principal, rate, time) {
    let compoundInterest = principal * Math.pow((1 + rate / 100), time) - principal;
    console.log(`Compound Interest is ${compoundInterest}`);
}
calculateCompoundInterest(1000, 5, 2);
```

---

## 9. Find the Perimeter of a Rectangle

### Java
```java
public class RectanglePerimeter {
    public static void main(String[] args) {
        double length = 5, width = 3;
        double perimeter = 2 * (length + width);
        System.out.println("Perimeter of the rectangle is " + perimeter);
    }
}
```

### JavaScript
```javascript
function calculateRectanglePerimeter(length, width) {
    let perimeter = 2 * (length + width);
    console.log(`Perimeter of the rectangle is ${perimeter}`);
}
calculateRectanglePerimeter(5, 3);
```

---

## 10. Java Pattern Programs

### Print Right Triangle Star Pattern

#### Java
```java
public class RightTrianglePattern {
    public static void main(String[] args) {
        int rows = 5;
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

#### JavaScript
```javascript
function printRightTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
}
printRightTriangle(5);
```

# Star Pattern Programs in Java and JavaScript

## 1. Print Left Triangle Star Pattern

### Java
```java
public class LeftTriangle {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
```

### JavaScript
```javascript
function leftTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log('* '.repeat(i));
    }
}
leftTriangle(5);
```

---

## 2. Print Pyramid Star Pattern

### Java
```java
public class PyramidPattern {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = n; j > i; j--) {
                System.out.print(" ");
            }
            for (int k = 1; k <= (2 * i - 1); k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

### JavaScript
```javascript
function pyramidPattern(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
    }
}
pyramidPattern(5);
```

---

## 3. Print Reverse Pyramid Star Pattern

### Java
```java
public class ReversePyramid {
    public static void main(String[] args) {
        int n = 5;
        for (int i = n; i >= 1; i--) {
            for (int j = n; j > i; j--) {
                System.out.print(" ");
            }
            for (int k = 1; k <= (2 * i - 1); k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

### JavaScript
```javascript
function reversePyramid(n) {
    for (let i = n; i >= 1; i--) {
        console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
    }
}
reversePyramid(5);
```

---

## 4. Print Upper Star Triangle Pattern

### Java
```java
public class UpperTriangle {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = i; j <= n; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
```

### JavaScript
```javascript
function upperTriangle(n) {
    for (let i = 0; i < n; i++) {
        console.log('* '.repeat(n - i));
    }
}
upperTriangle(5);
```

---

## 5. Print Mirror Upper Star Triangle Pattern

### Java
```java
public class MirrorUpperTriangle {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j < i; j++) {
                System.out.print(" ");
            }
            for (int k = i; k <= n; k++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
```

### JavaScript
```javascript
function mirrorUpperTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(i - 1) + '* '.repeat(n - i + 1));
    }
}
mirrorUpperTriangle(5);
```

---

## 6. Print Downward Triangle Star Pattern

### Java
```java
public class DownwardTriangle {
    public static void main(String[] args) {
        int n = 5;
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
```

### JavaScript
```javascript
function downwardTriangle(n) {
    for (let i = n; i >= 1; i--) {
        console.log('* '.repeat(i));
    }
}
downwardTriangle(5);
```

---

## 7. Print Mirror Lower Star Triangle Pattern

### Java
```java
public class MirrorLowerTriangle {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= i; k++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
```

### JavaScript
```javascript
function mirrorLowerTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '* '.repeat(i));
    }
}
mirrorLowerTriangle(5);
```

---

## 8. Print Star Pascal’s Triangle

### Java
```java
public class PascalTriangle {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i; j++) {
                System.out.print(" ");
            }
            int number = 1;
            for (int k = 0; k <= i; k++) {
                System.out.print(number + " ");
                number = number * (i - k) / (k + 1);
            }
            System.out.println();
        }
    }
}
```

### JavaScript
```javascript
function pascalTriangle(n) {
    for (let i = 0; i < n; i++) {
        let row = ' '.repeat(n - i);
        let number = 1;
        for (let k = 0; k <= i; k++) {
            row += number + ' ';
            number = number * (i - k) / (k + 1);
        }
        console.log(row);
    }
}
pascalTriangle(5);
```

---

## 9. Print Diamond Star Pattern

### Java
```java
public class DiamondPattern {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = n; j > i; j--) {
                System.out.print(" ");
            }
            for (int k = 1; k <= (2 * i - 1); k++) {
                System.out.print("*");
            }
            System.out.println();
        }
        for (int i = n - 1; i >= 1; i--) {
            for (int j = n; j > i; j--) {
                System.out.print(" ");
            }
            for (int k = 1; k <= (2 * i - 1); k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

### JavaScript
```javascript
function diamondPattern(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
    }
    for (let i = n - 1; i >= 1; i--) {
        console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
    }
}
diamondPattern(5);
```

---

## 10. Print Square Star Pattern

### Java
```java
public class SquarePattern {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
```

### JavaScript
```javascript
function squarePattern(n) {
    for (let i = 1; i <= n; i++) {
        console.log('* '.repeat(n));
    }
}
squarePattern(5);
```

---

# Print Spiral Pattern of Numbers

## Java Implementation
```java
public class SpiralPattern {
    public static void printSpiral(int n) {
        int[][] matrix = new int[n][n];
        int value = 1;
        int top = 0, bottom = n - 1, left = 0, right = n - 1;

        while (value <= n * n) {
            for (int i = left; i <= right; i++) matrix[top][i] = value++;
            top++;
            for (int i = top; i <= bottom; i++) matrix[i][right] = value++;
            right--;
            for (int i = right; i >= left; i--) matrix[bottom][i] = value++;
            bottom--;
            for (int i = bottom; i >= top; i--) matrix[i][left] = value++;
            left++;
        }

        for (int[] row : matrix) {
            for (int num : row) System.out.print(num + "\t");
            System.out.println();
        }
    }

    public static void main(String[] args) {
        printSpiral(4);
    }
}
```

## JavaScript Implementation
```javascript
function printSpiral(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let value = 1, top = 0, bottom = n - 1, left = 0, right = n - 1;

    while (value <= n * n) {
        for (let i = left; i <= right; i++) matrix[top][i] = value++;
        top++;
        for (let i = top; i <= bottom; i++) matrix[i][right] = value++;
        right--;
        for (let i = right; i >= left; i--) matrix[bottom][i] = value++;
        bottom--;
        for (let i = bottom; i >= top; i--) matrix[i][left] = value++;
        left++;
    }

    matrix.forEach(row => console.log(row.join("\t")));
}

printSpiral(4);
```

---

# Conversion Programs

## Binary to Octal Conversion

### Java Implementation
```java
public class BinaryToOctal {
    public static String binaryToOctal(String binary) {
        int decimal = Integer.parseInt(binary, 2);
        return Integer.toOctalString(decimal);
    }

    public static void main(String[] args) {
        System.out.println(binaryToOctal("1101"));
    }
}
```

### JavaScript Implementation
```javascript
function binaryToOctal(binary) {
    const decimal = parseInt(binary, 2);
    return decimal.toString(8);
}

console.log(binaryToOctal("1101"));
```

---

## Octal to Decimal Conversion

### Java Implementation
```java
public class OctalToDecimal {
    public static int octalToDecimal(String octal) {
        return Integer.parseInt(octal, 8);
    }

    public static void main(String[] args) {
        System.out.println(octalToDecimal("15"));
    }
}
```

### JavaScript Implementation
```javascript
function octalToDecimal(octal) {
    return parseInt(octal, 8);
}

console.log(octalToDecimal("15"));
```

---

## Decimal to Octal Conversion

### Java Implementation
```java
public class DecimalToOctal {
    public static String decimalToOctal(int decimal) {
        return Integer.toOctalString(decimal);
    }

    public static void main(String[] args) {
        System.out.println(decimalToOctal(13));
    }
}
```

### JavaScript Implementation
```javascript
function decimalToOctal(decimal) {
    return decimal.toString(8);
}

console.log(decimalToOctal(13));
```

---

## Hexadecimal to Decimal Conversion

### Java Implementation
```java
public class HexToDecimal {
    public static int hexToDecimal(String hex) {
        return Integer.parseInt(hex, 16);
    }

    public static void main(String[] args) {
        System.out.println(hexToDecimal("A"));
    }
}
```

### JavaScript Implementation
```javascript
function hexToDecimal(hex) {
    return parseInt(hex, 16);
}

console.log(hexToDecimal("A"));
```

---

## Decimal to Hexadecimal Conversion

### Java Implementation
```java
public class DecimalToHex {
    public static String decimalToHex(int decimal) {
        return Integer.toHexString(decimal);
    }

    public static void main(String[] args) {
        System.out.println(decimalToHex(10));
    }
}
```

### JavaScript Implementation
```javascript
function decimalToHex(decimal) {
    return decimal.toString(16);
}

console.log(decimalToHex(10));
```

---

## Decimal to Binary Conversion

### Java Implementation
```java
public class DecimalToBinary {
    public static String decimalToBinary(int decimal) {
        return Integer.toBinaryString(decimal);
    }

    public static void main(String[] args) {
        System.out.println(decimalToBinary(5));
    }
}
```

### JavaScript Implementation
```javascript
function decimalToBinary(decimal) {
    return decimal.toString(2);
}

console.log(decimalToBinary(5));
```

---

## Binary to Decimal Conversion

### Java Implementation
```java
public class BinaryToDecimal {
    public static int binaryToDecimal(String binary) {
        return Integer.parseInt(binary, 2);
    }

    public static void main(String[] args) {
        System.out.println(binaryToDecimal("101"));
    }
}
```

### JavaScript Implementation
```javascript
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

console.log(binaryToDecimal("101"));
```

---

## Boolean to String Conversion

### Java Implementation
```java
public class BooleanToString {
    public static String booleanToString(boolean value) {
        return Boolean.toString(value);
    }

    public static void main(String[] args) {
        System.out.println(booleanToString(true));
    }
}
```

### JavaScript Implementation
```javascript
function booleanToString(value) {
    return value.toString();
}

console.log(booleanToString(true));
```


# Conversion Programs in Java and JavaScript

## String to Double Conversion
### Java
```java
public class StringToDouble {
    public static void main(String[] args) {
        String str = "123.45";
        double num = Double.parseDouble(str);
        System.out.println("Converted double: " + num);
    }
}
```

### JavaScript
```javascript
const str = "123.45";
const num = parseFloat(str);
console.log("Converted double:", num);
```

## Double to String Conversion
### Java
```java
public class DoubleToString {
    public static void main(String[] args) {
        double num = 123.45;
        String str = Double.toString(num);
        System.out.println("Converted string: " + str);
    }
}
```

### JavaScript
```javascript
const num = 123.45;
const str = num.toString();
console.log("Converted string:", str);
```

## String to Long Conversion
### Java
```java
public class StringToLong {
    public static void main(String[] args) {
        String str = "123456789";
        long num = Long.parseLong(str);
        System.out.println("Converted long: " + num);
    }
}
```

### JavaScript
```javascript
const str = "123456789";
const num = BigInt(str);
console.log("Converted long:", num);
```

## Long to String Conversion
### Java
```java
public class LongToString {
    public static void main(String[] args) {
        long num = 123456789L;
        String str = Long.toString(num);
        System.out.println("Converted string: " + str);
    }
}
```

### JavaScript
```javascript
const num = 123456789n;
const str = num.toString();
console.log("Converted string:", str);
```

## Int to Char Conversion
### Java
```java
public class IntToChar {
    public static void main(String[] args) {
        int num = 65;
        char ch = (char) num;
        System.out.println("Converted char: " + ch);
    }
}
```

### JavaScript
```javascript
const num = 65;
const ch = String.fromCharCode(num);
console.log("Converted char:", ch);
```

## Char to Int Conversion
### Java
```java
public class CharToInt {
    public static void main(String[] args) {
        char ch = 'A';
        int num = (int) ch;
        System.out.println("Converted int: " + num);
    }
}
```

### JavaScript
```javascript
const ch = 'A';
const num = ch.charCodeAt(0);
console.log("Converted int:", num);
```

# Classes and Object Programs

## Create a Class and Object
### Java
```java
class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("John", 25);
        person.display();
    }
}
```

### JavaScript
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const person = new Person("John", 25);
person.display();
```

## Create Abstract Class
### Java
```java
abstract class Animal {
    abstract void sound();

    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
        dog.eat();
    }
}
```

### JavaScript
```javascript
class Animal {
    sound() {
        throw new Error("Abstract method 'sound' must be implemented.");
    }

    eat() {
        console.log("This animal eats food.");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks.");
    }
}

const dog = new Dog();
dog.sound();
dog.eat();
```

## Create Singleton Class
### Java
```java
class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    public void showMessage() {
        System.out.println("Singleton instance.");
    }
}

public class Main {
    public static void main(String[] args) {
        Singleton singleton = Singleton.getInstance();
        singleton.showMessage();
    }
}
```

### JavaScript
```javascript
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }

    showMessage() {
        console.log("Singleton instance.");
    }
}

const singleton = new Singleton();
singleton.showMessage();
```

# Java and JavaScript Code Examples

## 1. Create an Interface

### Java
```java
interface Animal {
    void sound();
    void eat();
}
```

### JavaScript
```javascript
class Animal {
    sound() {}
    eat() {}
}
```

---

## 2. Show Encapsulation in Class

### Java
```java
class Person {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

### JavaScript
```javascript
class Person {
    #name;

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }
}
```

---

## 3. Show Inheritance in Class

### Java
```java
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}
```

### JavaScript
```javascript
class Animal {
    eat() {
        console.log("This animal eats food.");
    }
}

class Dog extends Animal {
    bark() {
        console.log("The dog barks.");
    }
}
```

---

## 4. Show Abstraction in Class

### Java
```java
abstract class Animal {
    abstract void sound();

    void eat() {
        System.out.println("This animal eats food.");
    }
}
```

### JavaScript
```javascript
class Animal {
    sound() {
        throw new Error("Abstract method must be implemented.");
    }

    eat() {
        console.log("This animal eats food.");
    }
}
```

---

## 5. Show Data Hiding in Class

### Java
```java
class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
}
```

### JavaScript
```javascript
class BankAccount {
    #balance = 0;

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
}
```

---

## 6. Show Polymorphism in Class

### Java
```java
class Animal {
    void sound() {
        System.out.println("Some generic animal sound.");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("The dog barks.");
    }
}
```

### JavaScript
```javascript
class Animal {
    sound() {
        console.log("Some generic animal sound.");
    }
}

class Dog extends Animal {
    sound() {
        console.log("The dog barks.");
    }
}
```

---

## 7. Show Overloading of Methods in Class

### Java
```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}
```

### JavaScript
```javascript
class Calculator {
    add(a, b) {
        return a + b;
    }
}
```
(Note: JavaScript does not support method overloading natively.)

---

## 8. Show Overriding of Methods in Classes

### Java
```java
class Animal {
    void sound() {
        System.out.println("Some generic animal sound.");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("The cat meows.");
    }
}
```

### JavaScript
```javascript
class Animal {
    sound() {
        console.log("Some generic animal sound.");
    }
}

class Cat extends Animal {
    sound() {
        console.log("The cat meows.");
    }
}
```

---

## 9. Show Use of `super` Keyword in Class

### Java
```java
class Animal {
    void sound() {
        System.out.println("Some generic animal sound.");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        super.sound();
        System.out.println("The dog barks.");
    }
}
```

### JavaScript
```javascript
class Animal {
    sound() {
        console.log("Some generic animal sound.");
    }
}

class Dog extends Animal {
    sound() {
        super.sound();
        console.log("The dog barks.");
    }
}
```

---

## 10. Show Use of `this` Keyword in Class

### Java
```java
class Person {
    private String name;

    Person(String name) {
        this.name = name;
    }

    void display() {
        System.out.println("Name: " + this.name);
    }
}
```

### JavaScript
```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`Name: ${this.name}`);
    }
}
```

# Java and JavaScript Code Examples

## 1. Usage of `static` Keyword in Class
### Java
```java
class StaticExample {
    static int count = 0;

    static void increment() {
        count++;
    }
}

public class Main {
    public static void main(String[] args) {
        StaticExample.increment();
        System.out.println("Count: " + StaticExample.count);
    }
}
```

### JavaScript
```javascript
class StaticExample {
    static count = 0;

    static increment() {
        this.count++;
    }
}

StaticExample.increment();
console.log("Count:", StaticExample.count);
```

## 2. Usage of Access Modifiers
### Java
```java
class AccessModifiers {
    private int privateVar = 10;
    protected int protectedVar = 20;
    public int publicVar = 30;

    public int getPrivateVar() {
        return privateVar;
    }
}
```

### JavaScript
```javascript
class AccessModifiers {
    #privateVar = 10; // Private field
    protectedVar = 20; // No true protected in JS
    publicVar = 30;

    getPrivateVar() {
        return this.#privateVar;
    }
}
```

## 3. Java Methods Programs
```java
class MethodsExample {
    public int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        MethodsExample obj = new MethodsExample();
        System.out.println("Sum: " + obj.add(5, 10));
    }
}
```

## 4. Usage of `main()` Method
```java
public class MainMethodExample {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## 5. Static and Non-Static Methods
### Java
```java
class StaticNonStatic {
    static void staticMethod() {
        System.out.println("Static Method");
    }

    void nonStaticMethod() {
        System.out.println("Non-Static Method");
    }
}

public class Main {
    public static void main(String[] args) {
        StaticNonStatic.staticMethod();
        StaticNonStatic obj = new StaticNonStatic();
        obj.nonStaticMethod();
    }
}
```

### JavaScript
```javascript
class StaticNonStatic {
    static staticMethod() {
        console.log("Static Method");
    }

    nonStaticMethod() {
        console.log("Non-Static Method");
    }
}

StaticNonStatic.staticMethod();
const obj = new StaticNonStatic();
obj.nonStaticMethod();
```

## 6. Usage of `forEach()` Method
### Java
```java
import java.util.Arrays;

public class ForEachExample {
    public static void main(String[] args) {
        Arrays.asList(1, 2, 3).forEach(System.out::println);
    }
}
```

### JavaScript
```javascript
[1, 2, 3].forEach((num) => console.log(num));
```

## 7. Usage of `toString()` Method
### Java
```java
class ToStringExample {
    public String toString() {
        return "This is a custom toString method.";
    }
}

public class Main {
    public static void main(String[] args) {
        ToStringExample obj = new ToStringExample();
        System.out.println(obj.toString());
    }
}
```

### JavaScript
```javascript
class ToStringExample {
    toString() {
        return "This is a custom toString method.";
    }
}

const obj = new ToStringExample();
console.log(obj.toString());
```

## 8. Usage of `codePointAt()` Method
### Java
```java
public class CodePointAtExample {
    public static void main(String[] args) {
        String str = "Hello";
        System.out.println(str.codePointAt(1)); // Unicode of 'e'
    }
}
```

### JavaScript
```javascript
const str = "Hello";
console.log(str.codePointAt(1)); // Unicode of 'e'
```

## 9. Usage of `compare()` Method
### Java
```java
public class CompareExample {
    public static void main(String[] args) {
        System.out.println(Integer.compare(10, 20)); // -1
    }
}
```

### JavaScript
```javascript
console.log(10 - 20); // -10 (similar to compare)
```

## 10. Usage of `equals()` Method
### Java
```java
public class EqualsExample {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "Hello";
        System.out.println(str1.equals(str2)); // true
    }
}
```

### JavaScript
```javascript
const str1 = "Hello";
const str2 = "Hello";
console.log(str1 === str2); // true
```

# Solver in Java and JavaScript  

## Usage of `hasNext()` and `next()` Method  

### Java Example  
```java
import java.util.Iterator;
import java.util.ArrayList;

public class IteratorExample {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("A");
        list.add("B");
        list.add("C");

        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
```

### JavaScript Example  
```javascript
const array = ["A", "B", "C"];
const iterator = array[Symbol.iterator]();

let result = iterator.next();
while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}
```

---

## Thread Lifecycle Methods  

### Java Example  
```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class ThreadLifecycle {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start(); // Start the thread
    }
}
```

### Thread Lifecycle Stages  
1. **New**: Thread is created but not started.  
2. **Runnable**: Thread is ready to run but waiting for CPU.  
3. **Running**: Thread is executing.  
4. **Blocked/Waiting**: Thread is waiting for a resource.  
5. **Terminated**: Thread has finished execution.  

---

## `start()` Method  
The `start()` method is used to begin the execution of a thread. It invokes the `run()` method internally.  

### Example  
```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class StartMethodExample {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```

---

## `run()` Method  
The `run()` method contains the code that is executed by the thread.  

### Example  
```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class RunMethodExample {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.run(); // Directly calling run() (not recommended)
    }
}
```

---

## Java Searching Programs  

### Java Program for Linear Search  
```java
public class LinearSearch {
    public static int linearSearch(int[] arr, int key) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int key = 30;
        int result = linearSearch(arr, key);
        System.out.println("Element found at index: " + result);
    }
}
```

### Java Program for Binary Search  
```java
import java.util.Arrays;

public class BinarySearch {
    public static int binarySearch(int[] arr, int key) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == key) {
                return mid;
            } else if (arr[mid] < key) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int key = 30;
        int result = binarySearch(arr, key);
        System.out.println("Element found at index: " + result);
    }
}
```

### Recursively Linearly Search an Element in an Array  
```java
public class RecursiveLinearSearch {
    public static int linearSearch(int[] arr, int key, int index) {
        if (index >= arr.length) {
            return -1;
        }
        if (arr[index] == key) {
            return index;
        }
        return linearSearch(arr, key, index + 1);
    }

    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int key = 30;
        int result = linearSearch(arr, key, 0);
        System.out.println("Element found at index: " + result);
    }
}
```

---

## Java 1-D Array Programs  

### Search an Element in an Array  
```java
public class SearchElement {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int key = 30;
        boolean found = false;

        for (int num : arr) {
            if (num == key) {
                found = true;
                break;
            }
        }

        if (found) {
            System.out.println("Element found in the array.");
        } else {
            System.out.println("Element not found in the array.");
        }
    }
}
```

# Array Operations in Java and JavaScript

## 1. Find the Largest Element in an Array

### Java
```java
public class LargestElement {
    public static int findLargest(int[] array) {
        int max = array[0];
        for (int num : array) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }
}
```

### JavaScript
```javascript
function findLargest(array) {
    return Math.max(...array);
}
```

---

## 2. Sort an Array

### Java
```java
import java.util.Arrays;

public class SortArray {
    public static void sortArray(int[] array) {
        Arrays.sort(array);
    }
}
```

### JavaScript
```javascript
function sortArray(array) {
    return array.sort((a, b) => a - b);
}
```

---

## 3. Sort the Elements of an Array in Descending Order

### Java
```java
import java.util.Arrays;
import java.util.Collections;

public class SortDescending {
    public static void sortDescending(Integer[] array) {
        Arrays.sort(array, Collections.reverseOrder());
    }
}
```

### JavaScript
```javascript
function sortDescending(array) {
    return array.sort((a, b) => b - a);
}
```

---

## 4. Sort the Elements of an Array in Ascending Order

### Java
```java
import java.util.Arrays;

public class SortAscending {
    public static void sortAscending(int[] array) {
        Arrays.sort(array);
    }
}
```

### JavaScript
```javascript
function sortAscending(array) {
    return array.sort((a, b) => a - b);
}
```

---

## 5. Remove Duplicate Elements from an Array

### Java
```java
import java.util.HashSet;

public class RemoveDuplicates {
    public static int[] removeDuplicates(int[] array) {
        return new HashSet<>(Arrays.asList(array)).toArray(new Integer[0]);
    }
}
```

### JavaScript
```javascript
function removeDuplicates(array) {
    return [...new Set(array)];
}
```

---

## 6. Merge Two Arrays

### Java
```java
import java.util.Arrays;

public class MergeArrays {
    public static int[] mergeArrays(int[] array1, int[] array2) {
        int[] merged = new int[array1.length + array2.length];
        System.arraycopy(array1, 0, merged, 0, array1.length);
        System.arraycopy(array2, 0, merged, array1.length, array2.length);
        return merged;
    }
}
```

### JavaScript
```javascript
function mergeArrays(array1, array2) {
    return array1.concat(array2);
}
```

---

## 7. Check if Two Arrays Are Equal or Not

### Java
```java
import java.util.Arrays;

public class CheckEquality {
    public static boolean areArraysEqual(int[] array1, int[] array2) {
        return Arrays.equals(array1, array2);
    }
}
```

### JavaScript
```javascript
function areArraysEqual(array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2);
}
```

---

## 8. Remove All Occurrences of an Element in an Array

### Java
```java
import java.util.ArrayList;

public class RemoveOccurrences {
    public static int[] removeOccurrences(int[] array, int element) {
        ArrayList<Integer> list = new ArrayList<>();
        for (int num : array) {
            if (num != element) {
                list.add(num);
            }
        }
        return list.stream().mapToInt(i -> i).toArray();
    }
}
```

### JavaScript
```javascript
function removeOccurrences(array, element) {
    return array.filter(num => num !== element);
}
```

---

## 9. Find Common Array Elements

### Java
```java
import java.util.ArrayList;
import java.util.HashSet;

public class CommonElements {
    public static int[] findCommonElements(int[] array1, int[] array2) {
        HashSet<Integer> set1 = new HashSet<>();
        for (int num : array1) {
            set1.add(num);
        }
        ArrayList<Integer> common = new ArrayList<>();
        for (int num : array2) {
            if (set1.contains(num)) {
                common.add(num);
            }
        }
        return common.stream().mapToInt(i -> i).toArray();
    }
}
```

### JavaScript
```javascript
function findCommonElements(array1, array2) {
    return array1.filter(num => array2.includes(num));
}
```

---

## 10. Copy All the Elements of One Array to Another Array

### Java
```java
public class CopyArray {
    public static int[] copyArray(int[] array) {
        return array.clone();
    }
}
```

### JavaScript
```javascript
function copyArray(array) {
    return [...array];
}
```

# Array and Matrix Programs in Java and JavaScript

## 1. Program for Array Rotation

### Java
```java
public class ArrayRotation {
    public static void rotateArray(int[] arr, int d) {
        int n = arr.length;
        d = d % n;
        reverseArray(arr, 0, d - 1);
        reverseArray(arr, d, n - 1);
        reverseArray(arr, 0, n - 1);
    }

    private static void reverseArray(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}
```

### JavaScript
```javascript
function rotateArray(arr, d) {
    d = d % arr.length;
    arr = [...arr.slice(d), ...arr.slice(0, d)];
    return arr;
}
```

---

## 2. 2D Arrays (Matrix) Programs

### A 2D Array
#### Java
```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

#### JavaScript
```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

---

## 3. Add Two Matrices

### Java
```java
public static int[][] addMatrices(int[][] a, int[][] b) {
    int rows = a.length, cols = a[0].length;
    int[][] result = new int[rows][cols];
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }
    return result;
}
```

### JavaScript
```javascript
function addMatrices(a, b) {
    return a.map((row, i) => row.map((val, j) => val + b[i][j]));
}
```

---

## 4. Sort the 2D Array Across Columns

### Java
```java
import java.util.Arrays;

public static void sortColumns(int[][] matrix) {
    for (int j = 0; j < matrix[0].length; j++) {
        int[] column = new int[matrix.length];
        for (int i = 0; i < matrix.length; i++) {
            column[i] = matrix[i][j];
        }
        Arrays.sort(column);
        for (int i = 0; i < matrix.length; i++) {
            matrix[i][j] = column[i];
        }
    }
}
```

### JavaScript
```javascript
function sortColumns(matrix) {
    for (let j = 0; j < matrix[0].length; j++) {
        const column = matrix.map(row => row[j]).sort((a, b) => a - b);
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][j] = column[i];
        }
    }
}
```

---

## 5. Check Whether Two Matrices Are Equal or Not

### Java
```java
public static boolean areMatricesEqual(int[][] a, int[][] b) {
    if (a.length != b.length || a[0].length != b[0].length) return false;
    for (int i = 0; i < a.length; i++) {
        for (int j = 0; j < a[0].length; j++) {
            if (a[i][j] != b[i][j]) return false;
        }
    }
    return true;
}
```

### JavaScript
```javascript
function areMatricesEqual(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) return false;
    return a.every((row, i) => row.every((val, j) => val === b[i][j]));
}
```

---

## 6. Find the Transpose

### Java
```java
public static int[][] transposeMatrix(int[][] matrix) {
    int rows = matrix.length, cols = matrix[0].length;
    int[][] transpose = new int[cols][rows];
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            transpose[j][i] = matrix[i][j];
        }
    }
    return transpose;
}
```

### JavaScript
```javascript
function transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}
```

---

## 7. Find the Determinant

### Java
```java
public static int determinant(int[][] matrix) {
    if (matrix.length == 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }
    int det = 0;
    for (int i = 0; i < matrix[0].length; i++) {
        int[][] subMatrix = new int[matrix.length - 1][matrix[0].length - 1];
        for (int j = 1; j < matrix.length; j++) {
            for (int k = 0, col = 0; k < matrix[0].length; k++) {
                if (k == i) continue;
                subMatrix[j - 1][col++] = matrix[j][k];
            }
        }
        det += matrix[0][i] * determinant(subMatrix) * (i % 2 == 0 ? 1 : -1);
    }
    return det;
}
```

### JavaScript
```javascript
function determinant(matrix) {
    if (matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }
    return matrix[0].reduce((det, val, i) => {
        const subMatrix = matrix.slice(1).map(row => row.filter((_, j) => j !== i));
        return det + val * determinant(subMatrix) * (i % 2 === 0 ? 1 : -1);
    }, 0);
}
```

---

## 8. Find the Normal and Trace

### Java
```java
public static double findNormal(int[][] matrix) {
    double sum = 0;
    for (int[] row : matrix) {
        for (int val : row) {
            sum += val * val;
        }
    }
    return Math.sqrt(sum);
}

public static int findTrace(int[][] matrix) {
    int trace = 0;
    for (int i = 0; i < matrix.length; i++) {
        trace += matrix[i][i];
    }
    return trace;
}
```

### JavaScript
```javascript
function findNormal(matrix) {
    const sum = matrix.flat().reduce((acc, val) => acc + val * val, 0);
    return Math.sqrt(sum);
}

function findTrace(matrix) {
    return matrix.reduce((trace, row, i) => trace + row[i], 0);
}
```

---

## 9. Print Boundary Elements of a Matrix

### Java
```java
public static void printBoundaryElements(int[][] matrix) {
    int rows = matrix.length, cols = matrix[0].length;
    for (int i = 0; i < cols; i++) System.out.print(matrix[0][i] + " ");
    for (int i = 1; i < rows - 1; i++) System.out.print(matrix[i][cols - 1] + " ");
    for (int i = cols - 1; i >= 0; i--) System.out.print(matrix[rows - 1][i] + " ");
    for (int i = rows - 2; i > 0; i--) System.out.print(matrix[i][0] + " ");
}
```

### JavaScript
```javascript
function printBoundaryElements(matrix) {
    const rows = matrix.length, cols = matrix[0].length;
    const boundary = [
        ...matrix[0],
        ...matrix.slice(1, -1).map(row => row[cols - 1]),
        ...matrix[rows - 1].slice().reverse(),
        ...matrix.slice(1, -1).map(row => row[0]).reverse()
    ];
    console.log(boundary.join(" "));
}
```

# Matrix Operations and String Programs in Java and JavaScript  

## Matrix Operations  

### 1. Rotate Matrix Elements  
**Java**:  
```java
public class RotateMatrix {
    public static void rotateMatrix(int[][] matrix) {
        int top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
        while (top < bottom && left < right) {
            int prev = matrix[top + 1][left];
            for (int i = left; i <= right; i++) {
                int temp = matrix[top][i];
                matrix[top][i] = prev;
                prev = temp;
            }
            top++;
            for (int i = top; i <= bottom; i++) {
                int temp = matrix[i][right];
                matrix[i][right] = prev;
                prev = temp;
            }
            right--;
            for (int i = right; i >= left; i--) {
                int temp = matrix[bottom][i];
                matrix[bottom][i] = prev;
                prev = temp;
            }
            bottom--;
            for (int i = bottom; i >= top; i--) {
                int temp = matrix[i][left];
                matrix[i][left] = prev;
                prev = temp;
            }
            left++;
        }
    }
}
```  

**JavaScript**:  
```javascript
function rotateMatrix(matrix) {
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    while (top < bottom && left < right) {
        let prev = matrix[top + 1][left];
        for (let i = left; i <= right; i++) {
            let temp = matrix[top][i];
            matrix[top][i] = prev;
            prev = temp;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            let temp = matrix[i][right];
            matrix[i][right] = prev;
            prev = temp;
        }
        right--;
        for (let i = right; i >= left; i--) {
            let temp = matrix[bottom][i];
            matrix[bottom][i] = prev;
            prev = temp;
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            let temp = matrix[i][left];
            matrix[i][left] = prev;
            prev = temp;
        }
        left++;
    }
}
```  

### 2. Compute the Sum of Diagonals of a Matrix  
**Java**:  
```java
public class DiagonalSum {
    public static int diagonalSum(int[][] matrix) {
        int sum = 0;
        for (int i = 0; i < matrix.length; i++) {
            sum += matrix[i][i];
            if (i != matrix.length - i - 1) {
                sum += matrix[i][matrix.length - i - 1];
            }
        }
        return sum;
    }
}
```  

**JavaScript**:  
```javascript
function diagonalSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
        if (i !== matrix.length - i - 1) {
            sum += matrix[i][matrix.length - i - 1];
        }
    }
    return sum;
}
```  

### 3. Interchange Elements of First and Last Rows  
**Java**:  
```java
public class InterchangeRows {
    public static void interchangeRows(int[][] matrix) {
        int[] temp = matrix[0];
        matrix[0] = matrix[matrix.length - 1];
        matrix[matrix.length - 1] = temp;
    }
}
```  

**JavaScript**:  
```javascript
function interchangeRows(matrix) {
    let temp = matrix[0];
    matrix[0] = matrix[matrix.length - 1];
    matrix[matrix.length - 1] = temp;
}
```  

### 4. Interchange Elements of First and Last Columns  
**Java**:  
```java
public class InterchangeColumns {
    public static void interchangeColumns(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            int temp = matrix[i][0];
            matrix[i][0] = matrix[i][matrix[i].length - 1];
            matrix[i][matrix[i].length - 1] = temp;
        }
    }
}
```  

**JavaScript**:  
```javascript
function interchangeColumns(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let temp = matrix[i][0];
        matrix[i][0] = matrix[i][matrix[i].length - 1];
        matrix[i][matrix[i].length - 1] = temp;
    }
}
```  

## Java String Programs  

### 1. Get a Character from the Given String  
**Java**:  
```java
public class GetCharacter {
    public static char getCharacter(String str, int index) {
        return str.charAt(index);
    }
}
```  

**JavaScript**:  
```javascript
function getCharacter(str, index) {
    return str.charAt(index);
}
```  

### 2. Replace a Character at a Specific Index  
**Java**:  
```java
public class ReplaceCharacter {
    public static String replaceCharacter(String str, int index, char ch) {
        return str.substring(0, index) + ch + str.substring(index + 1);
    }
}
```  

**JavaScript**:  
```javascript
function replaceCharacter(str, index, ch) {
    return str.substring(0, index) + ch + str.substring(index + 1);
}
```  

### 3. Reverse a String  
**Java**:  
```java
public class ReverseString {
    public static String reverseString(String str) {
        return new StringBuilder(str).reverse().toString();
    }
}
```  

**JavaScript**:  
```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
```  

### 4. Reverse a String Using Stacks  
**Java**:  
```java
import java.util.Stack;

public class ReverseStringStack {
    public static String reverseString(String str) {
        Stack<Character> stack = new Stack<>();
        for (char ch : str.toCharArray()) {
            stack.push(ch);
        }
        StringBuilder reversed = new StringBuilder();
        while (!stack.isEmpty()) {
            reversed.append(stack.pop());
        }
        return reversed.toString();
    }
}
```  

**JavaScript**:  
```javascript
function reverseStringUsingStack(str) {
    let stack = [];
    for (let ch of str) {
        stack.push(ch);
    }
    let reversed = '';
    while (stack.length > 0) {
        reversed += stack.pop();
    }
    return reversed;
}
```  

### 5. Sort a String  
**Java**:  
```java
import java.util.Arrays;

public class SortString {
    public static String sortString(String str) {
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        return new String(chars);
    }
}
```  

**JavaScript**:  
```javascript
function sortString(str) {
    return str.split('').sort().join('');
}
```  

# String Manipulation Tasks with Solutions

## 1. Swapping Pair of Characters

### Java
```java
public class SwapCharacters {
    public static String swapPairs(String str) {
        StringBuilder result = new StringBuilder(str);
        for (int i = 0; i < str.length() - 1; i += 2) {
            char temp = result.charAt(i);
            result.setCharAt(i, result.charAt(i + 1));
            result.setCharAt(i + 1, temp);
        }
        return result.toString();
    }
}
```

### JavaScript
```javascript
function swapPairs(str) {
    let result = str.split('');
    for (let i = 0; i < result.length - 1; i += 2) {
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
    }
    return result.join('');
}
```

## 2. Check Whether the Given String is Pangram

### Java
```java
import java.util.HashSet;

public class PangramChecker {
    public static boolean isPangram(String str) {
        str = str.toLowerCase();
        HashSet<Character> letters = new HashSet<>();
        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) {
                letters.add(c);
            }
        }
        return letters.size() == 26;
    }
}
```

### JavaScript
```javascript
function isPangram(str) {
    str = str.toLowerCase();
    const letters = new Set();
    for (const char of str) {
        if (/[a-z]/.test(char)) {
            letters.add(char);
        }
    }
    return letters.size === 26;
}
```

## 3. Print First Letter of Each Word Using Regex

### Java
```java
import java.util.regex.*;

public class FirstLetterExtractor {
    public static void printFirstLetters(String str) {
        Matcher matcher = Pattern.compile("\\b\\w").matcher(str);
        while (matcher.find()) {
            System.out.print(matcher.group() + " ");
        }
    }
}
```

### JavaScript
```javascript
function printFirstLetters(str) {
    const matches = str.match(/\b\w/g);
    console.log(matches ? matches.join(' ') : '');
}
```

## 4. Determine the Unicode Code Point at a Given Index

### Java
```java
public class UnicodeFinder {
    public static int getCodePoint(String str, int index) {
        return str.codePointAt(index);
    }
}
```

### JavaScript
```javascript
function getCodePoint(str, index) {
    return str.codePointAt(index);
}
```

## 5. Remove Leading Zeros

### Java
```java
public class RemoveZeros {
    public static String removeLeadingZeros(String str) {
        return str.replaceFirst("^0+", "");
    }
}
```

### JavaScript
```javascript
function removeLeadingZeros(str) {
    return str.replace(/^0+/, '');
}
```

## 6. Compare Two Strings

### Java
```java
public class StringComparer {
    public static boolean areEqual(String str1, String str2) {
        return str1.equals(str2);
    }
}
```

### JavaScript
```javascript
function areEqual(str1, str2) {
    return str1 === str2;
}
```

## 7. Compare Two Strings Lexicographically

### Java
```java
public class LexicographicComparer {
    public static int compare(String str1, String str2) {
        return str1.compareTo(str2);
    }
}
```

### JavaScript
```javascript
function compareLexicographically(str1, str2) {
    return str1.localeCompare(str2);
}
```

## 8. Print Even Length Words

### Java
```java
public class EvenLengthWords {
    public static void printEvenWords(String str) {
        for (String word : str.split("\\s+")) {
            if (word.length() % 2 == 0) {
                System.out.println(word);
            }
        }
    }
}
```

### JavaScript
```javascript
function printEvenWords(str) {
    str.split(/\s+/).forEach(word => {
        if (word.length % 2 === 0) {
            console.log(word);
        }
    });
}
```

## 9. Insert a String into Another String

### Java
```java
public class StringInserter {
    public static String insertString(String original, String toInsert, int position) {
        return new StringBuilder(original).insert(position, toInsert).toString();
    }
}
```

### JavaScript
```javascript
function insertString(original, toInsert, position) {
    return original.slice(0, position) + toInsert + original.slice(position);
}
```

## 10. Splitting into a Number of Sub-Strings

### Java
```java
public class SubstringSplitter {
    public static String[] splitIntoSubstrings(String str, int n) {
        int size = str.length() / n;
        String[] result = new String[n];
        for (int i = 0; i < n; i++) {
            result[i] = str.substring(i * size, i == n - 1 ? str.length() : (i + 1) * size);
        }
        return result;
    }
}
```

### JavaScript
```javascript
function splitIntoSubstrings(str, n) {
    const size = Math.ceil(str.length / n);
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(str.slice(i * size, (i + 1) * size));
    }
    return result;
}
```

# List Operations in Java and JavaScript

## 1. Initializing a List
### Java
```java
import java.util.ArrayList;
import java.util.Arrays;

List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
```

### JavaScript
```javascript
const list = ["A", "B", "C"];
```

---

## 2. Find a Sublist in a List
### Java
```java
import java.util.Collections;

List<String> sublist = list.subList(1, 3); // From index 1 to 2
```

### JavaScript
```javascript
const sublist = list.slice(1, 3); // From index 1 to 2
```

---

## 3. Get Minimum and Maximum from a List
### Java
```java
import java.util.Collections;

int min = Collections.min(list);
int max = Collections.max(list);
```

### JavaScript
```javascript
const min = Math.min(...list);
const max = Math.max(...list);
```

---

## 4. Split a List into Two Halves
### Java
```java
List<String> firstHalf = list.subList(0, list.size() / 2);
List<String> secondHalf = list.subList(list.size() / 2, list.size());
```

### JavaScript
```javascript
const firstHalf = list.slice(0, Math.floor(list.length / 2));
const secondHalf = list.slice(Math.floor(list.length / 2));
```

---

## 5. Remove a Sublist from a List
### Java
```java
list.subList(1, 3).clear(); // Removes elements from index 1 to 2
```

### JavaScript
```javascript
list.splice(1, 2); // Removes 2 elements starting from index 1
```

---

## 6. Remove Duplicates from an Array List
### Java
```java
import java.util.HashSet;

List<String> uniqueList = new ArrayList<>(new HashSet<>(list));
```

### JavaScript
```javascript
const uniqueList = [...new Set(list)];
```

---

## 7. Remove Null from a List Container
### Java
```java
list.removeIf(Objects::isNull);
```

### JavaScript
```javascript
const filteredList = list.filter(item => item !== null);
```

---

## 8. Sort Array List in Ascending Order
### Java
```java
import java.util.Collections;

Collections.sort(list);
```

### JavaScript
```javascript
list.sort((a, b) => a - b);
```

---

## 9. Get First and Last Elements from an Array List
### Java
```java
String first = list.get(0);
String last = list.get(list.size() - 1);
```

### JavaScript
```javascript
const first = list[0];
const last = list[list.length - 1];
```

# Java and JavaScript Solutions

## Convert a List of Strings to a Comma-Separated String

### Java
```java
import java.util.List;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Apple", "Banana", "Cherry");
        String result = String.join(", ", list);
        System.out.println(result); // Output: Apple, Banana, Cherry
    }
}
```

### JavaScript
```javascript
const list = ["Apple", "Banana", "Cherry"];
const result = list.join(", ");
console.log(result); // Output: Apple, Banana, Cherry
```

---

## Add Element at First and Last Position of a Linked List

### Java
```java
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        list.addFirst("First");
        list.addLast("Last");
        System.out.println(list); // Output: [First, Last]
    }
}
```

### JavaScript
```javascript
const list = [];
list.unshift("First"); // Add at the beginning
list.push("Last");     // Add at the end
console.log(list); // Output: ["First", "Last"]
```

---

## Find Common Elements in Two ArrayLists

### Java
```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> list1 = List.of(1, 2, 3, 4);
        List<Integer> list2 = List.of(3, 4, 5, 6);
        list1.retainAll(list2);
        System.out.println(list1); // Output: [3, 4]
    }
}
```

### JavaScript
```javascript
const list1 = [1, 2, 3, 4];
const list2 = [3, 4, 5, 6];
const common = list1.filter(item => list2.includes(item));
console.log(common); // Output: [3, 4]
```

---

## Remove Repeated Elements from an ArrayList

### Java
```java
import java.util.ArrayList;
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(List.of(1, 2, 2, 3, 4, 4));
        HashSet<Integer> set = new HashSet<>(list);
        list.clear();
        list.addAll(set);
        System.out.println(list); // Output: [1, 2, 3, 4]
    }
}
```

### JavaScript
```javascript
const list = [1, 2, 2, 3, 4, 4];
const uniqueList = [...new Set(list)];
console.log(uniqueList); // Output: [1, 2, 3, 4]
```

---

## Java Date and Time Programs

### Format Time in AM-PM Format
```java
import java.text.SimpleDateFormat;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        SimpleDateFormat sdf = new SimpleDateFormat("hh:mm a");
        String time = sdf.format(new Date());
        System.out.println(time); // Output: e.g., 02:30 PM
    }
}
```

---

### Display Dates of Calendar Year in Different Format
```java
import java.text.SimpleDateFormat;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        System.out.println(sdf.format(new Date())); // Output: e.g., 2023-10-01
    }
}
```

---

### Display Current Date and Time
```java
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        Date date = new Date();
        System.out.println(date); // Output: Current date and time
    }
}
```

---

### Display Time in Different Country’s Format
```java
import java.text.SimpleDateFormat;
import java.util.TimeZone;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        sdf.setTimeZone(TimeZone.getTimeZone("America/New_York"));
        System.out.println(sdf.format(new Date())); // Output: Time in New York
    }
}
```

---

### Convert the Local Time to GMT
```java
import java.text.SimpleDateFormat;
import java.util.TimeZone;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        sdf.setTimeZone(TimeZone.getTimeZone("GMT"));
        System.out.println(sdf.format(new Date())); // Output: Time in GMT
    }
}
```

# File Operations in Java and JavaScript

## 1. Create a New File

### Java
```java
import java.io.File;
import java.io.IOException;

public class CreateFile {
    public static void main(String[] args) {
        try {
            File file = new File("newfile.txt");
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
```

### JavaScript (Node.js)
```javascript
const fs = require('fs');

fs.writeFile('newfile.txt', '', (err) => {
    if (err) throw err;
    console.log('File created!');
});
```

---

## 2. Create a Temporary File

### Java
```java
import java.io.File;
import java.io.IOException;

public class TempFile {
    public static void main(String[] args) {
        try {
            File tempFile = File.createTempFile("tempfile", ".tmp");
            System.out.println("Temporary file created: " + tempFile.getAbsolutePath());
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
```

### JavaScript (Node.js)
```javascript
const fs = require('fs');
const os = require('os');
const path = require('path');

const tempFilePath = path.join(os.tmpdir(), 'tempfile.tmp');
fs.writeFile(tempFilePath, '', (err) => {
    if (err) throw err;
    console.log('Temporary file created at:', tempFilePath);
});
```

---

## 3. Write into a File

### Java
```java
import java.io.FileWriter;
import java.io.IOException;

public class WriteFile {
    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("example.txt");
            writer.write("Hello, World!");
            writer.close();
            System.out.println("Successfully wrote to the file.");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
```

### JavaScript (Node.js)
```javascript
const fs = require('fs');

fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('Successfully wrote to the file.');
});
```

---

## 4. Rename a File

### Java
```java
import java.io.File;

public class RenameFile {
    public static void main(String[] args) {
        File oldFile = new File("oldname.txt");
        File newFile = new File("newname.txt");

        if (oldFile.renameTo(newFile)) {
            System.out.println("File renamed successfully.");
        } else {
            System.out.println("Failed to rename file.");
        }
    }
}
```

### JavaScript (Node.js)
```javascript
const fs = require('fs');

fs.rename('oldname.txt', 'newname.txt', (err) => {
    if (err) throw err;
    console.log('File renamed successfully.');
});
```

---

## 5. Make a File Read-Only

### Java
```java
import java.io.File;

public class ReadOnlyFile {
    public static void main(String[] args) {
        File file = new File("example.txt");

        if (file.setReadOnly()) {
            System.out.println("File is now read-only.");
        } else {
            System.out.println("Failed to make the file read-only.");
        }
    }
}
```

### JavaScript (Node.js)
```javascript
const fs = require('fs');

fs.chmod('example.txt', 0o444, (err) => {
    if (err) throw err;
    console.log('File is now read-only.');
});
```

---

## 6. Compare Paths of Two Files

### Java
```java
import java.io.File;

public class ComparePaths {
    public static void main(String[] args) {
        File file1 = new File("file1.txt");
        File file2 = new File("file2.txt");

        if (file1.getAbsolutePath().equals(file2.getAbsolutePath())) {
            System.out.println("Paths are the same.");
        } else {
            System.out.println("Paths are different.");
        }
    }
}
```

### JavaScript (Node.js)
```javascript
const path = require('path');

const filePath1 = path.resolve('file1.txt');
const filePath2 = path.resolve('file2.txt');

if (filePath1 === filePath2) {
    console.log('Paths are the same.');
} else {
    console.log('Paths are different.');
}
```

---

## 7. Copy One File into Another File

### Java
```java
import java.io.*;

public class CopyFile {
    public static void main(String[] args) {
        try (FileInputStream in = new FileInputStream("source.txt");
             FileOutputStream out = new FileOutputStream("destination.txt")) {
            byte[] buffer = new byte[1024];
            int length;
            while ((length = in.read(buffer)) > 0) {
                out.write(buffer, 0, length);
            }
            System.out.println("File copied successfully.");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
```

### JavaScript (Node.js)
```javascript
const fs = require('fs');

fs.copyFile('source.txt', 'destination.txt', (err) => {
    if (err) throw err;
    console.log('File copied successfully.');
});
```

---

## 8. Print All the Patterns That Match a Given Pattern from a File

### Java
```java
import java.io.*;
import java.util.regex.*;

public class PatternMatch {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
            String line;
            Pattern pattern = Pattern.compile("your-pattern");
            while ((line = reader.readLine()) != null) {
                Matcher matcher = pattern.matcher(line);
                while (matcher.find()) {
                    System.out.println(matcher.group());
                }
            }
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
```

### JavaScript (Node.js)
```javascript
const fs = require('fs');

const pattern = /your-pattern/g;

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const matches = data.match(pattern);
    if (matches) {
        matches.forEach((match) => console.log(match));
    }
});
```

---

## 9. Append a String in an Existing File

### Java
```java
import java.io.FileWriter;
import java.io.IOException;

public class AppendFile {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("example.txt", true)) {
            writer.write("Appended text.");
            System.out.println("Successfully appended to the file.");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
```

### JavaScript (Node.js)
```javascript
const fs = require('fs');

fs.appendFile('example.txt', 'Appended text.', (err) => {
    if (err) throw err;
    console.log('Successfully appended to the file.');
});
```

# File and Directory Operations in Java and JavaScript

## 1. Read Content from One File and Write It into Another File

### Java
```java
import java.io.*;

public class FileCopy {
    public static void main(String[] args) throws IOException {
        File inputFile = new File("input.txt");
        File outputFile = new File("output.txt");

        try (BufferedReader reader = new BufferedReader(new FileReader(inputFile));
             BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile))) {
            String line;
            while ((line = reader.readLine()) != null) {
                writer.write(line);
                writer.newLine();
            }
        }
    }
}
```

### JavaScript (Node.js)
```javascript
const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile('output.txt', data, (err) => {
        if (err) throw err;
        console.log('File copied successfully!');
    });
});
```

---

## 2. Read and Print All Files from a ZIP File

### Java
```java
import java.io.*;
import java.util.zip.*;

public class ReadZip {
    public static void main(String[] args) throws IOException {
        try (ZipInputStream zipIn = new ZipInputStream(new FileInputStream("archive.zip"))) {
            ZipEntry entry;
            while ((entry = zipIn.getNextEntry()) != null) {
                System.out.println("File: " + entry.getName());
            }
        }
    }
}
```

### JavaScript (Node.js)
```javascript
const unzipper = require('unzipper');
const fs = require('fs');

fs.createReadStream('archive.zip')
  .pipe(unzipper.Parse())
  .on('entry', (entry) => {
      console.log('File:', entry.path);
      entry.autodrain();
  });
```

---

## 3. Java Directory Programs

### Traverse in a Directory
#### Java
```java
import java.io.File;

public class TraverseDirectory {
    public static void main(String[] args) {
        File directory = new File("path/to/directory");
        for (File file : directory.listFiles()) {
            System.out.println(file.getName());
        }
    }
}
```

#### JavaScript (Node.js)
```javascript
const fs = require('fs');

fs.readdir('path/to/directory', (err, files) => {
    if (err) throw err;
    files.forEach(file => console.log(file));
});
```

---

### Get the Size of a Directory
#### Java
```java
import java.io.File;

public class DirectorySize {
    public static long getSize(File directory) {
        long size = 0;
        for (File file : directory.listFiles()) {
            size += file.isDirectory() ? getSize(file) : file.length();
        }
        return size;
    }

    public static void main(String[] args) {
        File directory = new File("path/to/directory");
        System.out.println("Size: " + getSize(directory) + " bytes");
    }
}
```

#### JavaScript (Node.js)
```javascript
const fs = require('fs');
const path = require('path');

function getSize(directory) {
    let size = 0;
    const files = fs.readdirSync(directory);
    files.forEach(file => {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);
        size += stats.isDirectory() ? getSize(filePath) : stats.size;
    });
    return size;
}

console.log('Size:', getSize('path/to/directory'), 'bytes');
```

---

### Delete a Directory
#### Java
```java
import java.io.File;

public class DeleteDirectory {
    public static void delete(File directory) {
        for (File file : directory.listFiles()) {
            if (file.isDirectory()) {
                delete(file);
            } else {
                file.delete();
            }
        }
        directory.delete();
    }

    public static void main(String[] args) {
        File directory = new File("path/to/directory");
        delete(directory);
    }
}
```

#### JavaScript (Node.js)
```javascript
const fs = require('fs');

fs.rm('path/to/directory', { recursive: true, force: true }, (err) => {
    if (err) throw err;
    console.log('Directory deleted!');
});
```

---

### Create Directories Recursively
#### Java
```java
import java.io.File;

public class CreateDirectories {
    public static void main(String[] args) {
        File directories = new File("path/to/directories");
        if (directories.mkdirs()) {
            System.out.println("Directories created!");
        } else {
            System.out.println("Failed to create directories.");
        }
    }
}
```

#### JavaScript (Node.js)
```javascript
const fs = require('fs');

fs.mkdir('path/to/directories', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Directories created!');
});
```

---

### Search for a File in a Directory
#### Java
```java
import java.io.File;

public class SearchFile {
    public static void search(File directory, String fileName) {
        for (File file : directory.listFiles()) {
            if (file.isDirectory()) {
                search(file, fileName);
            } else if (file.getName().equals(fileName)) {
                System.out.println("Found: " + file.getAbsolutePath());
            }
        }
    }

    public static void main(String[] args) {
        File directory = new File("path/to/directory");
        search(directory, "targetFile.txt");
    }
}
```

#### JavaScript (Node.js)
```javascript
const fs = require('fs');
const path = require('path');

function search(directory, fileName) {
    const files = fs.readdirSync(directory);
    files.forEach(file => {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            search(filePath, fileName);
        } else if (file === fileName) {
            console.log('Found:', filePath);
        }
    });
}

search('path/to/directory', 'targetFile.txt');
```

---

### Find the Current Working Directory
#### Java
```java
public class CurrentDirectory {
    public static void main(String[] args) {
        System.out.println("Current Directory: " + System.getProperty("user.dir"));
    }
}
```

#### JavaScript (Node.js)
```javascript
console.log('Current Directory:', process.cwd());
```

---

### Display All the Directories in a Directory
#### Java
```java
import java.io.File;

public class ListDirectories {
    public static void main(String[] args) {
        File directory = new File("path/to/directory");
        for (File file : directory.listFiles()) {
            if (file.isDirectory()) {
                System.out.println(file.getName());
            }
        }
    }
}
```

#### JavaScript (Node.js)
```javascript
const fs = require('fs');

fs.readdir('path/to/directory', { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (file.isDirectory()) {
            console.log(file.name);
        }
    });
});
```

# Exceptions and Errors Programs

## Java and JavaScript Solutions

### 1. Show Runtime Exceptions
#### Java
```java
public class RuntimeExceptionExample {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        System.out.println(arr[5]); // ArrayIndexOutOfBoundsException
    }
}
```

#### JavaScript
```javascript
const arr = [1, 2, 3];
console.log(arr[5]); // undefined (no exception in JavaScript)
```

### 2. Show Types of Errors
#### Java
- **Syntax Error**: Detected during compilation.
- **Runtime Error**: Occurs during program execution.
- **Logical Error**: Produces incorrect results.

#### JavaScript
- **Syntax Error**: `console.log("Hello)`
- **Runtime Error**: `let x = y + 1; // ReferenceError`
- **Logical Error**: Incorrect logic in code.

### 3. Handle the Exception Hierarchies
#### Java
```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("ArithmeticException caught");
} catch (Exception e) {
    System.out.println("General Exception caught");
}
```

#### JavaScript
```javascript
try {
    let result = 10 / 0;
} catch (e) {
    console.error("Error caught:", e.message);
}
```

### 4. Handle the Exception Methods
#### Java
```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Message: " + e.getMessage());
    e.printStackTrace();
}
```

#### JavaScript
```javascript
try {
    let result = 10 / 0;
} catch (e) {
    console.error("Message:", e.message);
    console.error("Stack:", e.stack);
}
```

### 5. Handle the Checked Exceptions
#### Java
```java
import java.io.File;
import java.io.FileReader;

public class CheckedExceptionExample {
    public static void main(String[] args) {
        try {
            File file = new File("nonexistent.txt");
            FileReader fr = new FileReader(file);
        } catch (Exception e) {
            System.out.println("Checked Exception caught: " + e.getMessage());
        }
    }
}
```

#### JavaScript
JavaScript does not have checked exceptions.

### 6. Handle the Unchecked Exceptions
#### Java
```java
public class UncheckedExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Unchecked Exception caught: " + e.getMessage());
        }
    }
}
```

#### JavaScript
```javascript
try {
    let result = 10 / 0;
} catch (e) {
    console.error("Unchecked Exception caught:", e.message);
}
```

### 7. Handle Divide by Zero and Multiple Exceptions
#### Java
```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Divide by zero error");
} catch (Exception e) {
    System.out.println("General exception caught");
}
```

#### JavaScript
```javascript
try {
    let result = 10 / 0;
} catch (e) {
    console.error("Error caught:", e.message);
}
```

### 8. Show Unreachable Code Error
#### Java
```java
public class UnreachableCodeExample {
    public static void main(String[] args) {
        return;
        // System.out.println("This code is unreachable"); // Compilation error
    }
}
```

#### JavaScript
JavaScript does not enforce unreachable code errors.

### 9. Show Thread Interface and Memory Consistency Errors
#### Java
```java
class SharedResource {
    private int counter = 0;

    public synchronized void increment() {
        counter++;
    }

    public int getCounter() {
        return counter;
    }
}

public class MemoryConsistencyErrorExample {
    public static void main(String[] args) {
        SharedResource resource = new SharedResource();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) resource.increment();
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) resource.increment();
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Final Counter: " + resource.getCounter());
    }
}
```

#### JavaScript
JavaScript does not have built-in threading but can use `Web Workers` for concurrency.


# Collections Programs in Java and JavaScript

## Java

### 1. Use Different Types of Collection
```java
import java.util.*;

public class CollectionExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        Set<String> set = new HashSet<>();
        Map<Integer, String> map = new HashMap<>();
        
        list.add("Apple");
        set.add("Banana");
        map.put(1, "Cherry");
        
        System.out.println("List: " + list);
        System.out.println("Set: " + set);
        System.out.println("Map: " + map);
    }
}
```

### 2. Print a Collection
```java
List<String> list = Arrays.asList("A", "B", "C");
list.forEach(System.out::println);
```

### 3. Compare Elements in a Collection
```java
List<Integer> list = Arrays.asList(1, 2, 3, 4);
boolean allMatch = list.stream().allMatch(e -> e > 0);
System.out.println("All elements are positive: " + allMatch);
```

### 4. Get the Size of the Collection
```java
List<String> list = Arrays.asList("A", "B", "C");
System.out.println("Size: " + list.size());
```

### 5. Shuffle the Elements of a Collection
```java
Collections.shuffle(list);
System.out.println("Shuffled List: " + list);
```

### 6. Reverse a Collection
```java
Collections.reverse(list);
System.out.println("Reversed List: " + list);
```

### 7. Convert Collection into Array
```java
String[] array = list.toArray(new String[0]);
System.out.println(Arrays.toString(array));
```

### 8. Convert Array into Collection
```java
List<String> newList = Arrays.asList(array);
System.out.println("List: " + newList);
```

### 9. Replace Elements in a List
```java
Collections.replaceAll(list, "A", "Z");
System.out.println("Modified List: " + list);
```

---

## JavaScript

### 1. Use Different Types of Collection
```javascript
const array = ["Apple", "Banana"];
const set = new Set(["Cherry", "Date"]);
const map = new Map([[1, "Elderberry"], [2, "Fig"]]);

console.log("Array:", array);
console.log("Set:", set);
console.log("Map:", map);
```

### 2. Print a Collection
```javascript
array.forEach(item => console.log(item));
```

### 3. Compare Elements in a Collection
```javascript
const allPositive = array.every(item => item.length > 0);
console.log("All elements are non-empty:", allPositive);
```

### 4. Get the Size of the Collection
```javascript
console.log("Size:", array.length);
```

### 5. Shuffle the Elements of a Collection
```javascript
array.sort(() => Math.random() - 0.5);
console.log("Shuffled Array:", array);
```

### 6. Reverse a Collection
```javascript
array.reverse();
console.log("Reversed Array:", array);
```

### 7. Convert Collection into Array
```javascript
const arrayFromSet = Array.from(set);
console.log("Array from Set:", arrayFromSet);
```

### 8. Convert Array into Collection
```javascript
const setFromArray = new Set(array);
console.log("Set from Array:", setFromArray);
```

### 9. Replace Elements in a List
```javascript
const replacedArray = array.map(item => item === "Apple" ? "Zebra" : item);
console.log("Modified Array:", replacedArray);
```

# Java and JavaScript Solutions

## Rotate Elements of a List

### Java
```java
import java.util.Collections;
import java.util.List;

public class RotateList {
    public static void rotateList(List<Integer> list, int k) {
        Collections.rotate(list, k);
    }
}
```

### JavaScript
```javascript
function rotateList(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
```

---

## Iterate Through Elements of HashMap

### Java
```java
import java.util.HashMap;

public class IterateHashMap {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("A", 1);
        map.put("B", 2);

        for (String key : map.keySet()) {
            System.out.println(key + ": " + map.get(key));
        }
    }
}
```

### JavaScript
```javascript
const map = new Map([["A", 1], ["B", 2]]);
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
```

---

## Multithreading Programs

### Java
```java
public class MultithreadingExample extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }

    public static void main(String[] args) {
        MultithreadingExample thread = new MultithreadingExample();
        thread.start();
    }
}
```

### JavaScript
```javascript
console.log("JavaScript does not support multithreading natively, but you can use Web Workers.");
```

---

## Check the Thread Status

### Java
```java
public class ThreadStatus {
    public static void main(String[] args) {
        Thread thread = new Thread(() -> {});
        System.out.println(thread.getState());
    }
}
```

---

## Suspend a Thread

### Java
```java
public class SuspendThread {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new Thread(() -> {
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        thread.start();
        thread.suspend(); // Deprecated
    }
}
```

---

## Join Threads

### Java
```java
public class JoinThreads {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new Thread(() -> System.out.println("Thread finished"));
        thread.start();
        thread.join();
        System.out.println("Main thread finished");
    }
}
```

---

## Show Daemon Thread

### Java
```java
public class DaemonThreadExample {
    public static void main(String[] args) {
        Thread thread = new Thread(() -> System.out.println("Daemon thread running"));
        thread.setDaemon(true);
        thread.start();
    }
}
```

---

## Print Fibonacci Series in Different Ways

### Java
```java
public class Fibonacci {
    public static void main(String[] args) {
        int n = 10, a = 0, b = 1;
        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            int temp = a + b;
            a = b;
            b = temp;
        }
    }
}
```

### JavaScript
```javascript
function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}
fibonacci(10);
```

---

## Convert Linked List to an Array

### Java
```java
import java.util.LinkedList;

public class LinkedListToArray {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
        list.add(1);
        list.add(2);
        Integer[] array = list.toArray(new Integer[0]);
    }
}
```

### JavaScript
```javascript
const linkedList = [1, 2, 3];
const array = Array.from(linkedList);
```

---

## Convert Vector to a List

### Java
```java
import java.util.List;
import java.util.Vector;

public class VectorToList {
    public static void main(String[] args) {
        Vector<Integer> vector = new Vector<>();
        vector.add(1);
        vector.add(2);
        List<Integer> list = new Vector<>(vector);
    }
}
```

### JavaScript
```javascript
console.log("JavaScript does not have a Vector class, but you can use arrays.");
```

# Conversion Examples in Java and JavaScript

## 1. Convert String to a List of Characters
### Java
```java
String str = "example";
List<Character> charList = str.chars()
                              .mapToObj(c -> (char) c)
                              .collect(Collectors.toList());
```

### JavaScript
```javascript
const str = "example";
const charList = Array.from(str);
```

---

## 2. Convert Iterator to a List
### Java
```java
Iterator<String> iterator = Arrays.asList("a", "b", "c").iterator();
List<String> list = new ArrayList<>();
iterator.forEachRemaining(list::add);
```

### JavaScript
```javascript
// JavaScript does not have an Iterator like Java, but you can use a generator
function* generator() {
  yield "a";
  yield "b";
  yield "c";
}
const iterator = generator();
const list = Array.from(iterator);
```

---

## 3. Convert List to a Map
### Java
```java
List<String> list = Arrays.asList("a", "b", "c");
Map<Integer, String> map = IntStream.range(0, list.size())
                                    .boxed()
                                    .collect(Collectors.toMap(i -> i, list::get));
```

### JavaScript
```javascript
const list = ["a", "b", "c"];
const map = new Map(list.map((value, index) => [index, value]));
```

---

## 4. Convert List to a Stream
### Java
```java
List<String> list = Arrays.asList("a", "b", "c");
Stream<String> stream = list.stream();
```

### JavaScript
```javascript
// JavaScript does not have streams like Java, but you can use an array directly
const list = ["a", "b", "c"];
const stream = list; // Arrays are iterable in JavaScript
```

---

## 5. Convert List to Set
### Java
```java
List<String> list = Arrays.asList("a", "b", "c");
Set<String> set = new HashSet<>(list);
```

### JavaScript
```javascript
const list = ["a", "b", "c"];
const set = new Set(list);
```

---

## 6. Convert InputStream to String
### Java
```java
InputStream inputStream = new ByteArrayInputStream("example".getBytes());
String result = new BufferedReader(new InputStreamReader(inputStream))
                    .lines()
                    .collect(Collectors.joining("\n"));
```

### JavaScript
```javascript
// JavaScript does not have InputStream, but you can use fetch for streams
const inputStream = new ReadableStream({
  start(controller) {
    controller.enqueue("example");
    controller.close();
  }
});
const reader = inputStream.getReader();
let result = "";
reader.read().then(({ value }) => result += value);
```

---

## 7. Convert Set of String to Array of String
### Java
```java
Set<String> set = new HashSet<>(Arrays.asList("a", "b", "c"));
String[] array = set.toArray(new String[0]);
```

### JavaScript
```javascript
const set = new Set(["a", "b", "c"]);
const array = Array.from(set);
```

---

## 8. Convert String to Object
### Java
```java
String json = "{\"key\":\"value\"}";
ObjectMapper mapper = new ObjectMapper();
Map<String, Object> object = mapper.readValue(json, new TypeReference<Map<String, Object>>() {});
```

### JavaScript
```javascript
const json = '{"key":"value"}';
const object = JSON.parse(json);
```

---

## 9. Convert String Value to Byte Value
### Java
```java
String str = "example";
byte[] byteArray = str.getBytes(StandardCharsets.UTF_8);
```

### JavaScript
```javascript
const str = "example";
const byteArray = new TextEncoder().encode(str);
```