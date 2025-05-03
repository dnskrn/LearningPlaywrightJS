# TestNG Framework Interview Questions

## 1. What is the TestNG Framework?
Inspired by JUnit, TestNG was created by Cedric Beust in 2004. TestNG is a free and open-source Java test automation framework. It is based on the same principles as JUnit and NUnit. TestNG's advanced and useful features make it a more robust framework than its competitors, such as:
- Easier-to-use annotations
- HTML reports for implementations
- Grouping of test cases

TestNG's "NG" stands for "Next Generation." It is widely used by developers and testers due to its ease of use, numerous annotations, grouping, dependency, priority, and parameterization capabilities.

---

## 2. How do you run the TestNG script?

### Method 1: Command Line
Run TestNG scripts from the command line by specifying the TestNG JAR file and the path to your test class file:
```bash
java -cp testng.jar:path/to/your/test/class com.testng.TestClass
```
Replace `testng.jar` with the name of the TestNG JAR file, `path/to/your/test/class` with the path to your test class, and `com.testng.TestClass` with the fully qualified name of your test class.

### Method 2: Using an IDE
1. Launch your Java IDE (e.g., Eclipse, IntelliJ IDEA, NetBeans).
2. Open an existing Java project or create a new one.
3. Include the TestNG library in the build path of your project.
4. Create a Java class file for your TestNG test cases. Annotate test methods with `@Test`.
5. Right-click the test class file in the Project Explorer and select **Run As > TestNG Test**.

---

## 3. What are the advantages of TestNG?
- Allows grouping of test cases, which JUnit does not.
- Includes additional levels like `@BeforeSuite`, `@AfterSuite`, `@BeforeTest`, and `@AfterTest`.
- No need to extend any classes.
- Provides extensive reporting options, including HTML and XML reports.
- Produces logs for better debugging.
- Removes constraints like `@BeforeClass` and `@AfterClass` present in JUnit.

---

## 4. What is the difference between a TestNG test and a TestNG test suite?
| **Aspect**         | **TestNG Test**                                   | **TestNG Test Suite**                           |
|---------------------|--------------------------------------------------|------------------------------------------------|
| **Definition**      | A single Java class with test methods annotated with `@Test`. | An XML file containing multiple TestNG tests. |
| **Purpose**         | Tests specific application functionality.        | Bundles related tests for unified execution.   |
| **Configuration**   | Uses annotations like `@BeforeMethod`, `@AfterMethod`. | Configured using XML tags like `<suite>`, `<test>`. |
| **Execution**       | Runs using a test runner or `testng.xml`.         | Runs using the `testng.xml` file.             |

---

## 5. What are some advantages of TestNG over JUnit?
- Easier-to-understand annotations.
- Generates HTML reports.
- Produces logs.
- Allows grouping of test cases.
- Includes additional levels like `@BeforeSuite`, `@AfterSuite`, etc.
- Enables parallel execution of test cases.

---

## 6. Why do we need TestNG in Selenium?
TestNG provides features like:
- Parallel test execution
- Test dependency management
- Flexible test configuration
- Data-driven testing
- Comprehensive reporting

These features make it a powerful tool for Selenium test automation.

---

## 7. What are the basic steps required in writing the TestNG test?
1. Add the TestNG library to your project's classpath.
2. Create a Java class and annotate methods with `@Test`.
3. Use annotations like `@BeforeMethod` and `@AfterMethod` for setup and teardown.
4. Execute the test using TestNG's test runner.
5. Analyze results using TestNG's reporting features.

---

## 8. What is the difference between Suite, Test, and Class?
- **Suite**: The highest level of organization in TestNG. Contains multiple tests and configurations.
- **Test**: A collection of related test cases. May include multiple classes.
- **Class**: A Java class containing test methods annotated with `@Test`.

---

## 9. How will you execute methods or test cases in TestNG in a different order?
- Use the `priority` attribute.
- Use the `dependsOnMethods` attribute.
- Use the `dependsOnGroups` property.
- Configure the order in the `testng.xml` file.

---

## 10. Define the correct order of tags in the TestNG XML file.
The correct order is:
```xml
<suite>
    <test>
        <classes>
            <class>
                <methods>
                </methods>
            </class>
        </classes>
    </test>
</suite>
```

