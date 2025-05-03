# REST API Testing and Automation Guide

## 1. Commonly Used HTTP Methods in REST API Testing
- **GET**: Retrieve information about a resource.  
- **POST**: Create a new resource.  
- **PUT**: Update an existing resource.  
- **PATCH**: Partially update a resource.  
- **DELETE**: Remove a resource.  
- **HEAD**: Retrieve headers without the response body.  
- **OPTIONS**: Retrieve supported HTTP methods for a resource.  

### Priority of Methods:
- **P1**: GET, POST, DELETE  
- **P2**: PUT  
- **P3**: PATCH  

---

## 2. HTTP Status Codes
- **1xx**: Informational responses (e.g., request received, continuing process).  
- **2xx**: Success (e.g., request successfully received, understood, and accepted).  
- **3xx**: Redirection (e.g., further action required to complete the request).  
- **4xx**: Client errors (e.g., bad syntax or cannot be fulfilled).  
- **5xx**: Server errors (e.g., server failed to fulfill a valid request).  

---

## 3. Common Status Codes in API Testing
Refer to [this blog](https://automationreinvented.blogspot.com/2019/03/what-are-most-used-api-status-codes.html) for detailed examples.

---

## 4. HTTP Methods Explained
- **GET**: Retrieve information about a resource.  
- **POST**: Create a new resource.  
- **PUT**: Update an existing resource.  
- **DELETE**: Remove a resource or component.  
- **HEAD**: Retrieve headers without the response body.  
- **OPTIONS**: Retrieve supported HTTP methods for a resource.  

---

## 5. PUT vs POST
Refer to [this blog](https://automationreinvented.blogspot.com/2019/04/put-vs-post-example-lets-list-down-when.html) for detailed differences.

---

## 6. What is an API?
An API acts as a messenger between systems, enabling communication and data exchange.  
Example: Booking flights via a travel service like Kayak or Expedia, which interacts with airline APIs to fetch and display data.

---

## 7. Automating REST API Methods with Rest Assured

### Automate GET Method and Validate Status Code
```java
@Test(description="Verify status code for GET method-users/2 as 200")
public static void verifyStatusCodeGET() {
    Response resp = given().when().get("https://reqres.in/api/users/2");
    assertEquals(resp.getStatusCode(), 200);
}
```

### Automate GET Method and Fetch Response Body
```java
@Test(description="Fetch response body for GET method-users/2")
public static void fetchResponseBodyGET() {
    Response resp = given().when().get("https://reqres.in/api/users/2");
    System.out.println(resp.getBody().asString());
}
```

### Automate GET Method and Validate Response Value
```java
@Test(description="Validate total pages in response body")
public static void validateResponseValueGET() {
    Response resp = given().when().get("https://reqres.in/api/users");
    assertEquals(resp.path("total").toString(), "12");
}
```

### Pass Query Parameters with GET Method
```java
@Test
public void validateQueryParamInGET() {
    Response resp = given().queryParam("page", "2").when().get("https://reqres.in/api/users");
    assertEquals(resp.getStatusCode(), 200);
    System.out.println(resp.getBody().asString());
}
```

### Pass Headers for GET Method
```java
@Test
public void validateHeaderInGET() {
    Response resp = given().header("Content-Type", "application/json").when().get("https://gorest.co.in/public-api/users");
    assertEquals(resp.getStatusCode(), 200);
    System.out.println(resp.getBody().asString());
}
```

### Automate PATCH Method
```java
@Test(description="Automate PATCH method")
public void automatePATCHMethod() throws IOException {
    FileInputStream file = new FileInputStream(new File(System.getProperty("user.dir") + "\\TestData\\patch.json"));
    Response resp = given().header("Content-Type", "application/json").body(IOUtils.toString(file, "UTF-8"))
        .when().patch("https://reqres.in/api/users/2");
    assertEquals(resp.getStatusCode(), 200);
    assertEquals(resp.path("job"), "tester");
}
```

### Automate PUT Method
```java
@Test(description="Automate PUT method")
public void automatePUTMethod() throws IOException {
    FileInputStream file = new FileInputStream(new File(System.getProperty("user.dir") + "\\TestData\\put.json"));
    Response resp = given().header("Content-Type", "application/json").body(IOUtils.toString(file, "UTF-8"))
        .when().put("https://reqres.in/api/users/2");
    assertEquals(resp.getStatusCode(), 200);
    assertEquals(resp.path("job"), "tester");
}
```

### Automate POST Method
```java
@Test(description="Automate POST method")
public void automatePOSTMethod() {
    Response resp = given().header("Content-Type", "application/json")
        .body("{\"name\": \"John\", \"job\": \"developer\"}")
        .when().post("https://reqres.in/api/users");
    assertEquals(resp.getStatusCode(), 201);
}
```

---

## 8. Authentication Methods in Rest Assured
### Basic Authentication
```java
Response resp = given().auth().basic("username", "password").when().get("https://reqres.in/api/users/2");
```

### Pre-emptive Authentication
```java
Response resp = given().auth().preemptive().basic("username", "password").when().get("https://reqres.in/api/users/2");
```

### Digest Authentication
```java
Response resp = given().auth().digest("username", "password").when().get("https://reqres.in/api/users/2");
```

### OAuth2 Authentication
```java
Response resp = given().auth().oauth2("accessToken").when().get("https://reqres.in/api/users/2");
```

### OAuth Authentication
```java
Response resp = given().auth().oauth("consumerKey", "consumerSecret", "accessToken", "secretToken").when().get("https://reqres.in/api/users/2");
```

### Header-based Authorization
```java
Response resp = given().header("Authorization", "Bearer accessToken").when().get("https://reqres.in/api/users/2");
```

---

## 9. Key Differences
### 401 vs 403
- **401 Unauthorized**: Authentication is required but not provided or invalid.  
- **403 Forbidden**: Authentication is valid, but the user does not have permission to access the resource.  

### API vs Web Service
- All web services are APIs, but not all APIs are web services.  
- Web services require a network, while APIs may not.  
- Web services use SOAP, REST, or XML-RPC, while APIs can use multiple protocols.  

---

## 10. What is REST?
- REST (Representational State Transfer) is an architectural style for web services.  
- It uses HTTP methods (GET, POST, PUT, DELETE) to interact with resources identified by URIs.  
- Resources can be represented in formats like JSON, XML, or plain text.  

# REST Assured Interview Questions and Answers

### 1. WHAT PROTOCOL IS UTILIZED BY RESTFUL WEB SERVICES?  
RESTful web services utilize the **HTTP/HTTPS** protocol for communication.

### 2. WHAT IS REST ASSURED, AND WHY IS IT USED FOR API TESTING?  
REST Assured is a Java library used for testing RESTful APIs. It simplifies the process of sending HTTP requests and validating responses.

### 3. WHAT ARE THE ADVANTAGES OF USING REST ASSURED FOR API TESTING?  
- Easy-to-use syntax for API testing.  
- Supports BDD-style testing.  
- Built-in support for JSON and XML parsing.  
- Integration with testing frameworks like JUnit and TestNG.

### 4. WHAT ARE THE DIFFERENT HTTP METHODS THAT REST ASSURED SUPPORTS?  
REST Assured supports HTTP methods like **GET**, **POST**, **PUT**, **DELETE**, **PATCH**, **OPTIONS**, and **HEAD**.

### 5. WHAT IS THE DIFFERENCE BETWEEN REST ASSURED AND OTHER API TESTING TOOLS?  
REST Assured is a Java-based library, while tools like Postman are GUI-based. REST Assured is better suited for automation and integration with CI/CD pipelines.

### 6. HOW DO YOU SEND A GET REQUEST USING REST ASSURED?  
```java
given().when().get("https://api.example.com/resource").then().statusCode(200);
```

### 7. HOW DO YOU VERIFY THE RESPONSE STATUS CODE IN REST ASSURED?  
```java
given().when().get("https://api.example.com/resource").then().assertThat().statusCode(200);
```

### 8. HOW DO YOU EXTRACT DATA FROM A RESPONSE IN REST ASSURED?  
```java
String value = given().when().get("https://api.example.com/resource").then().extract().path("key");
```

### 9. WHAT IS THE DIFFERENCE BETWEEN GIVEN() AND WHEN() IN REST ASSURED?  
- **given()**: Sets up the request (headers, parameters, etc.).  
- **when()**: Specifies the HTTP method to execute.

### 10. WHAT IS THE MAXIMUM SIZE OF A PAYLOAD THAT CAN BE SENT VIA THE POST METHOD?  
The maximum payload size depends on the server and client configurations, not REST Assured itself.

### 11. DESCRIBE REST.  
REST (Representational State Transfer) is an architectural style for designing networked applications using stateless communication and standard HTTP methods.

### 12. CAN A GET QUERY BE MADE IN PLACE OF A PUT TO CREATE A RESOURCE?  
No, **GET** is used for retrieving data, while **PUT** is used for creating or updating resources.

### 13. EXPLAIN REST ASSURED METHOD CHAINING.  
Method chaining in REST Assured allows combining multiple methods in a single statement for better readability and maintainability.

### 14. NAME THE ESSENTIAL ELEMENTS OF AN HTTP RESPONSE.  
- Status Code  
- Headers  
- Body (optional)  
- Cookies (optional)

### 15. WHAT IS JSONPATH IN REST ASSURED?  
JSONPath is a syntax used to extract specific data from JSON responses.

### 16. WHAT TECHNIQUE DOES CACHING USE?  
Caching uses techniques like **ETags**, **Cache-Control headers**, and **Last-Modified headers**.

### 17. WHAT IS CLIENT-SERVER ARCHITECTURE?  
It is a design model where the client requests resources, and the server processes and responds to those requests.

### 18. DESCRIBE JSON.  
JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy to read and write.

### 19. WHAT PROCEDURES AND TECHNIQUES ARE USED TO VERIFY THE REST API RESPONSE IN REST ASSURED?  
- Validating status codes.  
- Verifying response headers.  
- Parsing and validating JSON or XML response bodies.

### 20. WHY DOES REST ASSURED USE STATIC IMPORT?  
Static imports simplify method calls, allowing direct access to methods like `given()`, `when()`, and `then()` without class references.

### 21. DEFINE A RESOURCE IN REST.  
A resource is any entity that can be identified by a URI, such as a user, file, or document.

### 22. WHAT ARE THE BEST PRACTICES TO FOLLOW WHEN USING REST ASSURED FOR API TESTING?  
- Use assertions for validation.  
- Modularize test cases.  
- Avoid hardcoding sensitive data.  
- Log requests and responses for debugging.

### 23. WHAT IS A RESTFUL WEB SERVICE'S PAYLOAD?  
The payload is the data sent in the body of an HTTP request or response.

### 24. HOW DO YOU EXTRACT THE VALUES OF JSON, AND HOW DO YOU VALIDATE RESPONSE?  
Use `extract().path()` to extract values and `assertThat()` for validation.  
```java
String value = response.path("key");
assertThat(value, equalTo("expectedValue"));
```

### 25. HOW MANY TYPES OF AUTHENTICATION ARE THERE IN POSTMAN/ REST-ASSURED?  
Common types include:  
- Basic Authentication  
- OAuth 1.0/2.0  
- Bearer Token  
- API Key  
- Digest Authentication

### 26. WHAT ARE THE DEPENDENCIES FOR REST-ASSURED?  
Add the following Maven dependency:  
```xml
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>5.x.x</version>
</dependency>
```

### 27. WHY WOULD A PROGRAMMER USE REST ASSURED TO AUTOMATE RESTFUL SERVICES INSTEAD OF POSTMAN?  
REST Assured is better for automation, CI/CD integration, and supports programmatic assertions.

### 28. HOW IS CHAINING CARRIED OUT IN REST ASSURED?  
Chaining is done by linking methods like `given()`, `when()`, and `then()` in a single statement.

### 29. WHAT ARE SERIALIZATION AND DESERIALIZATION IN REST ASSURED?  
- **Serialization**: Converting Java objects to JSON/XML.  
- **Deserialization**: Converting JSON/XML to Java objects.

### 30. WHAT IS THE BEST WAY TO KEEP SENSITIVE DATA OUT OF THE LOG IN REST ASSURED?  
Use filters to mask sensitive data or avoid logging headers/body containing sensitive information.

### 31. HOW DOES REST ASSURED WORK INTERNALLY?  
REST Assured builds HTTP requests, sends them to the server, and parses the response for validation.

### 32. HOW DO YOU EXPLAIN THE REST ASSURED FRAMEWORK IN AN INTERVIEW?  
REST Assured is a Java-based library for automating RESTful API testing. It simplifies HTTP request handling, response validation, and supports BDD-style syntax.

