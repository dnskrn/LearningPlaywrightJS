# TestNG Interview Questions and Answers

## General Questions
### 1. What is the TestNG Framework?
TestNG is a testing framework inspired by JUnit and NUnit, designed to simplify a broad range of testing needs, from unit testing to integration testing.

### 2. How do you run the TestNG script?
You can run TestNG scripts using:
- TestNG XML file.
- IDE (e.g., Eclipse, IntelliJ IDEA) by right-clicking the test class and selecting "Run as TestNG Test".
- Command line using `java -cp` with the TestNG JAR.

### 3. What are the advantages of TestNG?
- Supports annotations for better test structure.
- Parallel execution of tests.
- Flexible test configuration using XML.
- Built-in reporting.

### 4. What is the difference between a TestNG test and a TestNG test suite?
- **TestNG Test**: A single test method or class annotated with `@Test`.
- **TestNG Test Suite**: A collection of test classes defined in an XML file.

### 5. What are some advantages of TestNG over JUnit?
- Supports parallel execution.
- Flexible test configuration using XML.
- Built-in support for data-driven testing with `@DataProvider`.

### 6. Why do we need TestNG in Selenium?
TestNG provides better test management, reporting, and parallel execution capabilities, which are essential for Selenium automation.

---

## TestNG XML and Configuration
### 7. What are the basic steps required in writing the TestNG test?
1. Create a test class.
2. Annotate methods with `@Test`.
3. Create a TestNG XML file to configure the test.
4. Execute the test using the XML file or IDE.

### 8. What is the difference between Suite, Test, and Class?
- **Suite**: A collection of tests.
- **Test**: A collection of classes.
- **Class**: A collection of test methods.

### 9. How will you execute methods or test cases in TestNG in a different order/your order?
Use the `priority` attribute in the `@Test` annotation.

```java
@Test(priority = 1)
public void testA() {}

@Test(priority = 2)
public void testB() {}
```

### 10. Define the correct order of tags in the TestNG XML file.
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

### 11. Why do we create the XML file in TestNG?
To configure and organize test execution, including grouping, dependencies, and parallel execution.

### 12. Write the code snippet for passing values 1 and 2 to the parameters `val1` and `val2` through the XML file.
```xml
<test name="Parameter Test">
    <parameter name="val1" value="1" />
    <parameter name="val2" value="2" />
    <classes>
        <class name="com.example.TestClass" />
    </classes>
</test>
```

---

## Advanced Topics
### 13. Can we use regular expressions in TestNG groups? Write a demo XML file for the same.
Yes, regular expressions can be used in groups.

```xml
<groups>
    <run>
        <include name=".*Smoke.*" />
    </run>
</groups>
```

### 14. What is the use of the `preserve-order` attribute in the TestNG XML file?
It ensures that the tests are executed in the order they are defined in the XML file.

### 15. How to integrate TestNG XML with Maven?
Add the following in the `pom.xml`:
```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>3.0.0</version>
            <configuration>
                <suiteXmlFiles>
                    <suiteXmlFile>testng.xml</suiteXmlFile>
                </suiteXmlFiles>
            </configuration>
        </plugin>
    </plugins>
</build>
```

---

## Annotations and Attributes
### 16. What are the types of annotations used in TestNG (in the sequence of execution/hierarchy)?
1. `@BeforeSuite`
2. `@BeforeTest`
3. `@BeforeClass`
4. `@BeforeMethod`
5. `@Test`
6. `@AfterMethod`
7. `@AfterClass`
8. `@AfterTest`
9. `@AfterSuite`

### 17. What is `@Factory` annotation in TestNG?
It is used to create instances of test classes dynamically.

### 18. What is the difference between `@Factory` and `@DataProvider` annotations?
- `@Factory`: Used to create test class instances.
- `@DataProvider`: Used to provide data to test methods.

### 19. What is the use of `@Listener` annotation in TestNG?
It is used to define custom listeners for logging, reporting, or other purposes.

---

## Reporting and Groups
### 20. What are the types of reports generated in TestNG by default?
- **Index Report**: `index.html`
- **Emailable Report**: `emailable-report.html`

### 21. How to use TestNG Reporter class for log generation?
```java
import org.testng.Reporter;

@Test
public void testMethod() {
        Reporter.log("This is a log message", true);
}
```

### 22. What is the importance of groups in TestNG?
Groups allow logical grouping of test methods for selective execution.

### 23. How do you exclude a group from the test execution cycle?
Use the `<exclude>` tag in the XML file:
```xml
<groups>
    <run>
        <exclude name="Regression" />
    </run>
</groups>
```

---
# TestNG Interview Questions and Solutions

## 1. How to Create a Group of Groups in TestNG?
To create a group of groups in TestNG, you can define groups in your `testng.xml` file. For example:
```xml
<groups>
    <define name="groupOfGroups">
        <include name="group1"/>
        <include name="group2"/>
    </define>
</groups>
```

