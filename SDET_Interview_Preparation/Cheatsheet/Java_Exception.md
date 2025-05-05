# Interview CheatSheet: Java Exceptions

## What are Exceptions in Java?
- **Definition**: An exception is an event that disrupts the normal flow of a program.
- **Hierarchy**:
  - `Throwable`
    - `Error` (e.g., OutOfMemoryError)
    - `Exception`
      - Checked Exceptions (e.g., IOException)
      - Unchecked Exceptions (e.g., NullPointerException)

## Types of Exceptions
1. **Checked Exceptions**:
   - Must be handled at compile time.
   - Examples: `IOException`, `SQLException`.
2. **Unchecked Exceptions**:
   - Occur at runtime, not checked at compile time.
   - Examples: `ArithmeticException`, `NullPointerException`.

## Common Exception Handling Keywords
- `try`: Defines a block of code to test for exceptions.
- `catch`: Handles the exception.
- `finally`: Executes code after `try-catch`, regardless of exception.
- `throw`: Used to explicitly throw an exception.
- `throws`: Declares exceptions in method signature.

## Best Practices
- Catch specific exceptions instead of using a generic `Exception`.
- Avoid swallowing exceptions (e.g., empty `catch` blocks).
- Use `finally` for resource cleanup.
- Use custom exceptions for application-specific errors.

## Example Code
```java
public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // This will throw ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero: " + e.getMessage());
        } finally {
            System.out.println("Execution completed.");
        }
    }
}
```

## Commonly Asked Interview Questions
1. What is the difference between `throw` and `throws`?
2. Explain the difference between Checked and Unchecked exceptions.
3. How does the `finally` block work?
4. Can a `try` block exist without a `catch` block?
5. How do you create a custom exception in Java?

## Creating Custom Exceptions
```java
class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

public class TestCustomException {
    public static void main(String[] args) {
        try {
            throw new CustomException("This is a custom exception");
        } catch (CustomException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

## Key Points
- Exceptions improve code robustness.
- Always clean up resources in `finally` or use try-with-resources.
- Avoid overusing exceptions for control flow.

# Try-Catch with Resources - Interview Cheatsheet

## Overview
The `try-catch` block is used for exception handling in programming. When working with resources (e.g., files, database connections), it is essential to ensure proper resource management to avoid memory leaks or resource locking.

---

## Syntax

### Basic Try-Catch
```java
try {
  // Code that may throw an exception
} catch (ExceptionType e) {
  // Handle exception
}
```

### Try-Catch-Finally
```java
try {
  // Code that may throw an exception
} catch (ExceptionType e) {
  // Handle exception
} finally {
  // Code that always executes (e.g., cleanup)
}
```

### Try-With-Resources (Java)
```java
try (ResourceType resource = new ResourceType()) {
  // Code that uses the resource
} catch (ExceptionType e) {
  // Handle exception
}
// Resource is automatically closed
```

---

## Key Points
1. **Try-Catch**:
   - Use `try` to wrap code that may throw exceptions.
   - Use `catch` to handle specific exceptions.
   - Multiple `catch` blocks can be used for different exception types.

2. **Finally**:
   - The `finally` block always executes, even if an exception is thrown.
   - Ideal for cleanup tasks like closing files or releasing locks.

3. **Try-With-Resources**:
   - Introduced in Java 7.
   - Automatically closes resources that implement the `AutoCloseable` interface.
   - Reduces boilerplate code for resource management.

---

## Examples

### Example 1: Basic Try-Catch
```java
try {
  int result = 10 / 0; // Throws ArithmeticException
} catch (ArithmeticException e) {
  System.out.println("Cannot divide by zero: " + e.getMessage());
}
```

### Example 2: Try-Catch-Finally
```java
FileReader reader = null;
try {
  reader = new FileReader("file.txt");
  // Read file
} catch (IOException e) {
  System.out.println("Error reading file: " + e.getMessage());
} finally {
  if (reader != null) {
    try {
      reader.close();
    } catch (IOException e) {
      System.out.println("Error closing file: " + e.getMessage());
    }
  }
}
```

### Example 3: Try-With-Resources
```java
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
  String line;
  while ((line = br.readLine()) != null) {
    System.out.println(line);
  }
} catch (IOException e) {
  System.out.println("Error: " + e.getMessage());
}
```

---

## Best Practices
1. Use specific exception types in `catch` blocks instead of generic `Exception`.
2. Always close resources in `finally` or use try-with-resources.
3. Avoid empty `catch` blocks; log or handle exceptions appropriately.
4. Do not suppress exceptions unless absolutely necessary.
5. Use meaningful messages when throwing or logging exceptions.

---

## Common Interview Questions
1. What is the purpose of the `finally` block?
2. How does try-with-resources work in Java?
3. What happens if an exception is thrown in the `finally` block?
4. Can you nest `try-catch` blocks? Provide an example.
5. What is the difference between checked and unchecked exceptions?

---

## Additional Resources
- [Java Documentation: Try-Catch](https://docs.oracle.com/javase/tutorial/essential/exceptions/try.html)
- [Effective Java by Joshua Bloch](https://www.oreilly.com/library/view/effective-java/9780134686097/)
- [Exception Handling Best Practices](https://www.baeldung.com/java-exceptions)

