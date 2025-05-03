# Playwright Java Interview Cheat Sheet  

## Core Components  
### Browser  
Represents a single browser instance (e.g., Chromium, Firefox, WebKit).  
```java  
Browser browser = playwright.chromium().launch();  
```  

### BrowserContext  
An isolated browsing session with its own cookies, cache, etc.  
```java  
BrowserContext context = browser.newContext();  
```  

### Page  
A single tab or window within a BrowserContext.  
```java  
Page page = context.newPage();  
```  

### Locator  
A way to find elements on a page (similar to CSS/XPath selectors).  
```java  
Locator heading = page.locator("h1");  
Locator button = page.locator("#submit-button");  
Locator link = page.locator("a:has-text('Click Me')");  
Locator nthItem = page.locator(".item").nth(2);  // Get the 3rd item  
Locator withAttribute = page.locator("[data-testid='my-element']");  
```  

## Basic Actions  
- **Navigate to a URL**  
    ```java  
    page.navigate("https://example.com");  
    ```  
- **Get the title of the page**  
    ```java  
    String title = page.title();  
    ```  
- **Get the URL of the current page**  
    ```java  
    String url = page.url();  
    ```  
- **Click an element**  
    ```java  
    button.click();  
    ```  
- **Type text into an input field**  
    ```java  
    page.locator("#username").type("myusername");  
    page.locator("#password").fill("mypassword");  // More robust for clearing and typing  
    ```  
- **Check/uncheck a checkbox or radio button**  
    ```java  
    page.locator("#checkbox").check();  
    page.locator("#radio-button").uncheck();  
    ```  
- **Select an option from a dropdown**  
    ```java  
    page.locator("#dropdown").selectOption("value1");  // By value  
    page.locator("#dropdown").selectOption(new SelectOption().setLabel("Option Text"));  // By label  
    page.locator("#dropdown").selectOption(new SelectOption().setIndex(2));  // By index  
    ```  
- **Hover over an element**  
    ```java  
    page.locator("#menu-item").hover();  
    ```  
- **Press a keyboard key**  
    ```java  
    page.press("Enter");  
    page.press("Shift+Tab");  
    ```  

## Assertions  
- **Check if an element is visible**  
    ```java  
    assertThat(heading).isVisible();  
    ```  
- **Check if an element contains text**  
    ```java  
    assertThat(heading).containsText("Welcome");  
    ```  
- **Check if an element has specific text**  
    ```java  
    assertThat(button).hasText("Submit");  
    ```  
- **Check if an element is enabled/disabled**  
    ```java  
    assertThat(button).isEnabled();  
    assertThat(page.locator("#disabled-input")).isDisabled();  
    ```  
- **Check the value of an input field**  
    ```java  
    assertThat(page.locator("#username")).hasValue("myusername");  
    ```  
- **Check the URL of the page**  
    ```java  
    assertThat(page).hasURL("https://example.com/login");  
    ```  

## Waiting  
- **Wait for an element to be visible**  
    ```java  
    page.waitForSelector("#element", new PageWaitForSelectorOptions().setState(WaitForSelectorState.VISIBLE));  
    ```  
- **Wait for a specific time (not recommended for stability)**  
    ```java  
    page.waitForTimeout(5000);  
    ```  
- **Wait for navigation to complete**  
    ```java  
    page.waitForNavigation();  
    ```  
- **Wait for a network request to complete**  
    ```java  
    page.waitForResponse("*api/data**");  
    ```  
- **Wait for a specific condition using a predicate**  
    ```java  
    page.waitForFunction("() => document.title === 'New Title'");  
    ```  

## Frames and Popups  
- **Handling Frames**  
    ```java  
    Frame frame = page.frameLocator("#myframe").frameElement();  
    String frameTitle = frame.textContent("h1");  
    ```  
- **Handling Popups/New Windows**  
    ```java  
    Page popup = page.waitForPopup();  
    popup.waitForLoadState();  
    String popupTitle = popup.title();  
    popup.locator("#popup-button").click();  
    popup.close();  
    ```  