---

## 11. Why do we create the XML file in TestNG?
The XML file allows:
- Configuration of test suites and test methods.
- Grouping of test methods.
- Passing parameters to test methods.
- Parallel execution of tests.

---

## 12. Write the code snippet for passing values 1 and 2 to the parameters `val1` and `val2` through the XML file.

### TestNG XML File
```xml
<!DOCTYPE suite SYSTEM "https://www.lambdatest.com/">
<suite name="MyTestSuite">
    <test name="MyTest">
        <parameter name="val1" value="1" />
        <parameter name="val2" value="2" />
        <classes>
            <class name="com.example.MyTestClass" />
        </classes>
    </test>
</suite>
```

### Java Code
```java
public class MyTestClass {
     @Test
     @Parameters({"val1", "val2"})
     public void testMethod(int val1, int val2) {
            // Test code goes here
     }
}
```

---

## 13. Arrange the TestNG XML tags from parent to child.
Correct order:
1. `<suite>`
2. `<test>`
3. `<classes>`
4. `<class>`
5. `<methods>`

---

## 14. Can we use regular expressions in TestNG groups? Write a demo XML file.
Yes, TestNG supports regular expressions in groups.

### Example XML File
```xml
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="Example Test Suite">
    <test name="Example Test">
        <groups>
            <run>
                <include name=".*smoke.*" />
            </run>
        </groups>
        <classes>
            <class name="com.example.tests.Test1" />
            <class name="com.example.tests.Test2" />
        </classes>
    </test>
</suite>
```

---

## 15. What is the use of the `preserve-order` attribute in the TestNG XML file?
The `preserve-order` attribute ensures that test methods are executed in the order they are defined in the Java code. Set `preserve-order="true"` to maintain the order.

---

## 16. How to Integrate TestNG XML with Maven?
Add the TestNG dependency and configure the `maven-surefire-plugin` in your `pom.xml` file:
```xml
<build>
        <plugins>
                <plugin>
                        <groupId>org.apache.maven.plugins</groupId>
                        <artifactId>maven-surefire-plugin</artifactId>
                        <version>3.0.0-M5</version>
                        <configuration>
                                <suiteXmlFiles>
                                        <suiteXmlFile>src/test/resources/testng.xml</suiteXmlFile>
                                </suiteXmlFiles>
                        </configuration>
                </plugin>
        </plugins>
</build>
```

---

## 17. How to pass the parameter in the test case through the `testng.xml` file?
Use the `<parameter>` tag in the XML file and the `@Parameters` annotation in the Java code.

### XML File
```xml
<parameter name="username" value="user1" />
<parameter name="password" value="pass1" />
```

### Java Code
```java
@Test
@Parameters({"username", "password"})
public void myTestMethod(String username, String password) {
        // Test code
}
```

# TestNG Interview Questions

## 18. How to create an XML file in TestNG?

1. Using a text editor or an IDE, create a new file with the `.xml` extension.
2. To define the DTD, use the `<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">` tag, and the `<!-- Test suite -->` tag to define the test suite.
3. Define the `<test>` tags within the test suite with the necessary attributes such as `name` and `verbose`. Within `<test>` tags, define classes or methods that must be executed using the `<class>` and `<method>` tags, respectively.

### Example:
```xml
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="MyTestSuite">
    <test name="MyTest">
        <classes>
            <class name="com.example.MyTestClass"/>
        </classes>
    </test>
</suite>
```

For more details, check out our blog on how to create a TestNG XML file.

---

## 19. How to write regular expressions in `testng.xml` to search `@Test` methods containing the “smoke” keyword?

You can use the `<methods>` tag with the `<include>` attribute. Below is an example:

### Example:
```xml
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="MyTestSuite" verbose="1">
    <test name="MyTest">
        <classes>
            <class name="com.example.MyTestClass"/>
        </classes>
        <methods>
            <include name=".*smoke.*"/>
        </methods>
    </test>
</suite>
```

---

## 20. What are the types of annotations used in TestNG (in the sequence of execution/hierarchy)?

