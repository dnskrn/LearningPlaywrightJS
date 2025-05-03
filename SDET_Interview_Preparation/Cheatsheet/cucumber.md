# Cucumber Fundamentals  

## What is Cucumber?  
- A Behavior-Driven Development (BDD) framework.  
- Enables writing tests in a plain, human-readable format (Gherkin).  
- Supports collaboration between business stakeholders, testers, and developers.  

## Key Concepts  
- **Feature File**: A plain text file that describes a software feature.  
    - **Extension**: `.feature`  
- **Feature**: A high-level description of a software feature. Starts with the keyword `Feature:`.  
- **Scenario**: A specific business scenario within a feature. Starts with the keyword `Scenario:`.  
- **Scenario Outline**: A template for multiple scenarios with different data. Starts with `Scenario Outline:`.  
- **Examples**: A table providing data for the `Scenario Outline`. Starts with `Examples:`.  
- **Step**: A single action or condition within a scenario. Follows specific keywords:  
    - `Given`: Sets up the initial context.  
    - `When`: Describes an event or action.  
    - `Then`: Specifies the expected outcome.  
    - `And`: Combines multiple steps of the same type.  
    - `But`: Combines multiple steps of the same type (often for negative conditions).  
- **Step Definition**: A code implementation (usually in Java) that corresponds to a Gherkin step.  
- **Glue Code**: The mechanism that connects Gherkin steps to their step definitions (usually specified by package names).  

## Gherkin Syntax Example (.feature file)  

```gherkin  
Feature: User Login  
    Scenario: Successful login with valid credentials  
        Given the user is on the login page  
        When the user enters username "standard_user"  
        And the user enters password "secret_sauce"  
        Then the user should be logged in  

    Scenario Outline: Login with invalid credentials  
        Given the user is on the login page  
        When the user enters username "<username>"  
        And the user enters password "<password>"  
        Then the login should fail with message "<error_message>"  

        Examples:  
            | username        | password        | error_message                                      |  
            | invalid_user    | secret_sauce    | Epic sadface: Username and password do not match any user in this service |  
            | standard_user   | wrong_password  | Epic sadface: Username and password do not match any user in this service |  
            |                 | secret_sauce    | Epic sadface: Username is required                |  
            | standard_user   |                 | Epic sadface: Password is required                |  
```  

## Data Table Example  

```gherkin
Feature: User Registration
    Scenario: Register a new user
        Given the following user details:
            | field       | value          |
            | first_name  | John           |
            | last_name   | Doe            |
            | email       | john.doe@test.com |
            | password    | password123    |
        When the user submits the registration form
        Then the user should be registered successfully
```

## Reading Data Table in Step Definition  

```java
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import java.util.Map;

public class RegistrationSteps {

    @Given("the following user details:")
    public void theFollowingUserDetails(DataTable dataTable) {
        Map<String, String> userDetails = dataTable.asMap(String.class, String.class);
        System.out.println("First Name: " + userDetails.get("first_name"));
        System.out.println("Last Name: " + userDetails.get("last_name"));
        System.out.println("Email: " + userDetails.get("email"));
        System.out.println("Password: " + userDetails.get("password"));
        // Code to handle user details
    }

    @When("the user submits the registration form")
    public void theUserSubmitsTheRegistrationForm() {
        // Code to submit the registration form
    }

    @Then("the user should be registered successfully")
    public void theUserShouldBeRegisteredSuccessfully() {
        // Code to verify successful registration
    }
}
```

## Running Cucumber Tests  
- Using a Test Runner class (with `@RunWith(Cucumber.class)` and `@CucumberOptions`).  
- Using Maven (with the `cucumber-maven-plugin`).  
- Using Gradle (with Cucumber JVM dependencies).  

## Cucumber Options (`@CucumberOptions` in Test Runner)  
- **features**: Path to the feature files.  
- **glue**: Package(s) containing the step definitions.  
- **tags**: Specify scenarios or features to run based on tags (e.g., `@smoke`, `@regression and not @wip`).  
- **plugin**: Specify reporting plugins (e.g., `pretty`, `html:target/cucumber-reports.html`, `json:target/cucumber.json`).  
- **monochrome**: Output console output in a more readable format.  
- **dryRun**: Check if all Gherkin steps have corresponding step definitions without executing the code.  
- **strict**: Fail the build if there are undefined or pending steps.  
- **snippets**: Specify the type of code snippets to generate (e.g., `SnippetType.CAMELCASE`).  

## Key Benefits of Cucumber  
- **Improved Collaboration**: Business stakeholders can understand and contribute to tests.  
- **Living Documentation**: Feature files serve as both test cases and documentation.  
- **Increased Test Coverage**: Encourages thinking about scenarios from a user perspective.  
- **Reduced Ambiguity**: Plain language makes requirements clearer.  
- **Easier Maintenance**: Business-focused tests are less likely to break due to technical changes.  

---  

## Common Interview Questions  

- What is Cucumber and what problem does it solve?  
- Explain the key components of Cucumber (Feature Files, Scenarios, Steps, Step Definitions).  
- What is Gherkin? What are the keywords used in Gherkin?  
- How do you link Gherkin steps to their corresponding code? (Step Definitions and Glue Code)  
- What is the purpose of the Feature file? How should it be structured?  
- What is the difference between Scenario and Scenario Outline? When would you use each?  
- What are Examples in Cucumber? How are they used with Scenario Outline?  
- How do you run Cucumber tests in a Java project? (Test Runner, Maven, Gradle)  
- Explain the different options available in `@CucumberOptions`.  
- What are Cucumber Tags? How are they used to filter and run specific scenarios?  
- What are Cucumber Hooks? How can you use `@Before` and `@After` hooks?  
- How can you pass data between Gherkin steps and step definitions? (Using parameters in steps and method arguments)  
- What is Data-Driven Testing in Cucumber? How is it implemented?  
- What are Cucumber Expressions and Regular Expressions used for in step definitions?  
- How do you generate reports in Cucumber? What are some common reporting plugins?  
- What is the purpose of Dry Run in Cucumber?  
- How does Cucumber facilitate collaboration between different teams?  

---  

### Remember to Mention  
- Your experience writing Feature Files and Step Definitions.  
- How you integrate Cucumber with other testing frameworks (e.g., JUnit, Selenium).  
- How you use Cucumber in your CI/CD pipeline.  
- Any challenges you faced using Cucumber and how you resolved them.  
- Your understanding of BDD principles.  