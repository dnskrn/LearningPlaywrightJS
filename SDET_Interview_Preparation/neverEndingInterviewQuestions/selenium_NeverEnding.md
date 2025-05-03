# Selenium, TestNG, and Other Automation Testing Questions

## General Questions
- **What are the challenges during automation testing?**
- **What strategies you followed while building?**

## Selenium Basics
- **What is Selenium?**
- **What are the Selenium suite components?**
- **Mention the advantages of using Selenium as an automation tool.**

## Automation Testing
- **What is test automation or automation testing?**
- **What are the advantages of automation testing?**

## Selenium Features and Limitations
- **What is Selenese? How is it classified?**
- **What are the limitations of Selenium testing?**
- **What is the difference between Selenium 2.0 and Selenium 3.0?**
- **What are the testing types supported by Selenium?**

## Selenium Annotations and Locators
- **What are the different types of annotations which are used in Selenium?**
- **What is the same-origin policy and how is it handled?**
- **Mention the types of web locators.**

## Selenium Waits and Commands
- **What are the types of waits supported by WebDriver?**
- **Mention the types of navigation commands.**
- **What is the major difference between `driver.close()` and `driver.quit()`?**

## Selenium Advantages
- **What makes Selenium such a widely used testing tool? Give reasons.**
- **Why is it advised to select Selenium as a testing tool for web applications or systems?**

## Selenium WebDriver
- **What is Selenium WebDriver?**
- **Is Selenium WebDriver a library?**
- **Which browsers/drivers are supported by Selenium WebDriver?**
- **Explain Selenium 4 and why it is different from other Selenium versions.**

## Selenium Commands
- **What will happen if I execute this command? `driver.get`**
- **What is an alternative option to `driver.get()` method to open a URL in Selenium WebDriver?**
- **Is it possible to test APIs or web services using Selenium WebDriver?**

## Locating Elements
- **Mention different ways of locating an element in Selenium.**
- **How can we move to the nth-child element using XPath?**

## Interacting with Web Elements
- **How can we type text in a textbox using Selenium?**
- **How to type text in an input box using Selenium?**
- **How to click on a hyperlink in Selenium?**
- **How to scroll down a page using JavaScript?**
- **How to assert the title of a webpage?**
- **How to mouse hover over a web element?**
- **How to retrieve CSS properties of an element?**

## Frameworks and Models
- **What is POM (Page Object Model)?**
- **What are the data-driven framework and keyword-driven framework?**

## Handling Special Scenarios
- **Can CAPTCHA be automated?**
- **How does Selenium handle Windows-based pop-ups?**
- **How to take screenshots in WebDriver?**

## Selenium vs Other Tools
- **Why do testers choose Selenium over QTP?**

## Selenium Maven and Object Repository
- **What is a Selenium Maven project?**
- **What is an object repository?**

## WebElement in Selenium
- **What is exactly meant by a WebElement in Selenium, and how is it used?**
- **Is there a way to type in a textbox without using `sendKeys()`?**

## Dropdowns and File Uploads
- **How to select a value from a dropdown in Selenium WebDriver?**
- **How to upload a file in Selenium WebDriver?**

## Browser Window and Navigation
- **How to set browser window size in Selenium?**
- **When do we use `findElement()` and `findElements()`?**

## Authentication and Pop-ups
- **How to login to any site if it is showing an authentication pop-up for username and password?**

## XPath
- **What is the difference between single and double slash in XPath?**
- **What do you mean by XPath?**
- **Explain XPath absolute and XPath attributes.**
- **What is the difference between `/` and `//` in XPath?**

## Mobile Testing
- **What are the WebDriver-supported mobile testing drivers?**

## Commands and Methods
- **What is the difference between type keys and type commands?**
- **What does the `switchTo()` command do?**

## Waits and Exceptions
- **What is the main disadvantage of implicit wait?**
- **What is a pause on an exception in Selenium IDE?**

## Browser Launching
- **How can we launch different browsers in Selenium WebDriver?**
- **Write a code snippet to launch Firefox browser in WebDriver.**
- **Write a code snippet to launch Chrome browser in WebDriver.**
- **Write a code snippet to launch Internet Explorer browser in WebDriver.**

