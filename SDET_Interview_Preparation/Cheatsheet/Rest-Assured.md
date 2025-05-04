# REST Assured  

## What is REST Assured?  
- A Java library for testing RESTful web services.  
- Simplifies the process of sending HTTP requests and validating responses.  
- Supports various HTTP methods (GET, POST, PUT, DELETE, etc.).  
- Integrates well with testing frameworks like JUnit and TestNG.  

## Core Concepts  
- **Request Specification**: Defines the details of an HTTP request (e.g., base URI, path parameters, query parameters, headers, body).  
- **Response Specification**: Defines the expectations for the HTTP response (e.g., status code, headers, body content).  
- **Fluent API**: Provides a readable and chainable syntax for building requests and assertions.  

## Basic Request Structure  

```java
given()  
    .spec(requestSpec) // Optional: Reuse request specifications  
    .auth().basic("username", "password") // Optional: Authentication  
    .header("Content-Type", "application/json") // Optional: Headers  
    .queryParam("apiKey", "yourKey") // Optional: Query parameters  
    .pathParam("id", 123) // Optional: Path parameters  
    .body(requestBody) // Optional: Request body (for POST, PUT)  
.when()  
    .get("/users/{id}") // Specify HTTP method and endpoint  
.then()  
    .spec(responseSpec) // Optional: Reuse response specifications  
    .assertThat()  
    .statusCode(200)  
    .header("Content-Type", "application/json;charset=UTF-8")  
    .body("firstName", equalTo("John"))  
    .body("lastName", is("Doe"))  
    .body("address.city", containsString("New"));  
```

## Request Specification (Reusable)  

```java
RequestSpecification requestSpec = new RequestSpecBuilder()  
    .setBaseUri("https://api.example.com")  
    .setContentType(ContentType.JSON)  
    .addHeader("X-Custom-Header", "value")  
    .build();  
```

## Response Specification (Reusable)  

```java
ResponseSpecification responseSpec = new ResponseSpecBuilder()  
    .expectStatusCode(200)  
    .expectContentType(ContentType.JSON)  
    .expectHeader("Server", "nginx")  
    .build();  
```

## Common HTTP Methods  
- **GET**: Retrieve data from the server.  
- **POST**: Send data to the server to create a new resource.  
- **PUT**: Send data to the server to update an existing resource.  
- **DELETE**: Request the server to delete a resource.  
- **PATCH**: Apply partial modifications to a resource.  
- **HEAD**: Retrieve only the headers of a resource.  
- **OPTIONS**: Describe the communication options for the target resource.  

## Authentication  
- **Basic Auth**: `.auth().basic("username", "password")`  
- **Bearer Token**: `.auth().oauth2("your_token")`  
- **OAuth 1.0a**:  
  ```java
  .auth().oauth("consumerKey", "consumerSecret", "accessToken", "tokenSecret")  
  ```  
- **Preemptive Auth**: `.auth().preemptive().basic("username", "password")`  

## Request Parameters  
- **Path Parameters**: `.pathParam("key", "value")` - Used to replace placeholders in the endpoint URL.  
- **Query Parameters**: `.queryParam("key", "value")` - Appended to the URL after a `?`.  
- **Form Parameters**: `.formParam("key", "value")` - Used for form submissions (`Content-Type: application/x-www-form-urlencoded`).  
- **Multi-Part Form Data**: `.multiPart("file", new File("path/to/file"))` - Used for file uploads.  

## Request Body  
- **String**: `.body("{\"key\": \"value\"}")`  
- **Object**: `.body(new MyObject())` (automatically serialized to JSON if `Content-Type` is set).  
- **XML String**: `.body("<xml><data>value</data></xml>")`  

## Response Assertions  
- **Status Code**: `.statusCode(200)`  
- **Headers**: `.header("Content-Type", containsString("json"))`  
- **Cookies**: `.cookie("sessionId", "someValue")`  
- **Body (JSON)**:  
  - Simple Value: `.body("firstName", equalTo("John"))`  
  - Nested Object: `.body("address.city", is("New York"))`  
  - Array Element: `.body("items[0].name", equalTo("Product A"))`  
  - Entire JSON Path: `.body("$.store.book[0].title", equalTo("Sayings of the Century"))`  
- **Body (XML)**:  
  - Using XPath: `.body(hasXPath("/bookstore/book[1]/title"), equalTo("Everyday Italian"))`  

