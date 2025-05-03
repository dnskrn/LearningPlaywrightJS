# TestNG Fundamentals  

## What is TestNG?  
- A powerful and flexible open-source testing framework for Java.  
- Inspired by JUnit and NUnit but introduces new functionalities.  
- Supports annotation-based test configuration, parallel execution, data-driven testing, and more.  

---

## Key Annotations (Execution Flow):  
- **@BeforeSuite**: Runs once before all tests in the suite.  
- **@BeforeTest**: Runs once before any test method belonging to the classes inside the `<test>` tag.  
- **@BeforeClass**: Runs once before the first test method in the current class is invoked.  
- **@BeforeMethod**: Runs before each test method.  
- **@Test**: Marks a method as a test method.  
- **@AfterMethod**: Runs after each test method.  
- **@AfterClass**: Runs once after all the test methods in the current class have run.  
- **@AfterTest**: Runs once after all the test methods belonging to the classes inside the `<test>` tag have run.  
- **@AfterSuite**: Runs once after all tests in the suite have run.  

---

## Key Annotations (Configuration & Grouping):  
- **@Parameters({"param1", "param2"})**: Used to pass parameters to test methods from the `testng.xml` file.  
- **@DataProvider(name = "myData")**: Used to provide data for data-driven testing.  
- **@Factory**: Used to dynamically create test classes and methods.  
- **@Listeners({CustomListener.class})**: Used to register custom listeners for test events.  
- **@Test(groups = {"smoke", "regression"})**: Assigns test methods to one or more groups.  
- **@Test(dependsOnMethods = {"testMethod1", "testMethod2"})**: Specifies dependencies between test methods.  
- **@Test(dependsOnGroups = {"smoke"})**: Specifies dependencies on test groups.  
- **@Test(enabled = false)**: Skips the test method.  
- **@Test(priority = 1)**: Controls the order of execution of test methods within a class (lower number has higher priority).  
- **@Test(timeOut = 1000)**: Sets a timeout for the test method (in milliseconds).  

---

## `testng.xml`: Configuration File  
- **`<suite>`**: Root element, defines a test suite.  
    - **name**: Name of the test suite.  
    - **parallel**: Specifies parallel execution mode (methods, classes, tests, instances).  
    - **thread-count**: Number of threads to use for parallel execution.  
- **`<test>`**: Represents a set of test classes to be executed.  
    - **name**: Name of the test.  
    - **`<parameter>`**: Defines parameters that can be accessed using `@Parameters` annotation.  
    - **`<classes>`**: Contains a list of `<class>` elements.  
        - **`<class>`**: Specifies a test class to be included in the test.  
            - **name**: Fully qualified name of the test class.  
            - **`<methods>`**: Allows including or excluding specific test methods within the class.  
                - `<include name="testMethodName"/>`  
                - `<exclude name="anotherTestMethod"/>`  
    - **`<groups>`**: Defines and includes/excludes test groups.  
        - **`<define>`**: Defines a group that can include other groups.  
            - `<include name="group1"/>`  
            - `<include name="group2"/>`  
        - **`<run>`**: Specifies which groups to include or exclude.  
            - `<include name="smoke"/>`  
            - `<exclude name="integration"/>`  
- **`<listeners>`**: Registers custom listeners.  
    - `<listener class-name="com.example.CustomListener"/>`  

---

## Running Tests  
- From IDE (e.g., IntelliJ, Eclipse with TestNG plugin).  
- Using Maven Surefire Plugin in `pom.xml`.  
- Using Gradle Test task in `build.gradle`.  
- From command line using the TestNG JAR.  

---

## Key Features  
- **Annotations**: Easy configuration of test methods and lifecycle methods.  
- **Parallel Execution**: Run tests in parallel to reduce execution time.  
- **Data-Driven Testing**: Run the same test method with different sets of data.  
- **Test Grouping**: Organize and run tests based on functional areas or execution types (e.g., smoke, regression).  
- **Test Dependencies**: Control the order of test execution based on dependencies.  
- **Parameterization**: Pass parameters to test methods from XML or programmatically.  
- **Reporting**: Generates detailed test reports (HTML, XML).  
- **Listeners**: Extend TestNG's functionality by listening to test events.  
- **Flexible Test Configuration**: Configure test suites and tests using XML.  
- **Factory**: Dynamically create test classes.  

---

## Common Interview Questions  
- What is TestNG and why would you choose it over JUnit?  
- Explain the different TestNG annotations and their purpose.  
- What is the execution flow of TestNG annotations?  
- How do you run TestNG tests in parallel? What are the different parallel modes?  
- How do you pass parameters to TestNG tests? What are the different ways?  
- Explain data-driven testing in TestNG. How do you implement it?  
- What are TestNG groups? How are they useful?  
- How do you define dependencies between TestNG tests? What are the advantages?  
- What is the purpose of the `testng.xml` file? Explain its key elements.  
- How do you configure and run TestNG tests using Maven or Gradle?  
- What are TestNG listeners? How can you create and use custom listeners?  
- What is the purpose of the `@Factory` annotation in TestNG?  
- How do you skip a test method in TestNG?  
- How do you control the order of execution of test methods in TestNG?  
- How do you set a timeout for a TestNG test?  
- What kind of reports does TestNG generate? How can you customize reporting?  

---

## Remember to Mention  
- Your experience with specific TestNG features.  
- How TestNG integrates with your build tools (Maven, Gradle).  
- How you have used TestNG for different types of testing (unit, integration, end-to-end).  
- Any challenges you faced with TestNG and how you resolved them.  
- How you organize your tests using TestNG groups and suites.  