## Drag and Drop
- **How do you perform drag and drop operations in WebDriver?**

## Refreshing Pages
- **What are the different methods to refresh a web page in WebDriver?**

## Application Invocation
- **How to invoke an application in WebDriver?**

## Automation Testing Benefits
- **What are the benefits of automation testing?**

## Proxy and Browsing
- **How can you redirect browsing from a browser through some proxy?**

## Miscellaneous
- **Is there an HTMLUnitDriver for .NET?**
- **How do you find broken links in Selenium WebDriver?**
- **List out some of the automation tools which could be integrated with Selenium to achieve continuous testing.**
- **What do you mean by the assertion in Selenium?**
- **Explain the difference between assert and verify commands.**

### Documentation Comments for Selenium and Related Topics

#### Pause Feature in Selenium IDE
The Pause feature in Selenium IDE allows testers to temporarily halt the execution of a test case. This is useful for debugging purposes or when waiting for a specific condition to be met before proceeding with the next step.

#### Handling Frames in WebDriver
To handle frames in Selenium WebDriver, you can use the `switchTo().frame()` method. This allows you to switch the WebDriver's context to a specific frame by its index, name, or WebElement.

#### Types of Listeners in TestNG
TestNG provides several types of listeners, such as:
- `ITestListener`: For listening to test lifecycle events.
- `ISuiteListener`: For listening to suite-level events.
- `IReporter`: For customizing reports.
- `IAnnotationTransformer`: For modifying annotations at runtime.

#### Frameworks and Selenium with Robot Framework
- **Types of Frameworks**: Data-driven, Keyword-driven, Hybrid, and Behavior-driven frameworks.
- **Selenium with Robot Framework**: Robot Framework integrates with Selenium using the SeleniumLibrary, enabling keyword-driven testing for web applications.

#### Basic Steps of Selenium Testing
1. Set up the WebDriver.
2. Navigate to the target URL.
3. Locate web elements using locators.
4. Perform actions on the elements.
5. Validate the results.
6. Close the browser.
- **Widely Used Commands**: `click()`, `sendKeys()`, `getText()`, `findElement()`.

#### Jenkins and Selenium Integration
Jenkins is a CI/CD tool that automates the execution of Selenium tests. Advantages include:
- Continuous integration and testing.
- Easy scheduling of test runs.
- Integration with version control systems.

#### Handling Dynamic Web Elements
Methods include:
- Using dynamic XPath or CSS selectors.
- Waiting strategies like `WebDriverWait` with `ExpectedConditions`.

#### Dealing with Stale Element Exceptions
To handle stale element exceptions:
- Re-locate the element before interacting with it.
- Use `try-catch` blocks to retry the operation.

#### Simulating Browser Back Button
Use the `navigate().back()` method in WebDriver to simulate a browser back button click.

#### Handling Alerts in Selenium
Use the `switchTo().alert()` method to handle alerts. Methods like `accept()`, `dismiss()`, `getText()`, and `sendKeys()` can be used to interact with alerts.

#### Locating Elements Using CSS Selectors
The syntax for locating elements using CSS selectors is:



# Selenium and Java Interview Questions  

## Frameworks and Selenium RC  
- **What is a framework?**  
    A framework is a structured environment designed to simplify and standardize the development and execution of test scripts.  

- **Frameworks available in Selenium RC:**  
    - Data-Driven Framework  
    - Keyword-Driven Framework  
    - Hybrid Framework  

- **Advantages of Selenium RC:**  
    - Supports multiple programming languages.  
    - Can handle dynamic web elements.  
    - Allows integration with other tools.  

## Selenium WebDriver vs RC  
- **Main difference:**  
    Selenium WebDriver directly communicates with the browser, while Selenium RC requires a server to act as a middleman.  

## Handling Alerts and Web Elements  
- **Retrieve message in an alert box:**  
    Use `driver.switchTo().alert().getText()`.  

- **Verify position of a web element:**  
    Use `getLocation()` or `getRect()` methods.  

## Handling Multiple Windows  
- **Switching between windows:**  
    Use `getWindowHandles()` and `switchTo().window(windowHandle)`.  

## Regular Expressions in Selenium  
- **Definition:**  
    Regular expressions are patterns used to match character combinations in strings.  

