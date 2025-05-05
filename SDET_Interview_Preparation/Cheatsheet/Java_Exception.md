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
