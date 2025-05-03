---

### 1. How to use Java Concepts like Overloading, Overriding, Interface, Multithreading, Exception Handling in Test Automation?

[Check the answers here](#)

---

## Basics of Object-Oriented Programming (OOPS)

Object-Oriented Programming (OOP) is a fundamental programming paradigm used in software development, defined by its use of classes and objects.  
It’s built on four main principles: **Inheritance**, **Polymorphism**, **Abstraction**, and **Encapsulation**.  

### Inheritance
Inheritance allows one class to inherit the properties and methods of another class, promoting code reusability.  
**Example:**
```java
class Vehicle {
    public void startEngine() {
        System.out.println("Engine started");
    }
}

class Car extends Vehicle {
    public void openTrunk() {
        System.out.println("Trunk opened");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.startEngine(); // Inherited method
        myCar.openTrunk();   // Own method
    }
}
```

---

### Polymorphism
Polymorphism allows objects of different classes to be treated as objects of a common superclass.  
**Example:**
```java
class Bird {
    public void sing() {
        System.out.println("Bird is singing");
    }
}

class Sparrow extends Bird {
    public void sing() {
        System.out.println("Sparrow is singing");
    }
}

public class Main {
    public static void main(String[] args) {
        Bird myBird = new Sparrow();
        myBird.sing(); // Outputs: Sparrow is singing
    }
}
```

---

### Abstraction
Abstraction hides complex implementation details and shows only the necessary features of an object.  
**Example:**
```java
abstract class Animal {
    abstract void makeSound();

    public void eat() {
        System.out.println("Animal is eating");
    }
}

class Dog extends Animal {
    public void makeSound() {
        System.out.println("Bark");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.makeSound(); // Outputs: Bark
        myDog.eat();       // Inherited method
    }
}
```

---

### Encapsulation
Encapsulation bundles data and methods into a single unit and restricts access to some components.  
**Example:**
```java
class BankAccount {
    private double balance;

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        }
    }

    public double getBalance() {
        return balance;
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        account.deposit(1000);
        account.withdraw(500);
        System.out.println("Balance: " + account.getBalance());
    }
}
```

---

## JAVA Scenario-Based Interview Q&A

### Overloading
**Question:** How would you create overloaded methods for finding elements using Selenium WebDriver?  
**Answer:**
```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ElementFinder {
    public WebElement findElement(WebDriver driver, String locator) {
        return driver.findElement(By.xpath(locator));
    }

    public WebElement findElement(WebDriver driver, By locator) {
        return driver.findElement(locator);
    }
}
```

---

### Overriding
**Question:** Describe a scenario where you would override the `toString()` method in a custom WebElement class for logging purposes in Selenium.  
**Answer:**
```java
import org.openqa.selenium.WebElement;

public class CustomWebElement extends WebElement {
    @Override
    public String toString() {
        return "Custom element with tag name: " + this.getTagName();
    }
}
```

---

### Encapsulation
**Question:** How can encapsulation be applied to manage WebDriver instances in Selenium tests?  
**Answer:**
```java
import org.openqa.selenium.WebDriver;

public class WebDriverManager {
    private WebDriver driver;

    public WebDriver getDriver() {
        if (driver == null) {
            // Initialize WebDriver here
        }
        return driver;
    }
}
```

---

### Inheritance
**Question:** How does the Page Object Model (POM) utilize inheritance in Selenium tests?  
**Answer:**
```java
public class BasePage {
    // Common page elements and methods
}

public class HomePage extends BasePage {
    // Page-specific elements and methods
}
```

---

### Enums
**Question:** Explain how you could use enums to define browser types for cross-browser testing in Selenium.  
**Answer:**
```java
public enum BrowserType {
    CHROME, FIREFOX, SAFARI, EDGE
}
```

---

### Generics
**Question:** How would you create a generic method to handle dynamic waits in Selenium?  
**Answer:**
```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WaitUtils {
    public static <T> T waitFor(WebDriver driver, long timeoutInSeconds, T condition) {
        WebDriverWait wait = new WebDriverWait(driver, timeoutInSeconds);
        return wait.until(condition);
    }
}
```

---

### Strings
**Question:** Provide an example of using strings in Selenium to verify page titles.  
**Answer:**
```java
import org.openqa.selenium.WebDriver;

public class PageTitleChecker {
    public boolean isPageTitleCorrect(WebDriver driver, String expectedTitle) {
        return driver.getTitle().equals(expectedTitle);
    }
}
```

---

### Array
**Question:** How could you use arrays in Selenium to store multiple element locators?  
**Answer:**
```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ElementLocator {
    private By[] locators;

    public ElementLocator(By... locators) {
        this.locators = locators;
    }

    public WebElement findElement(WebDriver driver) {
        for (By locator : locators) {
            WebElement element = driver.findElement(locator);
            if (element != null) {
                return element;
            }
        }
        return null;
    }
}
```

---

### List
**Question:** How would you use lists in Selenium to store a collection of WebElements?  
**Answer:**
```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class ElementList {
    public List<WebElement> findElements(WebDriver driver, By locator) {
        return driver.findElements(locator);
    }
}
```

---

### Map
**Question:** Describe a scenario where you would use a map in Selenium to store test data for data-driven testing.  
**Answer:**
```java
import org.openqa.selenium.WebDriver;
import java.util.Map;

public class TestData {
    public void performTest(WebDriver driver, Map<String, String> testData) {
        // Use test data for test execution
    }
}
```

---
# Java Interview Questions & Coding Solutions

---

## 1. Java Program to Remove Duplicate Characters from a String

```java
public class RemoveDuplicates {
    public static String removeDuplicates(String str) {
        StringBuilder result = new StringBuilder();
        boolean[] seen = new boolean[256];
        for (char c : str.toCharArray()) {
            if (!seen[c]) {
                seen[c] = true;
                result.append(c);
            }
        }
        return result.toString();
    }
}
```

## 2. Remove the Second Highest Element from a HashMap

```java
Map<String, Integer> map = new HashMap<>();
map.put("a", 10);
map.put("b", 20);
map.put("c", 30);

List<Integer> values = new ArrayList<>(map.values());
Collections.sort(values);
int secondHighest = values.get(values.size() - 2);

map.values().removeIf(val -> val == secondHighest);
```

## 3. Prime Numbers Between 1 and Given N

```java
public static void generatePrimes(int n) {
    for (int i = 2; i <= n; i++) {
        boolean isPrime = true;
        for (int j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) System.out.print(i + " ");
    }
}
```

## 4. Find Missing Value from a Sorted Array

```java
int[] arr = {1, 2, 3, 5, 6};
int expectedSum = (6 * (6 + 1)) / 2;
int actualSum = Arrays.stream(arr).sum();
System.out.println("Missing number is: " + (expectedSum - actualSum));
```

## 5. Print Initials of Full Name

```java
Scanner sc = new Scanner(System.in);
System.out.println("Enter full name:");
String[] names = sc.nextLine().split(" ");
for (String name : names) {
    System.out.print(name.charAt(0) + ".");
}
```

## 6. Print All TreeMap Elements

```java
TreeMap<String, Integer> map = new TreeMap<>();
map.put("C", 3);
map.put("A", 1);
map.put("B", 2);

for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

## 7. Singleton Design Pattern

```java
public class Singleton {
    private static Singleton instance;
    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

## 8. Top 5 Test Cases for Booking Coupons

* Validate valid coupon code is applied.
* Validate expired coupon code gives error.
* Validate invalid coupon is rejected.
* Validate discount is correctly calculated.
* Validate coupon is not reusable if policy says so.

## 9. Serialization vs Deserialization

* **Serialization**: Converting object to byte stream.
* **Deserialization**: Reconstructing object from byte stream.

## 10. Difference between Status Codes 401 and 402

* **401**: Unauthorized (requires authentication).
* **402**: Payment Required (rarely used).

## 11. Selenium 3 vs Selenium 4

* Selenium 4 introduces W3C WebDriver compliance.
* New Relative Locators.
* Improved debugging and dev tools.

## 12. What is Delegate in Java?

Not a built-in concept. Equivalent behavior is achieved through **interface-based callbacks** or **functional interfaces**.

## 13. Max Thread Pool in TestNG

No fixed limit. It depends on system capability and `thread-count` in `testng.xml`.

## 14. Parallel Testing Challenges

* Thread safety issues.
* Environment and data conflicts.
* Logging and reporting complications.

## 15. Jenkins Integration Steps

* Create Jenkins job.
* Use Git plugin to pull code.
* Use Maven or Gradle to build and run tests.
* Archive reports.

## 16. Remove main() Method

* Program won’t compile or run; JVM needs `main` as entry point.

## 17. Project Components

* Page Object Classes
* Utilities (Logger, Wait, ConfigReader)
* Base Test
* TestNG XML
* CI/CD pipeline

## 18. Parameter Passing in TestNG

```xml
<parameter name="browser" value="chrome"/>
```

```java
@Parameters("browser")
public void setup(String browser) { }
```

## 19. Retry Failed Tests in TestNG

```java
public class RetryAnalyzer implements IRetryAnalyzer {
    int count = 0;
    int maxRetry = 3;
    public boolean retry(ITestResult result) {
        if (count < maxRetry) {
            count++;
            return true;
        }
        return false;
    }
}
```

## 20. OOPs Concepts in Java

* Abstraction
* Encapsulation
* Inheritance
* Polymorphism

## 21. Class vs Object

* **Class**: Blueprint.
* **Object**: Instance of class.

## 22. What is Collection in Java?

Framework for storing/manipulating groups of objects.

## 23. Ways to Create Object in Java

* new keyword
* clone()
* Class.forName()
* Deserialization
* Constructor.newInstance()

## 24. Why Java Is Not 100% Object-Oriented?

Because it uses primitive types like `int`, `char`, etc.

## 25. Can Constructor Be Static?

No. Constructor is called when object is created; static belongs to class.

## 26. Convert JSON to Java Object (Jackson)

```java
ObjectMapper mapper = new ObjectMapper();
MyClass obj = mapper.readValue(jsonStr, MyClass.class);
```

## 27. Abstract Class vs Interface

| Abstract Class                  | Interface                                             |
| ------------------------------- | ----------------------------------------------------- |
| Can have constructor            | Cannot have constructors                              |
| Supports partial implementation | Only abstract methods (Java 8+ allows default/static) |

## 28. String vs StringBuilder vs StringBuffer

* **String**: Immutable.
* **StringBuilder**: Mutable, not thread-safe.
* **StringBuffer**: Mutable, thread-safe.

## 29. Immutable Classes Other Than String

* `Integer`, `Float`, `Double`, `Long`, `Boolean`

## 30. TreeMap vs HashMap

* **HashMap**: No order guarantee.
* **TreeMap**: Sorted based on keys.

## 31. How to Prioritize Automation

* High business impact
* Repetitive scenarios
* Stable test data

## 32. Set Team Test Case Priorities

* Risk-based approach
* Frequency of execution
* Test case criticality

## 33. Functional Areas to Test in E-commerce

* Product search
* Cart operations
* Checkout
* Payment gateway
* Order tracking
