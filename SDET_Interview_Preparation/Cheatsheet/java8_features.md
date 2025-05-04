
# Java 8 Features – Detailed Explanation

Java 8 introduced several powerful features that significantly enhanced the Java language and platform. Below are the most important features, along with detailed explanations and examples.

---

## 1. Lambda Expressions

Lambda expressions enable treating functionality as method arguments or treating a block of code as data.

### Syntax:
```java
(parameters) -> expression
```

### Example:
```java
List<String> list = Arrays.asList("A", "B", "C");
list.forEach(item -> System.out.println(item));
```

**Benefits:**
- Reduces boilerplate code.
- Enables functional programming.

---

## 2. Functional Interfaces

An interface with exactly one abstract method is called a **functional interface**. They are used as the basis for lambda expressions.

### Example:
```java
@FunctionalInterface
interface MyFunctionalInterface {
    void execute();
}
```

### Common Functional Interfaces in `java.util.function` package:
- `Predicate<T>` – returns boolean
- `Function<T, R>` – returns an object
- `Consumer<T>` – takes an argument and returns void
- `Supplier<T>` – returns an object

---

## 3. Stream API

The Stream API is used to process collections of objects in a functional way.

### Example:
```java
List<String> names = Arrays.asList("John", "Jane", "Jack");
names.stream()
     .filter(name -> name.startsWith("J"))
     .sorted()
     .forEach(System.out::println);
```

**Benefits:**
- Parallel processing support
- Lazy evaluation
- Clean, concise code

---

## 4. Default and Static Methods in Interfaces

You can now add default and static methods to interfaces.

### Example:
```java
interface Vehicle {
    default void print() {
        System.out.println("I am a vehicle");
    }

    static void staticMethod() {
        System.out.println("Static method in interface");
    }
}
```

**Benefits:**
- Enables backward compatibility
- Avoids utility class misuse

---

## 5. Method References

Method references simplify lambda expressions by referring to a method directly using `::`.

### Types:
- Reference to a static method: `ClassName::staticMethodName`
- Reference to an instance method: `instance::methodName`
- Reference to a constructor: `ClassName::new`

### Example:
```java
List<String> names = Arrays.asList("A", "B", "C");
names.forEach(System.out::println); // instead of names.forEach(name -> System.out.println(name));
```

---

## 6. Optional Class

Introduced to handle null values gracefully and avoid `NullPointerException`.

### Example:
```java
Optional<String> name = Optional.ofNullable("John");
name.ifPresent(System.out::println); // prints John
```

**Methods:**
- `isPresent()`
- `ifPresent()`
- `orElse()`
- `orElseGet()`
- `orElseThrow()`

---

## 7. Date and Time API (java.time package)

A new, immutable, and thread-safe Date and Time API.

### Example:
```java
LocalDate today = LocalDate.now();
LocalTime time = LocalTime.now();
LocalDateTime dateTime = LocalDateTime.now();
```

**Key Classes:**
- `LocalDate`
- `LocalTime`
- `LocalDateTime`
- `ZonedDateTime`
- `Period`, `Duration`, `ChronoUnit`

---

## 8. Nashorn JavaScript Engine

Allows executing JavaScript code inside Java applications.

### Example:
```java
ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
engine.eval("print('Hello from JavaScript')");
```

---

## 9. Repeating Annotations

Allows applying the same annotation multiple times to a declaration.

### Example:
```java
@Hints({@Hint("hint1"), @Hint("hint2")})
class Person {}
```

or directly:

```java
@Hint("hint1")
@Hint("hint2")
class Person {}
```

---

## 10. Type Annotations

New types of annotations that can be used in more locations like generics, casts, etc.

### Example:
```java
@NonNull String str;
```

Used in tools like static analysis or compile-time checks.

---

## Summary Table

| Feature                | Description                                         |
|------------------------|-----------------------------------------------------|
| Lambda Expressions     | Functional-style code using expressions             |
| Functional Interfaces  | Single abstract method interfaces for lambdas       |
| Stream API             | Process collections in a functional style           |
| Default/Static Methods | Methods with implementation in interfaces           |
| Method References      | Shorthand for calling methods with lambdas          |
| Optional Class         | Avoid nulls and NPEs                                |
| Date & Time API        | New immutable date/time classes                     |
| Nashorn Engine         | JavaScript execution within Java                    |
| Repeating Annotations  | Multiple annotations of the same type allowed       |
| Type Annotations       | Annotations on types for better static analysis     |