Annotations in TestNG specify the behavior of test methods. They are executed in the following order:

1. `@BeforeSuite`
2. `@BeforeTest`
3. `@BeforeClass`
4. `@BeforeMethod`
5. `@Test`
6. `@AfterMethod`
7. `@AfterClass`
8. `@AfterTest`
9. `@AfterSuite`

### Example:
```java
public class MyTest {

    @BeforeSuite
    public void beforeSuite() {
            System.out.println("Before Suite");
    }

    @BeforeTest
    public void beforeTest() {
            System.out.println("Before Test");
    }

    @BeforeClass
    public void beforeClass() {
            System.out.println("Before Class");
    }

    @BeforeMethod
    public void beforeMethod() {
            System.out.println("Before Method");
    }

    @Test
    public void test1() {
            System.out.println("Test 1");
    }

    @Test
    public void test2() {
            System.out.println("Test 2");
    }

    @AfterMethod
    public void afterMethod() {
            System.out.println("After Method");
    }

    @AfterClass
    public void afterClass() {
            System.out.println("After Class");
    }

    @AfterTest
    public void afterTest() {
            System.out.println("After Test");
    }

    @AfterSuite
    public void afterSuite() {
            System.out.println("After Suite");
    }
}
```

---

## 21. What are the categories of annotations in TestNG?

1. **Precondition Annotations**: Executed before the test.
     - `@BeforeMethod`
     - `@BeforeClass`
     - `@BeforeSuite`
     - `@BeforeTest`

2. **Test Annotations**: Defined just before the test methods.
     - `@Test`

3. **Postcondition Annotations**: Executed after the test methods.
     - `@AfterMethod`
     - `@AfterClass`
     - `@AfterTest`
     - `@AfterSuite`

4. **Meta-Annotations**: Used to create custom annotations.
     - `@TestInstance`
     - `@Parameters`
     - `@DataProvider`
     - `@Listeners`
     - `@Factory`
     - `@Test`

---

## 22. What is `@Factory` annotation in TestNG?

The `@Factory` annotation is used to create test instances at runtime. It allows you to generate test classes or instances dynamically based on runtime conditions or parameters.

### Example:
```java
@Factory
public static Object[] createInstances() {
        Object[] result = new Object[3];
        for (int i = 0; i < result.length; i++) {
                result[i] = new MyTest(i);
        }
        return result;
}
```

---

## 23. What is the difference between `@Factory` and `@DataProvider` annotations?

- **`@Factory`**: Creates multiple instances of the same test class with different input parameters or configurations. Useful for running tests in parallel.
- **`@DataProvider`**: Supplies test data to a test method. It separates test data from test logic and supports various data sources like arrays, Excel sheets, databases, etc.

---

## 24. What is the use of `@Listener` annotation in TestNG?

The `@Listener` annotation is used to define listeners, which are classes that listen to events during test execution. Listeners can be used for:

- Logging
- Reporting
- Customizing the test execution flow

---

## 25. What is the sequence of execution of the annotations in TestNG?

The sequence is as follows:

1. `@BeforeSuite`
2. `@BeforeTest`
3. `@BeforeClass`
4. `@BeforeMethod`
5. `@Test`
6. `@AfterMethod`
7. `@AfterClass`
8. `@AfterTest`
9. `@AfterSuite`

---

## 26. What are the attributes supported by `@Test` annotation in TestNG?

The `@Test` annotation supports the following attributes:

- `alwaysRun`
- `dataProvider`
- `dataProviderClass`
- `description`
- `enabled`
- `expectedExceptions`
- `expectedExceptionsMessageRegExp`
- `groups`
- `invocationCount`
- `invocationTimeOut`
- `priority`
- `successPercentage`
- `testName`
- `timeOut`
- `dependsOnGroups`
- `dependsOnMethods`
- `skipFailedInvocations`
- `alwaysResolveDependencies`

# TestNG Interview Questions and Answers

### 27. Which attribute is used to run the test method always?
The `alwaysRun` attribute ensures that a test method is always executed, regardless of whether a dependent method fails or is skipped.

### 28. Which attribute is used to provide data to test method in Data-driven testing?
In Data-driven testing, we use the `dataProvider` attribute of the `@Test` annotation in TestNG to provide data to a test method.

