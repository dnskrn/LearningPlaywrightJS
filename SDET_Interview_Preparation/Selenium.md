# Selenium Interview Questions and Notes

## 0.1 Locators
Selenium includes 8 locator strategies:
- **Identifier**
- **Id**
- **Name**
- **Link**
- **DOM**
- **XPath**
- **CSS**
- **UI-element**

### XPath
XPath contains the path of the element situated on the web page. Standard syntax for creating XPath:
```plaintext
Xpath=//tagname[@attribute='value']
```
- `//` : Select current node.
- `Tagname` : Tagname of the particular node.
- `@` : Select attribute.
- `Attribute` : Attribute name of the node.
- `Value` : Value of the attribute.

### XPath Locators
| Locator Strategy | Description |
|-------------------|-------------|
| **ID**           | To find the element by ID of the element. |
| **Classname**    | To find the element by Classname of the element. |
| **Name**         | To find the element by name of the element. |
| **Link text**    | To find the element by text of the link. |
| **XPath**        | Required for finding dynamic elements and traversing between various elements of the web page. |
| **CSS path**     | Locates elements having no name, class, or ID. |

---

## 0.2 How Selenium Works?

Selenium WebDriver comprises 4 main components:
1. **Selenium Client Libraries**
2. **JSON Wire Protocol Over HTTP Client**
3. **Browser Drivers**
4. **Real Browsers**

### Workflow:
- Selenium Script creates an HTTP Request for each Selenium command and sends it to the browser driver.
- The browser driver executes the commands in the browser and sends the response back to the script.

---

## 1. Browser Property Setup
### Chrome:
```java
System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");
```
### Firefox:
```java
System.setProperty("webdriver.gecko.driver", "/path/to/geckodriver");
```
### Edge:
```java
System.setProperty("webdriver.edge.driver", "/path/to/MicrosoftWebDriver");
```

---

## 2. Browser Initialization
### Firefox:
```java
WebDriver driver = new FirefoxDriver();
```
### Chrome:
```java
WebDriver driver = new ChromeDriver();
```
### Internet Explorer:
```java
WebDriver driver = new InternetExplorerDriver();
```
### Safari:
```java
WebDriver driver = new SafariDriver();
```

---

## 3. Desired Capabilities
### Chrome:
```java
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("browserName", "chrome");
caps.setCapability("browserVersion", "80.0");
caps.setCapability("platformName", "win10");
WebDriver driver = new ChromeDriver(caps);
```
### Firefox:
```java
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("browserName", "firefox");
caps.setCapability("browserVersion", "81.0");
caps.setCapability("platformName", "win10");
WebDriver driver = new FirefoxDriver(caps);
```

---

## 4. Browser Options
### Chrome:
```java
ChromeOptions chromeOptions = new ChromeOptions();
chromeOptions.addArguments("--headless", "--start-maximized", "--incognito");
WebDriver driver = new ChromeDriver(chromeOptions);
```
### Firefox:
```java
FirefoxOptions firefoxOptions = new FirefoxOptions();
firefoxOptions.setHeadless(true);
WebDriver driver = new FirefoxDriver(firefoxOptions);
```

---

## 5. Navigation
- **Navigate to URL**:
    ```java
    driver.get("http://google.com");
    driver.navigate().to("http://google.com");
    ```
- **Refresh Page**:
    ```java
    driver.navigate().refresh();
    ```
- **Navigate Backward**:
    ```java
    driver.navigate().back();
    ```
- **Navigate Forward**:
    ```java
    driver.navigate().forward();
    ```

---

## 6. Find Element vs Find Elements
### `findElement()`
- Returns a single WebElement.
- Throws `NoSuchElementException` if no match is found.

### `findElements()`
- Returns a list of WebElements.
- Returns an empty list if no match is found.

---

## 7. Locator Strategies
| Strategy        | Example Code |
|------------------|-------------|
| **By ID**       | `driver.findElement(By.id("login"));` |
| **By Class Name** | `driver.findElement(By.className("Content"));` |
| **By Name**     | `driver.findElement(By.name("pswd"));` |
| **By Tag Name** | `driver.findElement(By.tagName("div"));` |
| **By Link Text** | `driver.findElement(By.linkText("News"));` |
| **By XPath**    | `driver.findElement(By.xpath("//input[@placeholder='Username']"));` |
| **By CSS Selector** | `driver.findElement(By.cssSelector("input.username"));` |

---

## 8. Click on an Element
```java
driver.findElement(By.className("Content")).click();
```

---

## 9. Write Text Inside an Element
```java
driver.findElement(By.className("email")).sendKeys("abc@xyz.com");
```

---

## 10. Clear Text from a Text Box
```java
driver.findElement(By.xpath("//input[@placeholder='Username']")).clear();
```

---

## 11. Select a Drop-down
### Single Selection:
```java
Select country = new Select(driver.findElement(By.id("country")));
country.selectByVisibleText("Canada");
```
### Multiple Selection:
```java
Select fruits = new Select(driver.findElement(By.id("fruits")));
fruits.selectByVisibleText("Banana");
```

---

## 12. Get Methods in Selenium
| Method          | Description |
|------------------|-------------|
| `getTitle()`     | Retrieves the current title of the webpage. |
| `getCurrentUrl()` | Retrieves the current URL of the webpage. |
| `getPageSource()` | Retrieves the page source of the webpage. |
| `getText()`      | Retrieves the text of a specified web element. |
| `getAttribute()` | Retrieves the value of a specified attribute. |

---

## 13. Handle Alerts
| Method          | Description |
|------------------|-------------|
| `alert.getText()` | Retrieves the alert message. |
| `alert.accept()`  | Accepts the alert box. |
| `alert.dismiss()` | Cancels the alert box. |
| `alert.sendKeys()` | Sends data to the alert box. |