## Extracting Data from Response  
- Single Value: `String firstName = response.path("firstName");`  
- List of Values: `List<String> lastNames = response.jsonPath().getList("items.lastName");`  
- Headers: `String contentType = response.getHeader("Content-Type");`  
- Cookies: `String sessionId = response.getCookie("sessionId");`  
- Entire Response Body: `String body = response.getBody().asString();`  
- Java Object:  
  ```java
  MyResponseObject responseObject = response.as(MyResponseObject.class);  
  ```  

## Integration with Testing Frameworks  
- **JUnit**: Use `@Test` annotation.  
- **TestNG**: Use `@Test` annotation.  

## Difference Between OAuth and OAuth 2.0  
- **OAuth**:  
    - Older version of the protocol.  
    - Relies on cryptographic signatures for authentication.  
    - More complex and less flexible.  
- **OAuth 2.0**:  
    - Simplified and modernized version of OAuth.  
    - Uses tokens for authentication and authorization.  
    - Supports multiple grant types (e.g., Authorization Code, Client Credentials).  
    - Easier to implement and widely adopted.  

## HTTP Status Codes and Descriptions  

### Informational (1xx)  
- **100 Continue**: The server has received the request headers and the client should proceed to send the request body.  
- **101 Switching Protocols**: The server is switching protocols as requested by the client.  

### Success (2xx)  
- **200 OK**: The request was successful.  
- **201 Created**: The request was successful, and a new resource was created.  
- **204 No Content**: The request was successful, but there is no content to send in the response.  

### Redirection (3xx)  
- **301 Moved Permanently**: The resource has been permanently moved to a new URL.  
- **302 Found**: The resource is temporarily located at a different URL.  
- **304 Not Modified**: The resource has not been modified since the last request.  

### Client Errors (4xx)  
- **400 Bad Request**: The server could not understand the request due to invalid syntax.  
- **401 Unauthorized**: Authentication is required and has failed or has not been provided.  
- **403 Forbidden**: The client does not have permission to access the resource.  
- **404 Not Found**: The requested resource could not be found.  
- **429 Too Many Requests**: The client has sent too many requests in a given amount of time.  

### Server Errors (5xx)  
- **500 Internal Server Error**: The server encountered an unexpected condition.  
- **502 Bad Gateway**: The server received an invalid response from an upstream server.  
- **503 Service Unavailable**: The server is currently unable to handle the request due to maintenance or overload.  
- **504 Gateway Timeout**: The server did not receive a timely response from an upstream server.  

## Commonly Asked Differences Between Status Codes  
- **401 Unauthorized vs. 403 Forbidden**:  
    - **401**: Indicates that authentication is required but has not been provided or failed.  
    - **403**: Indicates that the client is authenticated but does not have permission to access the resource.  
- **404 Not Found vs. 410 Gone**:  
    - **404**: The resource could not be found but may be available in the future.  
    - **410**: The resource is permanently gone and will not be available again.  
- **500 Internal Server Error vs. 503 Service Unavailable**:  
    - **500**: A generic error indicating an unexpected condition on the server.  
    - **503**: Indicates that the server is temporarily unable to handle the request (e.g., maintenance).  
- **302 Found vs. 307 Temporary Redirect**:  
    - **302**: The resource is temporarily located at a different URL, but the method may change.  
    - **307**: Similar to 302, but the method must remain the same.  
- **204 No Content vs. 304 Not Modified**:  
    - **204**: The request was successful, but there is no content in the response.  
    - **304**: The resource has not been modified since the last request, so no new data is returned.  


# Rest Assured – Interfaces, Functions, and Usage Examples

Rest Assured is a popular Java library for testing RESTful APIs. It provides a domain-specific language (DSL) for writing powerful and readable tests for REST services.

---

## 1. BaseURI and BasePath

### Description:
Set the base URI and base path globally for all API requests.

### Example:
```java
RestAssured.baseURI = "https://api.example.com";
RestAssured.basePath = "/v1/users";
```

---

## 2. Given / When / Then Syntax (BDD Style)

### Description:
BDD-style syntax makes the tests readable and structured.

### Example:
```java
given()
    .header("Authorization", "Bearer token")
.when()
    .get("/users")
.then()
    .statusCode(200);
```

---

## 3. RequestSpecification Interface

### Description:
Used to build reusable request specifications.

### Example:
```java
RequestSpecification reqSpec = given()
    .baseUri("https://api.example.com")
    .header("Content-Type", "application/json");

reqSpec.when().get("/users").then().statusCode(200);
```

---

## 4. Response Interface

### Description:
Used to extract and validate response data.

### Example:
```java
Response response = 
    given().when().get("/users");
    
String body = response.getBody().asString();
int statusCode = response.getStatusCode();
```

---

## 5. ValidatableResponse Interface

### Description:
Provides methods to validate the response in a fluent manner.