- **Usage in Selenium:**  
    Used for dynamic locators or validating text patterns.  

## Custom Locators  
- **Testing custom locators:**  
    Use `findElement()` with the custom locator and validate its functionality.  

## Selenese  
- **Definition:**  
    Selenese is the set of commands used in Selenium IDE.  

- **Types of Selenese:**  
    - Actions  
    - Accessors  
    - Assertions  

## Test Reports  
- **Creating HTML test reports:**  
    Use TestNG or third-party libraries like ExtentReports.  

- **Customized HTML reports in TestNG:**  
    Implement `ITestListener` or use ExtentReports.  

## Iterating Through Options  
- **Iterate through dropdown options:**  
    Use `Select` class and `getOptions()` method.  

## Recovery Scenarios  
- **Using recovery scenarios:**  
    Implement exception handling or use tools like QTP for recovery scenarios.  

## Debugging and Logging  
- **Display variable values in logs:**  
    Use `System.out.println()` or logging frameworks like Log4j.  

## Frames and Windows  
- **Switching back from a frame:**  
    Use `driver.switchTo().defaultContent()`.  

- **Difference between `getWindowHandles()` and `getWindowHandle()`:**  
    - `getWindowHandles()` returns all window handles.  
    - `getWindowHandle()` returns the current window handle.  

## Selenium WebDriver Performance  
- **Fastest WebDriver implementation:**  
    ChromeDriver is generally the fastest.  

## File Uploads and Actions  
- **Uploading a file:**  
    Use `sendKeys()` with the file path.  

- **Performing double click:**  
    Use `Actions` class and `doubleClick()` method.  

## Handling Exceptions  
- **Common exceptions in Selenium WebDriver:**  
    - NoSuchElementException  
    - TimeoutException  
    - StaleElementReferenceException  
    - ElementNotInteractableException  
    - WebDriverException  

## Frames and Text Boxes  
- **Switching between frames:**  
    Use `switchTo().frame()`.  

- **Storing text box value:**  
    Use `getAttribute("value")`.  

## Handling Colors and Broken Images  
- **Handling colors:**  
    Use `getCssValue("color")`.  

- **Finding broken images:**  
    Validate image response using HTTP requests.  

## Browser Capabilities  
- **Limitations of unsupported browsers:**  
    Limited functionality and lack of WebDriver support.  

- **Capabilities of Selenium WebDriver:**  
    - Cross-browser testing  
    - Handling dynamic web elements  
    - Integration with CI/CD tools  

## Assertions and Authentication  
- **Asserting text on a webpage:**  
    Use `assertEquals()` or `assertTrue()`.  

- **Handling authentication popups:**  
    Pass credentials in the URL: `http://username:password@url`.  

## Framework Types  
- **Data-Driven Framework:**  
    Focuses on separating test data from scripts.  

- **Keyword-Driven Framework:**  
    Uses keywords to represent actions.  

## QA Activities  
- **Day-to-day activities:**  
    - Writing and executing test cases  
    - Reporting bugs  
    - Maintaining test scripts  

- **Framework creation:**  
    Experience in creating or maintaining frameworks.  

## OOP Concepts in Frameworks  
- **OOP concepts:**  
    - Encapsulation: Hiding implementation details.  
    - Inheritance: Reusing code.  
    - Polymorphism: Overriding methods.  
    - Abstraction: Hiding complexity.  

## Java Concepts  
- **Static keyword:**  
    Used for class-level variables and methods.  

- **Calling static methods/variables:**  
    Use `ClassName.methodName()` or `ClassName.variableName`.  

- **Accessing static methods via object reference:**  
    Possible but not recommended.  

- **Calling non-static methods/variables:**  
    Use an object instance.  

- **Wrapper classes and data conversion:**  
    Use classes like `Integer`, `Double`, etc.  

- **Converting String to Integer:**  
    Use `Integer.parseInt()`.  

## Call by Value vs Call by Reference  
- **Call by Value:**  
    Passes a copy of the value.  

- **Call by Reference:**  
    Passes the reference to the memory location.  

## Java Exceptions  
- **Definition:**  
    Exceptions are runtime errors.  