### 29. What is the use of the `dependsOnMethods` attribute in TestNG?
The `dependsOnMethods` attribute in TestNG is used to specify a test method's dependency on one or more other test methods. This ensures that certain test methods are run in the correct order. If any of the dependencies fail or are skipped, the dependent method will also be skipped.

### 30. What is the use of `dependsOnGroups` attribute in TestNG?
The `dependsOnGroups` attribute in TestNG is used to specify a test method's dependency on one or more groups of test methods. If any test method in the specified group fails or is skipped, the dependent method will also be skipped.

### 31. What is the difference between `@BeforeTest` and `@BeforeMethod` annotation?
- `@BeforeTest`: Runs setup code before all test methods in the `<test>` tag of a TestNG XML file.
- `@BeforeMethod`: Runs setup code before each individual test method in a class.

### 32. How will you make test cases dependent on each other?
Using the `@Test` annotation's `dependsOnMethods` attribute, we can make test cases dependent on one another in TestNG.

---

## Report Related TestNG Interview Questions

### 33. What are the types of reports generated in TestNG by default?
TestNG generates the following reports by default:
- TestNG HTML reports
- TestNG XML reports
- TestNG index reports
- Emailable reports

### 34. What are the different ways to produce reports for TestNG results?
- **Default Reports**: HTML reports generated by TestNG.
- **TestNG Ant Task**: Customized HTML reports using Ant.
- **ExtentReports**: Rich, interactive HTML reports.
- **Allure Reports**: Detailed and interactive reports.
- **ReportNG**: Custom reporting plugin with templates.

### 35. Where is the emailable report generated and saved in TestNG?
The emailable report is saved in the `test-output` directory with the filename `emailable-report.html`.

### 36. Where is the index report generated and saved in TestNG?
The `index.html` report is saved in the `test-output` directory. Its filename is `index.html`.

### 37. How to use TestNG Reporter Class for log generation?
1. Import the `Reporter` class:
    ```java
    import org.testng.Reporter;
    ```
2. Use the `Reporter.log()` method to log messages:
    ```java
    Reporter.log("Log message");
    ```
3. Enable verbose output in the TestNG XML file:
    ```xml
    <suite name="My Test Suite" verbose="1"></suite>
    ```

### 38. What do we need to generate a customized report in TestNG?
To generate a customized report:
- Use the `IReporter` interface.
- Implement the `ITestListener` interface.
- Include listeners and reporters in your testing.

### 39. How to share the project report using TestNG?
- **HTML Reports**: Share the HTML file or host it on a server.
- **Email Reports**: Configure email settings in the `testng.xml` file.
- **CI/CD Tools**: Integrate TestNG with tools like Jenkins or Bamboo.

---

## Grouping Related TestNG Interview Questions

### 40. What is the importance of groups in TestNG?
Groups allow you to categorize tests and control their execution. Benefits include:
- Organizing tests by functionality or priority.
- Running subsets of tests.
- Concurrent execution for faster results.

### 41. Define grouping in TestNG.
Grouping is the process of categorizing test methods into logical groups based on functionality or purpose.

### 42. How do you define groups in TestNG?
Groups are defined using the `groups` attribute in the `@Test` annotation:
```java
@Test(groups = {"groupName"})
```

### 43. How do you exclude a group from the test execution cycle?
Use the `<exclude>` tag in the TestNG XML file:
```xml
<groups>
  <run>
     <exclude name="groupName" />
  </run>
</groups>
```

### 44. How to create a Group of Groups in TestNG?
Define groups and use the `dependsOnGroups` attribute to create a group of groups:
```java
@Test(groups = {"groupOfGroups"}, dependsOnGroups = {"group1", "group2"})
public void testGroupOfGroups() {
     // test code
}
```

### 45. How to group multiple test methods in a single group using TestNG?
Use the `groups` attribute in the `@Test` annotation:
```java
@Test(groups = {"GroupName"})
```

### 46. How do you group multiple test methods in multiple groups?
Use a comma-separated list of group names in the `groups` attribute:
```java
@Test(groups = {"Science", "Maths"})
```