### Example:
```java
given()
    .when().get("/users")
    .then().assertThat()
    .statusCode(200)
    .body("size()", greaterThan(0));
```

---

## 6. Path Parameters

### Description:
Used to pass path variables in endpoints.

### Example:
```java
given()
    .pathParam("userId", 10)
.when()
    .get("/users/{userId}")
.then()
    .statusCode(200);
```

---

## 7. Query Parameters

### Description:
Used to pass parameters in the query string.

### Example:
```java
given()
    .queryParam("page", 2)
    .queryParam("limit", 10)
.when()
    .get("/users")
.then()
    .statusCode(200);
```

---

## 8. Sending JSON Payload (POST/PUT)

### Example:
```java
String jsonBody = "{ "name": "John", "job": "Engineer" }";

given()
    .header("Content-Type", "application/json")
    .body(jsonBody)
.when()
    .post("/users")
.then()
    .statusCode(201);
```

---

## 9. Authentication (Basic & OAuth2)

### Basic Auth:
```java
given()
    .auth().basic("username", "password")
.when()
    .get("/secure")
.then()
    .statusCode(200);
```

### OAuth2:
```java
given()
    .auth().oauth2("accessToken")
.when()
    .get("/profile")
.then()
    .statusCode(200);
```

---

## 10. Extracting Values from Response

### Example:
```java
String name = given()
    .when().get("/users/1")
    .then().extract().path("name");
```

---

## 11. Logging Request and Response

### Example:
```java
given()
    .log().all()
.when()
    .get("/users")
.then()
    .log().body()
    .statusCode(200);
```

---

## 12. JSON Schema Validation

### Example:
```java
given()
    .when().get("/users")
.then()
    .assertThat()
    .body(matchesJsonSchemaInClasspath("user-schema.json"));
```

---

## Summary Table

| Interface / Function       | Description                                     |
|----------------------------|-------------------------------------------------|
| `RestAssured.baseURI`      | Set base URI for API                            |
| `RequestSpecification`     | Build reusable request settings                 |
| `Response`                 | Handle API responses                            |
| `ValidatableResponse`      | Fluent validation for response                  |
| `given().when().then()`    | BDD-style syntax                                |
| `.pathParam()`             | Set path parameter                              |
| `.queryParam()`            | Set query parameter                             |
| `.auth().basic()`          | Basic authentication                            |
| `.auth().oauth2()`         | OAuth2 token-based authentication               |
| `.extract().path()`        | Extract fields from JSON                        |
| `.log().all()/body()`      | Log requests and responses                      |
| `matchesJsonSchemaInClasspath()` | Validate JSON response against schema    |


# JSON and XML Serialization/Deserialization with Rest-Assured (Java)

This document provides a detailed example of how to handle JSON and XML serialization and deserialization for requests and responses in Java using the Rest-Assured library.

## 1. Dependencies

Ensure you have the following dependencies in your `pom.xml` (if using Maven):

```xml
<dependencies>
    <dependency>
        <groupId>io.rest-assured</groupId>
        <artifactId>rest-assured</artifactId>
        <version>5.3.0</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.16.1</version>
    </dependency>
    <dependency>
        <groupId>org.testng</groupId>
        <artifactId>testng</artifactId>
        <version>7.8.0</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.dataformat</groupId>
        <artifactId>jackson-dataformat-xml</artifactId>
        <version>2.16.1</version>
    </dependency>
</dependencies>
```

---

## 2. JSON Serialization/Deserialization

### 2.1 JSON Serialization

**Concept**: Converting a Java object into a JSON string to send in a request body.

**Example**:

```java
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.given;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;

class Person {
    private String name;
    private int age;

    public Person() {} // Required for Jackson

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
    public void setName(String name) { this.name = name; }
    public void setAge(int age) { this.age = age; }
}

public class JsonSerializationTest {

    @Test
    public void testJsonSerialization() throws IOException {
        RestAssured.baseURI = "https://reqres.in";

        Person person = new Person("Alice", 30);
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonBody = objectMapper.writeValueAsString(person);

        System.out.println("Request Body (JSON): " + jsonBody);

        Response response = given()
                .header("Content-Type", "application/json")
                .body(jsonBody)
                .when()
                .post("/api/users");

        response.then().statusCode(201);
        System.out.println("Response: " + response.prettyPrint());
    }
}
```

---

### 2.2 JSON Deserialization

**Concept**: Converting a JSON response body into a Java object.

**Example**:

```java
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.given;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import static org.testng.Assert.assertEquals;

public class JsonDeserializationTest {

    @Test
    public void testJsonDeserialization() throws IOException {
        RestAssured.baseURI = "https://reqres.in";

        Response response = given()
                .when()
                .get("/api/users/2");

        response.then().statusCode(200);

        String jsonResponse = response.getBody().asString();
        System.out.println("Response Body (JSON): " + jsonResponse);

        ObjectMapper objectMapper = new ObjectMapper();

        class UserData {
            private int id;
            private String email;
            private String first_name;
            private String last_name;
            private String avatar;

            public int getId() { return id; }
            public String getEmail() { return email; }
            public String getFirstName() { return first_name; }
            public String getLastName() { return last_name; }
            public String getAvatar() { return avatar; }
        }

        class UserResponse {
            private UserData data;

            public UserData getData() { return data; }
        }

        UserResponse userResponse = objectMapper.readValue(jsonResponse, UserResponse.class);

        System.out.println("Deserialized Object: " + userResponse.getData().getFirstName());
        assertEquals(userResponse.getData().getId(), 2);
        assertEquals(userResponse.getData().getFirstName(), "Janet");
    }
}
```

---

## 3. XML Serialization/Deserialization

### 3.1 XML Serialization

**Concept**: Converting a Java object into an XML string for use as a request.

**Example**:

```java
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.given;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import java.io.IOException;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlElement;

@XmlRootElement(name = "Person")
class PersonXml {
    private String name;
    private int age;

    public PersonXml() {}

    public PersonXml(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @XmlElement(name = "Name")
    public String getName() { return name; }
    @XmlElement(name = "Age")
    public int getAge() { return age; }
}

public class XmlSerializationTest {

    @Test
    public void testXmlSerialization() throws IOException {
        RestAssured.baseURI = "https://reqres.in";

        PersonXml person = new PersonXml("Bob", 25);
        XmlMapper xmlMapper = new XmlMapper();
        String xmlBody = xmlMapper.writeValueAsString(person);

        System.out.println("Request Body (XML):\n" + xmlBody);

        Response response = given()
                .header("Content-Type", "application/xml")
                .body(xmlBody)
                .when()
                .post("/api/users");

        response.then().statusCode(201);
        System.out.println("Response:\n" + response.prettyPrint());
    }
}
```

---

### 3.2 XML Deserialization

**Concept**: Converting an XML response body into a Java object.

**Example**:

```java
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlElement;

@XmlRootElement(name = "Response")
class ResponseXml {
    private Status status;
    private Message message;

    @XmlElement(name = "Status")
    public Status getStatus() { return status; }
    @XmlElement(name = "Message")
    public Message getMessage() { return message; }

    @XmlRootElement(name = "Status")
    static class Status {
        private String value;
        @XmlElement(name = "value")
        public String getValue() { return value; }
    }

    @XmlRootElement(name = "Message")
    static class Message {
        private String value;
        @XmlElement(name = "value")
        public String getValue() { return value; }
    }
}

public class XmlDeserializationTest {
    @Test
    public void testXmlDeserialization() throws IOException {
        String xmlResponse = "<Response><Status><value>success</value></Status><Message><value>Resource created successfully</value></Message></Response>";

        XmlMapper xmlMapper = new XmlMapper();
        ResponseXml responseXml = xmlMapper.readValue(xmlResponse, ResponseXml.class);

        System.out.println("Deserialized Object: " + responseXml.getStatus().getValue());
    }
}
```

---  

## Common Interview Questions  
- What is REST Assured and why is it useful for API testing?  
- Explain the basic structure of a REST Assured test.  
- What is the purpose of `given()`, `when()`, and `then()`?  
- How do you specify the base URI and endpoints in REST Assured?  
- How do you handle different HTTP methods using REST Assured?  
- How do you pass parameters (path, query, form) in your requests?  
- How do you set headers and cookies in your requests?  
- How do you send a request body with POST or PUT methods?  
- How do you perform different types of authentication in REST Assured?  
- How do you validate the status code, headers, and body of a response?  
- What are the different ways to assert the response body (JSON and XML)?  
- How do you extract data from the response body, headers, and cookies?  
- How do you reuse request and response specifications?  
- How do you integrate REST Assured with JUnit or TestNG?  
- What are some common challenges you've faced while testing REST APIs and how did REST Assured help?  
- How do you handle data-driven testing with REST Assured?  
- How do you log requests and responses for debugging? (`.log().all()`)  
- How do you work with different content types (JSON, XML, etc.)?  

## Remember to Mention  
- Your experience using REST Assured in your projects.  
- Any advanced features you have used (e.g., filters, interceptors).  
- How you handle error scenarios and negative testing.  
- Your understanding of RESTful API principles.  