- **Difference between `throw` and `throws`:**  
    - `throw`: Used to explicitly throw an exception.  
    - `throws`: Declares exceptions in method signature.  

## Selenium Locators and Waits  
- **Preferred locator:**  
    Use `By.id` or `By.cssSelector` for performance.  

- **Handling multiple windows:**  
    Use `switchTo().window()`.  

- **Implicit vs Explicit Wait:**  
    - Implicit: Waits for a fixed time.  
    - Explicit: Waits for a specific condition.  

## User-Defined Exceptions  
- **Definition:**  
    Custom exceptions created by extending `Exception` class.  

## TestNG Assertions  
- **Definition of assert in TestNG:**  
    Used to validate test conditions.  

- **Commonly used assertions:**  
    - `assertEquals()`  
    - `assertTrue()`  
    - `assertFalse()`  

# SDET Interview Preparation Questions

## TestNG
- **Order of TestNG Annotations**: Can you explain the order of TestNG annotations?
- **Priority in TestNG**: Have you heard about priority in TestNG? Can we set negative priority?
- **TestNG Overview**: Can you explain TestNG?
- **Running Single Method Multiple Times**: How to run a single method multiple times in TestNG?
- **BeforeMethod vs BeforeTest**: What is the difference between `@BeforeMethod` and `@BeforeTest` in TestNG?

## Cucumber
- **Required Files**: Do you work in Cucumber? Can you tell me what files are required in Cucumber?

## Git
- **Git in Projects**: Have you used Git in your project? Can you explain about it?
- **Daily Git Commands**: Can you give me some Git commands which you use on a daily basis?

## Java Basics
- **Static Main Method**: Why is the `main` method static?
- **Runtime Polymorphism**: What is runtime polymorphism?
- **List vs Set**: What is the difference between `List` and `Set`?
- **Method Overloading vs Overriding**: Can you explain method overloading and overriding?
- **Break vs Continue**: What is the difference between `break` and `continue` statements?
- **This vs Super**: What is the difference between `this` and `super`?
- **Length vs Length()**: What is the difference between `length` and `length()` in Java?

## Selenium
- **Assertions in Selenium**: What are the types of assertions in Selenium?
- **Action Class**: Have you used the Action class? Where is it used?
- **Dynamic XPath**: How do you handle if XPath is changing dynamically?
- **Locators**: How many kinds of locators are there? Why is `id` most preferred?
- **XPath vs CSS**: Which is better, XPath or CSS?
- **Typing Uppercase Values**: In a text box, how do you pass only uppercase values when the text is extracted from an external source (e.g., Excel) in lowercase, without using Java APIs, only Selenium?

## Frameworks
- **Custom Framework**: Explain the framework you designed from scratch.
- **Keyword-Driven Framework**: Have you worked in a keyword-driven framework?
- **Data-Driven Testing**: Explain the complete approach for data-driven testing implemented in your framework.

## Collections
- **ArrayList**: What is an `ArrayList`?
- **Arrays vs ArrayList**: What is the difference between arrays and `ArrayList`?
- **HashMap**: Explain `HashMap` in detail. Where do you use it?
- **HashMap vs HashSet**: What are `HashMap` and `HashSet`? Explain.
- **Thread Safety**: What does thread-safe mean?

## Selenium Advanced
- **Browser Windows**: How do you handle browser windows?
- **Dynamic Drop-Downs**: How do you handle dynamic drop-downs?
- **Dynamic WebTables**: What is the complete approach to handle dynamic web tables?

## Exception Handling
- **Checked vs Unchecked Exceptions**: What is the difference between checked and unchecked exceptions?
- **Throw vs Throws**: What is the difference between `throw` and `throws`?
- **Finally Block**: When does the `finally` block get executed?
- **Catch Block**: How many times can you write a `catch` block?

## APIs
- **Why APIs?**: Why are APIs important?
- **REST vs SOAP**: What is the difference between REST and SOAP? Which is better?
- **Advantages of REST**: What are the advantages of REST over SOAP?

## Miscellaneous
- **Rate Yourself in Java**: How would you rate yourself in Java?
- **Unstable Elements**: In a webpage, some elements execute fine a few times and fail a few times. What is the reason? How do you handle it?
- **Add to Cart Validation**: Write code from scratch for add-to-cart validations on the Amazon website.
- **Parallel Test Execution**: How do you run test cases in parallel in Selenium?


