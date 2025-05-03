# Selenium WebDriver  

## Basic WebDriver Actions  
- `driver.get("https://example.com");`  
    Navigate to a URL  

## What is Selenium WebDriver?  
- A browser automation framework.  
- Provides APIs to interact with web browsers (Chrome, Firefox, Safari, Edge, etc.).  
- Enables simulating user actions on web applications for testing.  

## Core Concepts  
- **WebDriver**: Interface for controlling a browser.  
- **WebElement**: Interface representing an HTML element on a web page.  
- **Locators**: Strategies to find WebElements (ID, Name, ClassName, TagName, CSS Selector, XPath, LinkText, PartialLinkText).  
- **Browser Drivers**: Browser-specific executables that act as a bridge between Selenium and the browser.  
- **Actions API**: For handling complex user interactions (mouse movements, keyboard actions, drag and drop).  
- **Waits**: To handle dynamic web elements and synchronization issues (Implicit Wait, Explicit Wait, Fluent Wait).  

## Setting up WebDriver  

### Chrome  
```java  
WebDriverManager.chromedriver().setup();  
WebDriver driver = new ChromeDriver();  
```  

### Firefox  
```java  
WebDriverManager.firefoxdriver().setup();  
WebDriver driver = new FirefoxDriver();  
```  

### Edge  
```java  
WebDriverManager.edgedriver().setup();  
WebDriver driver = new EdgeDriver();  
```  

### Safari (requires manual setup)  
```java  
WebDriver driver = new SafariDriver();  
```  

## Common WebDriver Methods  
- `String title = driver.getTitle();` Get the title of the current page  
- `String currentUrl = driver.getCurrentUrl();` Get the current URL  
- `String pageSource = driver.getPageSource();` Get the HTML source of the page  
- `driver.manage().window().maximize();` Maximize the browser window  
- `driver.manage().window().setSize(new Dimension(1280, 720));` Set window size  
- `driver.navigate().to("https://anotherexample.com");` Navigate to another URL  
- `driver.navigate().back();` Go back in browser history  
- `driver.navigate().forward();` Go forward in browser history  
- `driver.navigate().refresh();` Refresh the current page  
- `driver.close();` Close the current browser window  
- `driver.quit();` Close all browser windows and WebDriver session  

## Locating WebElements  
```java  
WebElement elementById = driver.findElement(By.id("myId"));  
WebElement elementByName = driver.findElement(By.name("myName"));  
WebElement elementByClassName = driver.findElement(By.className("myClass"));  
WebElement elementByTagName = driver.findElement(By.tagName("h1"));  
WebElement elementByLinkText = driver.findElement(By.linkText("Click Here"));  
WebElement elementByPartialLinkText = driver.findElement(By.partialLinkText("Click"));  
WebElement elementByCssSelector = driver.findElement(By.cssSelector("#myId"));  
WebElement elementByXPath = driver.findElement(By.xpath("//h1[@class='title']"));  
List<WebElement> elementsByClassName = driver.findElements(By.className("myClass"));  
```  

## Interacting with WebElements  
- `elementById.sendKeys("some text");` Type text into an input field  
- `elementById.click();` Click an element (button, link, checkbox, radio button)  
- `elementById.clear();` Clear the text from an input field  
- `boolean isSelected = elementById.isSelected();` Check if a checkbox or radio button is selected  
- `boolean isEnabled = elementById.isEnabled();` Check if an element is enabled  
- `boolean isDisplayed = elementById.isDisplayed();` Check if an element is visible  
- `String text = elementById.getText();` Get the visible text of an element  
- `String attributeValue = elementById.getAttribute("href");` Get the value of an attribute  
- `String cssValue = elementById.getCssValue("color");` Get the value of a CSS property  

## Handling Waits  

### Implicit Wait  
```java  
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));  
```  

### Explicit Wait  
```java  
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));  
WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("dynamicElement")));  
element.click();  
```  

### Fluent Wait  
```java  
Wait<WebDriver> fluentWait = new FluentWait<>(driver)  
        .withTimeout(Duration.ofSeconds(30))  
        .pollingEvery(Duration.ofSeconds(2))  
        .ignoring(NoSuchElementException.class);  

WebElement fluentElement = fluentWait.until(new Function<WebDriver, WebElement>() {  
        public WebElement apply(WebDriver driver) {  
                return driver.findElement(By.id("dynamicElement"));  
        }  
});  
fluentElement.click();  
```  