### 47. How to group multiple test methods with Priority?
Use the `priority` attribute along with `groups`:
```java
@Test(priority = 1, groups = {"Maths"})
public void testMethod1() {
     // test code
}
```

### 48. What are Inclusion & Exclusion Groups in TestNG?
- **Inclusion Group**: Included in test execution.
- **Exclusion Group**: Excluded from test execution.

### 49. When do we use `dependsOnGroups` in TestNG?
Use `dependsOnGroups` to make a test method dependent on a group of tests:
```java
@Test(groups = {"search"}, dependsOnGroups = {"login"})
public void testSearch() {
     // test code
}
```

--- 

# TestNG Interview Questions

## Assertion Related Questions

### 50. What do you understand by asserting in TestNG?
Asserting in TestNG is a code element that helps determine whether the expected and actual results are equal. It uses the built-in `Assert` class and its methods. A test case passes if no assert methods throw exceptions during execution.  
**Syntax:**
```java
import org.testng.Assert;

// Perform assertion
Assert.assertEquals(expectedValue, actualValue, message);
```

### 51. Describe any five common TestNG assertions
1. `assertEquals(expectedValue, actualValue, message)`: Compares two values for equality.  
2. `assertTrue(condition, message)`: Checks if a condition is true.  
3. `assertFalse(condition, message)`: Checks if a condition is false.  
4. `assertNull(object, message)`: Verifies if an object is null.  
5. `assertNotNull(object, message)`: Verifies if an object is not null.

### 52. What are the different types of assert in TestNG?
1. **Soft Asserts**  
2. **Firm Assertions**

### 53. Define soft assert in TestNG and describe how they are different from hard assert
Soft asserts allow tests to continue running even if an assertion fails. They require importing `org.testng.asserts.SoftAssert`.  
**Difference:**  
- **Hard Assert**: Stops test execution immediately on failure.  
- **Soft Assert**: Continues execution and reports failures at the end.

---

## Dependency Related Questions

### 54. What is meant by dependency in TestNG?
Dependencies specify the order of test execution. A test method can depend on another using `dependsOnMethods`.  
**Example:**
```java
@Test(dependsOnMethods = {"testMethod1"})
public void testMethod2() {
    // Test code
}

@Test
public void testMethod1() {
    // Test code
}
```

### 55. How do you create dependencies in TestNG?
Use the `dependsOnMethods` attribute in the `@Test` annotation.  
**Example:**
```java
@Test
public void loginTest() {
    // Login test code
}

@Test(dependsOnMethods = {"loginTest"})
public void dashboardTest() {
    // Dashboard test code
}
```

### 56. How do you create dependency through the XML file?
Dependencies can be defined in the `testng.xml` file.  
**Example:**
```xml
<test name="MyTest">
    <classes>
        <class name="com.example.MyTestClass">
            <methods>
                <include name="loginTest" />
                <include name="dashboardTest" dependsOnMethods="loginTest" />
            </methods>
        </class>
    </classes>
</test>
```

### 57. How does TestNG allow declaring dependencies?
1. `dependsOnMethods`  
2. `dependsOnGroups`

### 58. How many types of dependencies can you achieve using TestNG?
| Dependency Type       | Attribute          |
|-----------------------|--------------------|
| Method Dependencies   | `dependsOnMethods` |
| Group Dependencies    | `dependsOnGroups`  |
| Class Dependencies    | `dependsOnClasses` |
| Soft Dependencies     | `alwaysRun`        |
| Priority Dependencies | `priority`         |

---

## Miscellaneous Questions

### 59. What are the priorities in TestNG?
Priorities define the order of test execution. Lower priority values execute first.  

### 60. How to set priorities in TestNG?
Use the `priority` attribute in the `@Test` annotation.  
**Example:**
```java
@Test(priority=1)
public void testMethod1() {
     // Test code
}

@Test(priority=2)
public void testMethod2() {
     // Test code
}
```

### 61. What is parameterization in TestNG?
Parameterization allows passing parameters to test methods for running tests with different data sets. Use the `@DataProvider` annotation for this purpose.

