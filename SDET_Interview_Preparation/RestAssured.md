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