---

## 14. Switch Frames
```java
driver.switchTo().frame("frame_name_or_id");
driver.switchTo().defaultContent(); // Switch back to the main window
```

---

## 15. Handle Multiple Windows and Tabs
```java
String mainWindow = driver.getWindowHandle();
Set<String> allWindows = driver.getWindowHandles();
for (String window : allWindows) {
        if (!window.equals(mainWindow)) {
                driver.switchTo().window(window);
                driver.close();
                driver.switchTo().window(mainWindow);
        }
}
```

---

## 16. Waits in Selenium
### Implicit Wait:
```java
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
```
### Explicit Wait:
```java
WebDriverWait wait = new WebDriverWait(driver, 30);
wait.until(ExpectedConditions.presenceOfElementLocated(By.name("login")));
```
### Fluent Wait:
```java
Wait<WebDriver> wait = new FluentWait<>(driver)
        .withTimeout(Duration.ofSeconds(30))
        .pollingEvery(Duration.ofSeconds(5))
        .ignoring(Exception.class);
WebElement foo = wait.until(driver -> driver.findElement(By.id("foo")));
```

---

## 17. Element Validation
| Method          | Description |
|------------------|-------------|
| `isEnabled()`    | Checks if an element is enabled. |
| `isSelected()`   | Checks if an element is selected. |
| `isDisplayed()`  | Checks if an element is displayed. |

---

## 18. Handling Proxy
### Chrome:
```java
ChromeOptions options = new ChromeOptions();
Proxy proxy = new Proxy();
proxy.setHttpProxy("username:password.myhttpproxy:3337");
options.setCapability("proxy", proxy);
WebDriver driver = new ChromeDriver(options);
```

---

## 19. Window Management
### Get Window Size:
```java
Dimension size = driver.manage().window().getSize();
```
### Set Window Size:
```java
driver.manage().window().setSize(new Dimension(1024, 768));
```
### Maximize Window:
```java
driver.manage().window().maximize();
```

---

## 20. Page Loading Strategy
| Strategy | Description |
|----------|-------------|
| `NORMAL` | Waits for the entire page to load. |
| `EAGER`  | Waits until the DOMContentLoaded event is fired. |
| `NONE`   | Does not wait for the page to load. |

---

## 21. Keyboard and Mouse Events
### Keyboard Events:
- `keyDown()`
- `keyUp()`
- `sendKeys()`

### Mouse Events:
- `clickAndHold()`
- `contextClick()`
- `doubleClick()`
- `dragAndDrop(source, target)`

---

## 22. Cookies
| Method              | Description |
|----------------------|-------------|
| `addCookie()`        | Adds a cookie. |
| `getCookies()`       | Retrieves all cookies. |
| `deleteCookieNamed()` | Deletes a specific cookie. |
| `deleteAllCookies()` | Deletes all cookies. |

---

## 23. Take Screenshot
```java
TakesScreenshot screenShot = (TakesScreenshot) driver;
FileHandler.copy(screenShot.getScreenshotAs(OutputType.FILE), new File("path/to/destination/screenshot.png"));
```

---

## 24. Execute JavaScript
```java
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("window.scrollBy(0,1000)");
```

---

## Selenium WebDriver Architecture
Selenium WebDriver API provides communication between languages and browsers. It consists of:
1. **Selenium Language Bindings**
2. **JSON Wire Protocol**
3. **Browser Drivers**
4. **Real Browsers**

For more details, visit:
- [JSON Tutorial](https://www.javatpoint.com/json-tutorial)
- [Web Services Tutorial](https://www.javatpoint.com/web-services-tutorial)

---

## Scenario-Based Interview Q&A
### 1. Handling Dynamic Elements
```java
WebDriverWait wait = new WebDriverWait(driver, 10);
WebElement dynamicElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("xpath_of_dynamic_element")));
dynamicElement.click();
```

### 2. Handling Pop-up Windows
```java
String mainWindow = driver.getWindowHandle();
Set<String> allWindows = driver.getWindowHandles();
for (String window : allWindows) {
        if (!window.equals(mainWindow)) {
                driver.switchTo().window(window);
                driver.close();
                driver.switchTo().window(mainWindow);
        }
}
```

### 3. Handling Dropdowns
```java
Select dropdown = new Select(driver.findElement(By.id("dropdown_id")));
dropdown.selectByVisibleText("Option");
```

### 4. Handling Frames
```java
driver.switchTo().frame("frame_name_or_id");
driver.switchTo().defaultContent();
```

### 5. Performing Mouse Actions
```java
Actions actions = new Actions(driver);
actions.moveToElement(driver.findElement(By.id("element_id"))).perform();
```

### 6. Handling File Uploads
```java
driver.findElement(By.id("uploadButton")).sendKeys("/path/to/file.txt");
```

### 7. Capturing Screenshots
```java
File screenshotFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(screenshotFile, new File("path_to_save_screenshot.png"));
```

### 8. Performing Browser Navigation
```java
driver.navigate().to("https://example.com");
driver.navigate().back();
driver.navigate().forward();
driver.navigate().refresh();
```

### 9. Waiting for Element to be Clickable
```java
WebDriverWait wait = new WebDriverWait(driver, 10);
WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("element_id")));
```

### 10. Data-Driven Testing
```java
@DataProvider(name = "testdata")
public Object[][] testData() {
        return new Object[][] { { "username1", "password1" }, { "username2", "password2" } };
}

@Test(dataProvider = "testdata")
public void loginTest(String username, String password) {
        driver.findElement(By.id("username")).sendKeys(username);
        driver.findElement(By.id("password")).sendKeys(password);
        driver.findElement(By.id("loginButton")).click();
}
```