### 62. What are the optional parameters in TestNG?
Optional parameters are defined using the `@Optional` annotation.  
**Example:**
```java
@Test
public void testMethod(@Optional("default") String optionalParam) {
    // Test code
}
```

### 63. What is the significance of "timeout" in TestNG?
The `timeout` attribute specifies the maximum execution time for a test method.  
**Syntax:**
```java
@Test(timeout = 5000)
```

### 64. What is meant by `invocationCount` in TestNG?
The `invocationCount` attribute specifies how many times a test method should execute.  
**Example:**
```java
@Test(invocationCount = 10)
```

### 65. What is meant by parallel test execution in TestNG?
Parallel execution runs multiple tests concurrently, reducing execution time. It can be applied at the method, test, class, or instance level.

### 66. On what levels can we apply parallel testing in TestNG?
1. **Methods**  
2. **Tests**  
3. **Classes**  
4. **Instances**

### 67. How is exception handling done in TestNG?
1. Using the `expectedExceptions` attribute.  
2. Using a `try-catch` block.  
**Example:**
```java
@Test(expectedExceptions = ArithmeticException.class)
public void testDivideByZero() {
     int result = 5 / 0;
}
```

### 68. Can we disable a test in TestNG? If so, explain how?
Yes, by setting `enabled=false` in the `@Test` annotation.  
**Example:**
```java
@Test(enabled=false)
public void disabledTest() {
    // Test code
}
```

### 69. Why is the Reporter class used in TestNG?
The `Reporter` class generates custom logs during test execution.  
**Syntax:**
```java
Reporter.log("Custom log message");
```

### 70. What are listeners in TestNG?
Listeners are classes that modify TestNG's behavior during test execution. Examples include `ITestListener`, `ISuiteListener`, etc.

### 71. How to declare listeners in TestNG?
1. Add listeners in the XML file using the `<listeners>` tag.  
2. Use the `@Listeners` annotation in the test class.

### 72. What are the different listeners TestNG provides?
1. `ITestListener`  
2. `ISuiteListener`  
3. `IReporter`  
4. `IAnnotationTransformer`  
5. `IMethodInterceptor`  

### 73. How to implement `IAnnotationTransformer` in TestNG?
Create a class implementing `IAnnotationTransformer` and override the `transform()` method. Add the listener in the XML file or use `@Listeners`.

### 74. What is the default value for TestNG priority?
The default priority is `0`.

### 75. How to achieve `ITestListener` implementation?
1. Create a class implementing `ITestListener`.  
2. Override methods like `onTestSuccess()`, `onTestFailure()`, etc.  
3. Add the listener in the XML file or use `@Listeners`.

### 76. What is an exception test in TestNG?
An exception test verifies if a method throws a specific exception using the `expectedExceptions` attribute.

### 77. How will you install TestNG in Eclipse?
1. Go to `Help > Eclipse Marketplace`.  
2. Search for "TestNG".  
3. Install the plugin and restart Eclipse.

### 78. How to throw a SKIP Exception in TestNG?
Use the `SkipException` class.  
**Example:**
```java
throw new SkipException("Skipping this test...");
```

### 79. How to ignore a test case in TestNG?
Set `enabled=false` in the `@Test` annotation.

### 80. What is the time unit we specify in test suites and test cases?
Time is specified in seconds.  
**Example:**
```xml
<suite name="MyTestSuite" time-out="180">
```

### 81. List out various ways in which TestNG can be invoked
1. Command line  
2. IDE (Eclipse, IntelliJ)  
3. Build tools (Maven, Gradle)  
4. CI tools (Jenkins, Travis CI)  

---

## Advanced Questions

### 82. How can we create a data-driven framework using TestNG?
Use the `@DataProvider` annotation to supply test data.  
**Example:**
```java
@DataProvider(name = "testData")
public Object[][] provideData() {
     return new Object[][] {
          {"John", "Doe", 30},
          {"Jane", "Smith", 25}
     };
}

@Test(dataProvider = "testData")
public void testMethod(String firstName, String lastName, int age) {
     System.out.println(firstName + " " + lastName + ", Age: " + age);
}
```

### 83. How to exclude a particular test method from execution?
Set `enabled=false` in the `@Test` annotation.