# Interview Questions for SDET Preparation  

## General Questions  
- WHY IN YOUR PROJECT, REST API IS USED?  
- EXPLAIN ABOUT MULTITHREADING IN JAVA.  
- HOW YOU HAVE HANDLED DATE AND TIME IN YOUR FRAMEWORK?  
- IN BANKING APPLICATION, WHEN MONEY TRANSACTIONS ARE MORE, DO YOU PREFER REST OR SOAP?  
- DO YOU HAVE ANY QUESTIONS TO ASK?  

## Agile and Scrum  
- EXPLAIN THE COMPLETE SCRUM PROCESS FOLLOWED IN YOUR PROJECT.  
- HOW ESTIMATIONS WERE GIVEN FOR A STORY?  

## Testing Scenarios and Examples  
- GIVE AN EXAMPLE OF LOW PRIORITY & LOW SEVERITY, LOW PRIORITY & HIGH SEVERITY (UNIQUE EXAMPLES).  
- THERE IS A DATE PICKER WITH START AND END DATES. DERIVE SCENARIOS FOR DISPLAY AND MODIFICATION ACROSS MULTIPLE PAGES.  
- WHAT EXACTLY IS SMOKE AND SANITY TESTING (WITH PROJECT EXAMPLES)?  
- IN WHAT CASES YOU PERFORMED SMOKE, REGRESSION, SANITY, RETESTING, AND END-TO-END TESTING?  

## Automation Framework and Techniques  
- HOW DO YOU HANDLE RADIO BUTTONS?  
- WHAT IS IMPLICIT WAIT? HAVE YOU IMPLEMENTED IT IN YOUR PROJECT? EXPLAIN WITH EXAMPLES.  
- HAVE YOU DESIGNED THE AUTOMATION FRAMEWORK FROM SCRATCH?  
- WHY DID YOU IMPLEMENT THE BY APPROACH IN YOUR PAGE CLASSES AND NOT PAGE FACTORY?  

## Data Structures and Tools  
- SET VS MAP?  
- HANDLING TEST DATA IN AUTOMATION.  
- GIT BRANCHING APPROACH IN DETAIL.  

## Day-to-Day Activities  
- EXPLAIN DAY-TO-DAY ACTIVITIES.  
- HANDLING MAIL WHILE WORKING IN AUTOMATION (WITH CODE EXAMPLES).  

## Proof of Concept (POC)  
- POC APPROACH IN DETAIL.  
- EXPLAIN HOW YOU CARRIED OUT A POC.  

## Regression and Metrics  
- HOW REGRESSION SUITES ARE HANDLED IN YOUR AUTOMATION PROJECT?  
- HOW DO YOU PROVE THAT AUTOMATION IS WORTHY?  
- HOW TO PROVE AUTOMATION IS PROFITABLE AND HELPFUL (METRICS USED)?  

## Challenges and Domain-Specific Questions  
- CHALLENGES FACED IN HEALTHCARE COMPARED TO OTHER DOMAINS?  
- CHALLENGES IN BOTH MANUAL AND AUTOMATION TESTING.  
- CHALLENGES W.R.T TEAM, CLIENT, AND OTHER PROCESSES.  

## Tools and Technologies  
- WHAT ARE THE OTHER TOOLS AVAILABLE IN THE MARKET FOR AUTOMATION TESTING OTHER THAN SELENIUM WEBDRIVER?  
- WHAT ARE THE OTHER TOOLS OR LIBRARIES YOU WORKED WITH OTHER THAN WEBDRIVER?  
- WHY MAVEN WAS USED IN YOUR PROJECT?  

## Career and Future Plans  
- WHY DID YOU CHOOSE YOUR CAREER IN SOFTWARE TESTING?  
- DOWN THE LINE, IN 5 YEARS WHERE WOULD YOU LIKE TO BE? WHAT ARE YOUR PLANS?  
- HOW DO YOU UPDATE YOURSELF LEARNING NEW TECHNOLOGIES? HOW DO YOU PLAN?  
- WHAT ARE THE OTHER TOOLS YOU WOULD LIKE TO LEARN? HOW ARE YOU PLANNING?  