## Screenshots and Videos  
- **Take a screenshot of the entire page**  
    ```java  
    page.screenshot(new PageScreenshotOptions().setPath("screenshot.png").setFullPage(true));  
    ```  
- **Take a screenshot of a specific element**  
    ```java  
    page.locator("#element-to-capture").screenshot(new LocatorScreenshotOptions().setPath("element.png"));  
    ```  
- **Start recording a video**  
    ```java  
    BrowserContext context = browser.newContext(new BrowserNewContextOptions().setRecordVideoDir("videos/"));  
    ```  

## Configuration and Options  
- **Launch options**  
    ```java  
    Browser browser = playwright.chromium().launch(new BrowserLaunchOptions().setHeadless(false).setSlowMo(50));  
    ```  
- **Context options**  
    ```java  
    BrowserContext context = browser.newContext(new BrowserNewContextOptions().setViewportSize(1280, 720).setStorageStatePath("storage.json"));  
    ```  
- **Page options (e.g., user agent)**  
    ```java  
    Page page = context.newPage(new BrowserNewPageOptions().setUserAgent("My Custom Agent"));  
    ```  

## Advanced Topics  
- **Evaluate JavaScript on the page**  
    ```java  
    Object result = page.evaluate("() => document.getElementById('myid').textContent");  
    ```  
- **Expose Java functions to the page**  
    ```java  
    page.exposeFunction("javaFunction", (String arg) -> {  
            System.out.println("Argument from page: " + arg);  
            return "Result from Java";  
    });  
    page.evaluate("async () => { const result = await window.javaFunction('hello'); console.log(result); }");  
    ```  
- **Intercept network requests**  
    ```java  
    page.route("*api*", route -> {  
            System.out.println("Intercepted request to: " + route.request().url());  
            route.continue_();  // Forward the request  
            route.fulfill(new RouteFulfillOptions().setBody("Mocked Data"));  // Mock the response  
    });  
    ```  
- **Handling file uploads**  
    ```java  
    page.locator("#upload-input").setInputFiles(Paths.get("path/to/your/file.txt"));  
    ```  
- **Authentication**  
    - **Option 1: Using storage state**  
        ```java  
        context.storageState(new BrowserContextStorageStateOptions().setPath("storage.json"));  
        ```  
    - **Option 2: Programmatic login**  
        ```java  
        page.locator("#login-button").click();  
        page.locator("#username").fill("user");  
        page.locator("#password").fill("pass");  
        page.locator("#submit").click();  
        context.storageState(new BrowserContextStorageStateOptions().setPath("storage.json"));  
        ```  

## Common Interview Questions  
- What are the core components of Playwright? (Browser, Context, Page, Locator)  
- How do you locate elements in Playwright? (Locators - CSS, XPath, text-based, etc.)  
- What are the different ways to wait for elements or conditions? (waitForSelector, waitForNavigation, waitForResponse, waitForFunction)  
- How do you handle different browser contexts? (browser.newContext())  
- How do you interact with frames and popups? (frameLocator(), waitForPopup())  
- How can you take screenshots? (page.screenshot(), locator.screenshot())  
- How do you configure browser launch options? (BrowserLaunchOptions)  
- How can you run tests in headless mode? (.setHeadless(true))  
- How can you intercept network requests? (page.route())  
- How do you handle authentication? (Storage state, programmatic login)  

## Key Differences from Selenium  
- **Auto Waits**: Playwright automatically waits for elements to be actionable.  
- **Modern Browser Support**: Excellent support for Chromium, Firefox, and WebKit.  
- **API Design**: Fluent and modern API.  
- **Reliability**: Generally considered more reliable for modern web applications.  
- **Built-in Features**: Includes features like network interception and tracing out-of-the-box.  

## Additional Notes  
- Playwright is developed by Microsoft.  
- It supports multiple programming languages (Java, Python, Node.js, .NET).  
- It's designed for end-to-end testing of modern web applications.  