### 84. How to skip a `@Test` method from execution in TestNG?
Throw a `SkipException`.  
**Example:**
```java
throw new SkipException("Skipping this test...");
```
# TestNG Interview Questions and Answers

## 85. How to skip a `@Test` method from execution in TestNG?
The `org.testng.SkipException` class can be used to prevent a `@Test` method from being executed in TestNG. This class throws a skip exception, instructing TestNG to skip the test method execution.

```java
import org.testng.SkipException;
import org.testng.annotations.Test;

public class MyTest {
    @Test
    public void testMethod2() {
        throw new SkipException("Skipping testMethod2");
    }
}
```

---

## 86. How To Run TestNG Using Command Prompt?
Here is the code snippet to run TestNG in the command prompt:

```bash
set classpath=C:\Users\Admin\Desktop\LTlearninghub\workspace\TestNGtestingtutoriol\bin;C:\Users\Admin\Desktop\LTlearninghub\workspace\TestNGtestingtutoriol\lib\*
java org.testng.TestNG C:\Users\Admin\Desktop\LTlearninghub\workspace\TestNGtestingtutoriol\testng.xml
```

---

## 87. What is the use of `@Test(threadPoolSize=x)`?
The `@Test(threadPoolSize=x)` annotation specifies the number of threads to use when running a test method in parallel. TestNG creates a thread pool and distributes test method instances among them.

---

## 88. What is the use of `@Test(invocationCount=x)`?
The `@Test(invocationCount=x)` annotation specifies how many times a test method should be invoked during execution. TestNG runs the test method `x` times, each with a new test instance.

---

## 89. What is the thread count in TestNG?
The `thread-count` attribute in TestNG specifies the number of threads for parallel execution. It is set in the `<suite>` tag of the TestNG XML file.

---

## 90. What is verbose in TestNG?
The `verbose` attribute controls the amount of information displayed in the console during test execution. It accepts values from `0` (least verbose) to `10` (most verbose).

---

## 91. How many ways can we pass parameter values to test methods?
1. Using `@Test` annotation parameters  
2. Using the `@DataProvider` method  
3. Using a factory method  
4. Using an external data source  

---

## 92. How do you use TestNG to test RESTful web services?
Use the RestAssured library to write test methods that send HTTP requests and validate responses. Use TestNG data providers and parameterization for various scenarios.

---

## 93. How do you use TestNG to test mobile applications?
Use Appium with TestNG to automate mobile app testing. Define device capabilities, write test methods to interact with the app, and manage execution using TestNG annotations.

---

## 94. How to implement Data Providers in TestNG?
1. Create a method returning a two-dimensional object array:
   ```java
   @DataProvider(name = "testData")
   public Object[][] testData() {
       return new Object[][] {
           {"Mehul", "password1"},
           {"Gadhiya", "password2"},
           {"Devya", "password3"}
       };
   }
   ```
2. Add the `@DataProvider` annotation to the method.  
3. Use the `dataProvider` attribute in the `@Test` annotation:
   ```java
   @Test(dataProvider = "testData")
   public void testLogin(String username, String password) {
       // Test code here
   }
   ```

---

## Additional TestNG Questions

### What is TestNG, and how is it different from JUnit?
TestNG is a testing framework inspired by JUnit, offering additional features like parallel test execution, flexible test grouping, and better reporting.

---

### How do you annotate a method as a TestNG test method?
Use the `@Test` annotation:
```java
@Test
public void myTestMethod() {
    // Test code here
}
```

---

### What is the purpose of the `@BeforeTest` and `@AfterTest` annotations?
- `@BeforeTest`: Runs setup code before any test method in the test class.  
- `@AfterTest`: Runs cleanup code after all test methods in the class.

---

### How do you perform parameterized testing in TestNG?
Use the `@DataProvider` annotation:
```java
@DataProvider(name = "myData")
public Object[][] testData() {
    return new Object[][] { { 1, 2 }, { 3, 4 } };
}

@Test(dataProvider = "myData")
public void myTestMethod(int a, int b) {
    // Test code here using a and b
}
```

---

### How to enable parallel test execution in TestNG?
Use the `parallel` attribute in the `<suite>` tag of your `testng.xml` file.