## 2. How to Group Multiple Test Methods in a Single Group Using TestNG?
You can use the `groups` attribute in the `@Test` annotation:
```java
@Test(groups = {"group1"})
public void testMethod1() {
        // Test logic
}
```

## 3. How Do Group Multiple Test Methods in Multiple Groups?
You can assign multiple groups to a test method:
```java
@Test(groups = {"group1", "group2"})
public void testMethod() {
        // Test logic
}
```

## 4. How to Group Multiple Test Methods with Priority?
You can combine `groups` and `priority` attributes:
```java
@Test(groups = {"group1"}, priority = 1)
public void testMethod1() {
        // Test logic
}
```

## 5. What Are Inclusion & Exclusion Groups in TestNG?
Inclusion and exclusion groups allow you to specify which groups to include or exclude in the `testng.xml` file:
```xml
<groups>
    <run>
        <include name="group1"/>
        <exclude name="group2"/>
    </run>
</groups>
```

## 6. When Do We Use "dependsOnGroups" in TestNG?
The `dependsOnGroups` attribute is used when a test method depends on the execution of a group:
```java
@Test(dependsOnGroups = {"group1"})
public void dependentTest() {
        // Test logic
}
```

## 7. What Do You Understand by Asserting in TestNG?
Assertions in TestNG are used to validate test results. They ensure that the actual output matches the expected output.

## 8. Describe Any Five Common TestNG Assertions
1. `Assert.assertEquals(actual, expected)`
2. `Assert.assertTrue(condition)`
3. `Assert.assertFalse(condition)`
4. `Assert.assertNotNull(object)`
5. `Assert.assertNull(object)`

## 9. What Are the Different Types of Assert in TestNG?
- **Hard Assert**: Stops execution immediately if the assertion fails.
- **Soft Assert**: Collects all assertion failures and reports them at the end.

## 10. Define Soft Assert in TestNG and Describe How They Are Different from Hard Assert
Soft Assert allows the test to continue execution even if an assertion fails. Example:
```java
SoftAssert softAssert = new SoftAssert();
softAssert.assertEquals(actual, expected);
softAssert.assertAll(); // Reports all failures
```

## 11. What Is Meant by Dependency in TestNG?
Dependency in TestNG means that a test method depends on another method or group for execution.

## 12. How Do You Create Dependencies in TestNG?
Use the `dependsOnMethods` or `dependsOnGroups` attribute:
```java
@Test(dependsOnMethods = {"methodName"})
public void dependentTest() {
        // Test logic
}
```

## 13. How Do You Create Dependency Through the XML File?
Dependencies can be defined in the `testng.xml` file using `<depends-on>`:
```xml
<test name="Test1">
    <classes>
        <class name="TestClass">
            <methods>
                <include name="testMethod1"/>
                <include name="testMethod2" depends-on="testMethod1"/>
            </methods>
        </class>
    </classes>
</test>
```

## 14. How TestNG Allows to Declare Dependencies?
Dependencies can be declared using `dependsOnMethods` or `dependsOnGroups` attributes in the `@Test` annotation.

## 15. How Many Types of Dependencies Can You Achieve by Using TestNG?
1. Method-level dependency
2. Group-level dependency

## 16. What Are the Priorities in TestNG?
Priorities determine the order of test execution. Lower priority values are executed first.

## 17. How to Set Priorities in TestNG?
Use the `priority` attribute in the `@Test` annotation:
```java
@Test(priority = 1)
public void testMethod() {
        // Test logic
}
```

## 18. What Is Parameterization in TestNG?
Parameterization allows passing parameters to test methods using the `@Parameters` or `@DataProvider` annotations.

## 19. What Are the Optional Parameters in TestNG?
Optional parameters are defined with a default value in case no value is provided:
```java
@Parameters({"param"})
@Test
public void testMethod(@Optional("defaultValue") String param) {
        // Test logic
}
```

## 20. What Is the Significance of "timeout" in TestNG?
The `timeout` attribute specifies the maximum time a test method can take to execute:
```java
@Test(timeOut = 1000)
public void testMethod() {
        // Test logic
}
```

## 21. What Is Meant by invocationCount in TestNG?
The `invocationCount` attribute specifies how many times a test method should be executed:
```java
@Test(invocationCount = 5)
public void testMethod() {
        // Test logic
}
```

## 22. What Is Meant by Parallel Test Execution in TestNG?
Parallel test execution allows running multiple tests simultaneously to reduce execution time.

## 23. On What Levels Can We Apply Parallel Testing in TestNG?
Parallel testing can be applied at:
1. Suite level
2. Test level
3. Class level
4. Method level