## Defect Management and Artifacts  
- DEFECT MANAGEMENT TOOLS USED IN YOUR CAREER.  
- ARTIFACTS USED IN TESTING.  
- WHAT ARE THE ARTIFACTS USED FOR AUTOMATION?  

## Company-Specific Questions  
- WHAT DO YOU KNOW ABOUT OUR COMPANY?  
- WHY DO YOU WANT TO JOIN OUR COMPANY?  
- HOW SOON CAN YOU JOIN OUR ORGANIZATION IF EVERYTHING GOES WELL?  

## Sprint and Testing Types  
- EXPLAIN THE SPRINT PROCESS YOU WORKED IN DETAIL.  
- EXPLAIN ALL KINDS OF TESTING YOU CARRIED OUT IN YOUR CAREER IN BRIEF.  

## Code and Collaboration  
- CODE FOR REPORTS IMPLEMENTED IN YOUR PROJECT.  
- HANDLING CODE CONFLICTS WHEN TEAM MEMBERS WRITE SIMILAR METHODS.  

## Roles and Responsibilities  
- EXPLAIN ROLES AND RESPONSIBILITIES IN YOUR CURRENT PROJECT.  


# Interview Questions and Topics for Discussion  

## General Questions  
- Explain day-to-day activities in your project.  
- Why have you resigned from the present company?  
- What is the biggest challenge in automation you have faced till now?  
- Explain a few integration test scenarios for an elevator.  
- Do you currently have any offers?  
- Explain the projects and technologies you have worked on in the last 2.5 years.  
- How is test automation important for any project?  
- How do you handle situations when there are no requirements for a project?  
- What are the tech stacks used in your current project?  
- How soon can you join us?  

## Testing and Frameworks  
- Explain the kinds of testing you have carried out in your current project.  
- Explain the complete Scrum process implemented in your project.  
- How many years have you worked in functional testing?  
- Explain your automation framework.  
- Have you worked in JIRA?  
- How many years have you worked in Selenium with Java?  

## ExtentReports and Reporting  
- How do you set system (OS) properties in ExtentReports?  
- How do you set the date and time for every test script executed in ExtentReports?  
- How do you set test scripts as failed, passed, or skipped in ExtentReports?  
- What is the difference between fail and skip in ExtentReports?  
- Will skipped test scripts get executed?  
- Will skipped test scripts allow other test scripts to run?  

## Excel and Data Validation  
- How do you compare dropdown values from UI with expected values in an Excel sheet and get the result as pass or fail?  
- How do you display duplicate dropdown values and represent them as a bug using your framework?  

## Dynamic Test Scripts  
- How do you approach dynamic test scripts when the number of test cases varies for every build?  

## Bug Handling  
- How do you handle a bug found on the last day of a sprint?  
- How do you handle a developer who doesn't agree that an issue is a bug, even if you have proof?  

## Company and Career  
- What do you know about our company?  
- Why should we hire you?  
- Explain the reasons for leaving all previous companies you have worked for.  
- Why are there gaps in your professional career and education?  
- How committed are you?  

## Backend and Security Testing  
- Have you worked on SQL injection?  
- What backend-related testing have you worked on?  
- Did you work on API testing?  
- Have you worked on executing queries in SQL?  
- Have you worked on security testing in any of your projects?  

## Automation and Selenium  
- How do you start automating when 100 test cases are given to you?  
- What have you tested in production?  
- How do you validate or test a bug found in production?  
- How do you prove to a client that an issue is not a bug?  
- How do you find broken links in Selenium WebDriver?  
- What is the same-origin policy, and how is it handled?  
- What is the major difference between `driver.close()` and `driver.quit()`?  
- How do you scroll down a page using JavaScript?  
- How do you mouse hover over a web element?  
- What is POM (Page Object Model)?  
- How does Selenium handle Windows-based pop-ups?  
- How do you take screenshots in WebDriver?  
- Is there a way to type in a textbox without using `sendKeys()`?  
- How do you upload a file in Selenium WebDriver?  
- When do you use `findElement()` and `findElements()`?  
- How do you perform drag-and-drop operations in WebDriver?  
- How do you deal with stale element exceptions in Selenium?  