---

### What is the purpose of the `dependsOnMethods` attribute in the `@Test` annotation?
It specifies that a test method depends on the successful execution of one or more other test methods.

---

### How can you prioritize test methods in TestNG?
Use the `priority` attribute in the `@Test` annotation. Lower values execute first.

---

### What is the purpose of the `@Parameters` annotation?
`@Parameters` specifies parameters for a test method, defined in the `testng.xml` file.

---

### How do you perform group testing in TestNG?
Use the `groups` attribute in the `@Test` annotation and include/exclude groups in the `testng.xml` file.

---

### How can you configure TestNG to run tests in a specific order?
Use the `preserveOrder` attribute in the `<suite>` tag of your `testng.xml` file.

---

### What is Soft Assert in TestNG? Provide an example.
Soft Assert allows test execution to continue even after an assertion fails:
```java
SoftAssert softAssert = new SoftAssert();
softAssert.assertEquals(actual, expected);
// Continue with test steps
softAssert.assertAll(); // Reports all failures at the end
```

---

### How can you skip a test method in TestNG?
Use `@Test(enabled = false)` to skip a test method.

---

### How to run automation suites with groups?
```xml
<suite name="API Automation Smoke Suite">
    <test name="Automation Test Cases">
        <groups>
            <run>
                <exclude name="brokenTests" />
                <include name="SmokeSuite" />
            </run>
        </groups>
    </test>
</suite>
```

---

### How to use `@Parameters` in TestNG?
```java
@Parameters({ "first-name" })
@Test
public void testSingleString(String firstName) {
    System.out.println("Invoked testString " + firstName);
    assert "Cedric".equals(firstName);
}
```
# Scenario-Based Real-Time Questions in TestNG  

### Question: Explain how you can achieve parallel test execution in TestNG, and what are the key attributes for parallel configuration?  
**Answer:** Parallel execution in TestNG can be achieved using the `parallel` attribute at the suite, test, or method level. Key attributes include `methods`, `tests`, `instances`, and `classes`.  

### Question: How can you implement data-driven testing in TestNG, and what annotations or attributes are involved?  
**Answer:** Data-driven testing is achieved using the `@DataProvider` annotation and associating it with the `dataProvider` attribute in the `@Test` annotation.  

### Question: Describe how you handle test dependencies in TestNG, and what annotations are used for this purpose.  
**Answer:** TestNG allows dependency management using the `dependsOnMethods` and `dependsOnGroups` attributes within the `@Test` annotation.  

### Question: How do you group tests in TestNG, and what mechanisms are available to control the execution of specific groups?  
**Answer:** Tests can be grouped using the `@Test(groups = "group_name")` annotation. Execution control involves including or excluding specific groups in the XML suite file.  

### Question: Explain the role of listeners in TestNG, and how you can generate detailed test reports using listeners.  
**Answer:** Listeners like `IInvokedMethodListener` and `ITestListener` allow you to customize test behavior and generate detailed reports. Utilize tools like Extent Reports for enhanced reporting.  

### Question: How can you parameterize your tests in TestNG, and what is the significance of the `@Parameters` annotation?  
**Answer:** Test parameterization is achieved using the `@Parameters` annotation in conjunction with the `parameter` attribute in the `@Test` annotation.  

### Question: What is a TestNG suite, and how can you configure and run multiple test classes using XML configuration?  
**Answer:** A TestNG suite is a collection of test classes. Configuration is done using the XML suite file where you define test classes, groups, and parameters.  

### Question: How can you handle expected exceptions in TestNG, and what annotations are involved?  
**Answer:** Use the `@Test(expectedExceptions = Exception.class)` annotation to handle expected exceptions during test execution.  

### Question: Explain the concept of soft assertions in TestNG and how they differ from traditional assertions.  
**Answer:** Soft assertions, provided by the `SoftAssert` class, allow the execution of subsequent test steps even if an assertion fails, providing a comprehensive test report.  

### Question: Discuss how you integrate TestNG with Selenium for automated testing, and what are the benefits of this integration.  
**Answer:** TestNG and Selenium integration involves creating test scripts using TestNG annotations, allowing better test organization, parallel execution, and reporting.  