## 24. How Is Exception Handling Done in TestNG?
Exception handling is done using the `expectedExceptions` attribute:
```java
@Test(expectedExceptions = {ArithmeticException.class})
public void testMethod() {
        int result = 1 / 0;
}
```

## 25. Can We Disable a Test in TestNG? If So, Explain How?
Yes, by setting the `enabled` attribute to `false`:
```java
@Test(enabled = false)
public void testMethod() {
        // Test logic
}
```

## 26. Why Is the Reporter Class Used in TestNG?
The `Reporter` class is used to log messages in the TestNG report.

## 27. Define the Syntax for Generating Logs Through the Reporter Class in TestNG
```java
Reporter.log("Log message", true);
```

## 28. What Are Listeners in TestNG?
Listeners are interfaces that allow customizing the behavior of TestNG during execution.

## 29. How to Declare Listeners in TestNG?
Listeners can be declared in the `testng.xml` file or using the `@Listeners` annotation:
```java
@Listeners(MyListener.class)
public class TestClass {
        // Test methods
}
```

## 30. What Are the Different Listeners TestNG Provides?
1. `ITestListener`
2. `ISuiteListener`
3. `IAnnotationTransformer`
4. `IInvokedMethodListener`

## 31. How to Implement TestNG IAnnotationTransformer?
Implement the `IAnnotationTransformer` interface and override the `transform` method:
```java
public class MyTransformer implements IAnnotationTransformer {
        @Override
        public void transform(ITestAnnotation annotation, Class testClass, Constructor testConstructor, Method testMethod) {
                // Custom logic
        }
}
```

## 32. What Is the Default Value for the TestNG Priority?
The default priority value is `0`.

## 33. How to Achieve TestNG ITestListener Implementation?
Implement the `ITestListener` interface and override its methods:
```java
public class MyListener implements ITestListener {
        @Override
        public void onTestStart(ITestResult result) {
                // Custom logic
        }
}
```

## 34. What Is an Exception Test in TestNG?
An exception test verifies that a specific exception is thrown during test execution.

## 35. How Will You Install TestNG in Eclipse?
1. Open Eclipse.
2. Go to `Help > Eclipse Marketplace`.
3. Search for "TestNG".
4. Click `Install` and follow the instructions.

## 36. How to Throw a Skip Exception in TestNG?
Use the `SkipException` class:
```java
throw new SkipException("Skipping this test");
```

## 37. How to Ignore a Test Case in TestNG?
Set the `enabled` attribute to `false` in the `@Test` annotation.

## 38. What Is the Time Unit We Specify in Test Suites and Test Cases?
The time unit is milliseconds.

## 39. List Out Various Ways in Which TestNG Can Be Invoked?
1. From the command line
2. Using an IDE (e.g., Eclipse)
3. Through build tools like Maven or Gradle

## 40. How Can We Create a Data-Driven Framework Using TestNG?
Use the `@DataProvider` annotation to supply test data:
```java
@DataProvider(name = "dataProvider")
public Object[][] dataProviderMethod() {
        return new Object[][] {{"data1"}, {"data2"}};
}

@Test(dataProvider = "dataProvider")
public void testMethod(String data) {
        // Test logic
}
```

## 41. How to Exclude a Particular Test Method from a Test Case Execution?
Use the `<exclude>` tag in the `testng.xml` file:
```xml
<methods>
    <exclude name="testMethod"/>
</methods>
```

## 42. How to Skip a @Test Method from Execution in TestNG?
Throw a `SkipException` or set `enabled = false`.

## 43. How to Run TestNG Using Command Prompt?
1. Compile the test classes.
2. Run the `testng.xml` file using:
     ```bash
     java -cp "path_to_testng_jar;path_to_classes" org.testng.TestNG testng.xml
     ```

## 44. What Is the Use of @Test(threadPoolSize=x)?
It specifies the number of threads to use for parallel execution of a test method.

## 45. What Is the Use of @Test(invocationCount=x)?
It specifies how many times a test method should be executed.

## 46. What Is the Thread Count in TestNG?
The `thread-count` attribute in `testng.xml` specifies the number of threads for parallel execution.

## 47. What Is Verbose in TestNG?
The `verbose` attribute controls the level of logging in the TestNG output.

## 48. How Many Ways by Which Can We Pass Parameter Values to Test Methods?
1. Using `@Parameters`
2. Using `@DataProvider`

## 49. How Do You Use TestNG to Test RESTful Web Services?
Use libraries like RestAssured with TestNG to test RESTful APIs.

## 50. How Do You Use TestNG to Test Mobile Applications?
Use tools like Appium with TestNG for mobile application testing.

## 51. How to Implement Data Providers in TestNG?
Use the `@DataProvider` annotation to supply test data:
```java
@DataProvider(name = "dataProvider")
public Object[][] dataProviderMethod() {
        return new Object[][] {{"data1"}, {"data2"}};
}
```