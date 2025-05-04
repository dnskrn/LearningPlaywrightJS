# Design Patterns in Java for Test Automation Frameworks

## 1. Singleton Pattern
The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it. This is useful for managing shared resources like WebDriver instances.

### Example:
```java
public class WebDriverManager {
    private static WebDriverManager instance;
    private WebDriver driver;

    private WebDriverManager() {
        // Initialize WebDriver
        driver = new ChromeDriver();
    }

    public static WebDriverManager getInstance() {
        if (instance == null) {
            instance = new WebDriverManager();
        }
        return instance;
    }

    public WebDriver getDriver() {
        return driver;
    }
}
```

### Usage:
```java
WebDriver driver = WebDriverManager.getInstance().getDriver();
```

---

## 2. Page Object Model (POM)
The POM pattern separates the UI elements and actions of a page into a dedicated class, improving maintainability and readability.

### Example:
```java
public class LoginPage {
    private WebDriver driver;

    @FindBy(id = "username")
    private WebElement usernameField;

    @FindBy(id = "password")
    private WebElement passwordField;

    @FindBy(id = "loginButton")
    private WebElement loginButton;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void login(String username, String password) {
        usernameField.sendKeys(username);
        passwordField.sendKeys(password);
        loginButton.click();
    }
}
```

### Usage:
```java
LoginPage loginPage = new LoginPage(driver);
loginPage.login("testUser", "testPassword");
```

---

## 3. Factory Pattern
The Factory Pattern is used to create objects without exposing the instantiation logic. It is useful for creating WebDriver instances based on browser types.

### Example:
```java
public class WebDriverFactory {
    public static WebDriver getDriver(String browser) {
        if (browser.equalsIgnoreCase("chrome")) {
            return new ChromeDriver();
        } else if (browser.equalsIgnoreCase("firefox")) {
            return new FirefoxDriver();
        }
        throw new IllegalArgumentException("Unsupported browser: " + browser);
    }
}
```

### Usage:
```java
WebDriver driver = WebDriverFactory.getDriver("chrome");
```

---

## 4. Strategy Pattern
The Strategy Pattern defines a family of algorithms and allows them to be interchangeable. It is useful for implementing different test data strategies.

### Example:
```java
public interface TestDataStrategy {
    String getTestData();
}

public class JsonTestDataStrategy implements TestDataStrategy {
    @Override
    public String getTestData() {
        return "Data from JSON file";
    }
}

public class DatabaseTestDataStrategy implements TestDataStrategy {
    @Override
    public String getTestData() {
        return "Data from Database";
    }
}
```

### Usage:
```java
TestDataStrategy strategy = new JsonTestDataStrategy();
System.out.println(strategy.getTestData());
```

---

## 5. Builder Pattern
The Builder Pattern is used to construct complex objects step by step. It is useful for creating test data objects.

### Example:
```java
public class User {
    private String username;
    private String password;

    private User(UserBuilder builder) {
        this.username = builder.username;
        this.password = builder.password;
    }

    public static class UserBuilder {
        private String username;
        private String password;

        public UserBuilder setUsername(String username) {
            this.username = username;
            return this;
        }

        public UserBuilder setPassword(String password) {
            this.password = password;
            return this;
        }

        public User build() {
            return new User(this);
        }
    }
}
```

### Usage:
```java
User user = new User.UserBuilder()
    .setUsername("testUser")
    .setPassword("testPassword")
    .build();
```

---

## 6. Observer Pattern
The Observer Pattern is used to notify multiple objects about changes in the state of another object. It is useful for logging or reporting test results.

### Example:
```java
public interface TestObserver {
    void update(String message);
}

public class ConsoleLogger implements TestObserver {
    @Override
    public void update(String message) {
        System.out.println("Log: " + message);
    }
}

public class TestSubject {
    private List<TestObserver> observers = new ArrayList<>();

    public void addObserver(TestObserver observer) {
        observers.add(observer);
    }

    public void notifyObservers(String message) {
        for (TestObserver observer : observers) {
            observer.update(message);
        }
    }
}
```

### Usage:
```java
TestSubject subject = new TestSubject();
subject.addObserver(new ConsoleLogger());
subject.notifyObservers("Test started");
```

---

## 7. Decorator Pattern
The Decorator Pattern is used to dynamically add behavior to an object. It is useful for enhancing WebDriver functionality.

### Example:
```java
public class WebDriverDecorator implements WebDriver {
    protected WebDriver driver;

    public WebDriverDecorator(WebDriver driver) {
        this.driver = driver;
    }

    @Override
    public void get(String url) {
        System.out.println("Navigating to: " + url);
        driver.get(url);
    }

    // Implement other WebDriver methods...
}
```

### Usage:
```java
WebDriver driver = new WebDriverDecorator(new ChromeDriver());
driver.get("https://example.com");
```

---

These design patterns help in building a robust, maintainable, and scalable test automation framework.