### Common Expected Conditions  
- `visibilityOfElementLocated()`  
- `presenceOfElementLocated()`  
- `elementToBeClickable()`  
- `textToBePresentInElementLocated()`  
- `titleIs()`  
- `alertIsPresent()`  

## Handling Frames and Windows  

### Frames (iframes)  
```java  
driver.switchTo().frame("frameNameOrId");  
driver.switchTo().frame(driver.findElement(By.tagName("iframe")));  
driver.switchTo().defaultContent();  
```  

### Windows/Tabs  
```java  
String mainWindowHandle = driver.getWindowHandle();  
Set<String> allWindowHandles = driver.getWindowHandles();  

for (String handle : allWindowHandles) {  
        if (!handle.equals(mainWindowHandle)) {  
                driver.switchTo().window(handle);  
                // Perform actions on the new window  
                driver.close();  
                break;  
        }  
}  
driver.switchTo().window(mainWindowHandle);  
```  

## Handling Alerts and Popups  
```java  
Alert alert = driver.switchTo().alert();  
String alertText = alert.getText();  
alert.accept(); // Click "OK"  
alert.dismiss(); // Click "Cancel"  
alert.sendKeys("some text"); // Enter text into a prompt alert  
```  

## Handling Dropdowns (using Select class)  
```java  
WebElement dropdownElement = driver.findElement(By.id("dropdown"));  
Select dropdown = new Select(dropdownElement);  
dropdown.selectByVisibleText("Option 1");  
dropdown.selectByValue("value2");  
dropdown.selectByIndex(2);  
List<WebElement> allOptions = dropdown.getOptions();  
WebElement firstSelectedOption = dropdown.getFirstSelectedOption();  
boolean isMultiple = dropdown.isMultiple();  
```  

## Handling Mouse and Keyboard Actions (using Actions API)  
```java  
Actions actions = new Actions(driver);  
WebElement elementToHover = driver.findElement(By.id("hoverElement"));  
WebElement elementToClickAndHold = driver.findElement(By.id("clickAndHold"));  
WebElement targetElement = driver.findElement(By.id("dropTarget"));  
WebElement sourceElement = driver.findElement(By.id("dragSource"));  

actions.moveToElement(elementToHover).perform(); // Hover over an element  
actions.contextClick(elementToHover).perform(); // Right-click an element  
actions.doubleClick(elementToClickAndHold).perform(); // Double-click an element  
actions.clickAndHold(elementToClickAndHold).perform(); // Click and hold  
actions.release(elementToClickAndHold).perform(); // Release the mouse button  
actions.keyDown(Keys.SHIFT).sendKeys("a").keyUp(Keys.SHIFT).perform(); // Press and hold SHIFT + A  
```  

## Taking Screenshots  
```java  
TakesScreenshot ts = (TakesScreenshot) driver;  
File sourceFile = ts.getScreenshotAs(OutputType.FILE);  
File destinationFile = new File("path/to/screenshot.png");  
try {  
        FileUtils.copyFile(sourceFile, destinationFile); // Need to add Apache Commons IO dependency  
} catch (IOException e) {  
        e.printStackTrace();  
}  
```  

## Common Interview Questions  
- What is Selenium WebDriver and what are its advantages?  
- Explain the Selenium architecture.  
- What are the different locators in Selenium? Which one is preferred and why?  
- What are WebDriver Waits? Explain Implicit Wait, Explicit Wait, and Fluent Wait. When should you use each?  
- How do you handle dynamic web elements in Selenium?  
- How do you interact with different browser elements (input fields, buttons, checkboxes, dropdowns)?  
- How do you handle frames (iframes) and multiple windows/tabs?  
- How do you handle JavaScript alerts and popups?  
- How do you perform mouse and keyboard actions in Selenium?  
- How do you take screenshots in Selenium?  
- What is Page Object Model (POM)? What are its benefits?  
- How do you handle synchronization issues in Selenium?  
- How do you work with different browsers in Selenium?  
- What are Browser Drivers and why are they needed?  
- How do you handle file uploads and downloads using Selenium?  
- How do you retrieve the text and attributes of a WebElement?  
- What are Selenium Exceptions? How do you handle them?  
- How do you integrate Selenium with testing frameworks like JUnit or TestNG?  

## Remember to Mention  
- Your experience with specific Selenium versions and browser drivers.  
- Your understanding and implementation of the Page Object Model.  
- How you handle cross-browser testing.  
- Your experience with different waiting strategies.  
- Any challenges you faced with Selenium and how you resolved them.  
- Your understanding of automation best practices.  