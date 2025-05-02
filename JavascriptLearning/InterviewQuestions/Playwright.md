# Playwright JavaScript Interview Questions and Solutions

## General Questions
1. **What is Playwright, and how does it differ from other browser automation tools like Selenium?**  
  Playwright is a Node.js library for browser automation. Unlike Selenium, it supports modern rendering engines like Chromium, WebKit, and Firefox with a single API. It also provides built-in support for headless execution and advanced features like network interception and tracing.

2. **Can you explain the architecture of Playwright and how it interacts with browsers?**  
  Playwright uses browser-specific DevTools protocols to communicate directly with the browser. It creates isolated browser contexts for each test, ensuring no shared state between tests.

3. **What are the main features of Playwright?**  
  - Cross-browser support (Chromium, WebKit, Firefox)
  - Headless and headed execution
  - Auto-waiting for elements
  - Network interception
  - Built-in test runner (`@playwright/test`)

## Setup and Configuration
1. **How do you install Playwright in a Node.js project?**  
  Run the following command:  
  ```bash
  npm install playwright
  ```

2. **What browsers are supported by Playwright, and how do you configure them?**  
  Playwright supports Chromium, WebKit, and Firefox. You can configure them using the `playwright.config.ts` file or programmatically in your scripts.

3. **How do you launch a browser in headless and headed modes using Playwright?**  
  ```javascript
  const { chromium } = require('playwright');
  const browser = await chromium.launch({ headless: true }); // Headless mode
  const browserHeaded = await chromium.launch({ headless: false }); // Headed mode
  ```

## Scripting and Automation
1. **How do you navigate to a URL and interact with elements in Playwright?**  
  ```javascript
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.click('button#submit');
  ```

2. **What is the difference between `page.click()` and `page.evaluate()`?**  
  - `page.click()`: Directly interacts with the DOM element.
  - `page.evaluate()`: Executes JavaScript code in the browser context.

3. **How do you handle dropdowns, checkboxes, and radio buttons in Playwright?**  
  ```javascript
  await page.selectOption('select#dropdown', 'value');
  await page.check('input#checkbox');
  await page.click('input#radio');
  ```

## Advanced Topics
1. **How do you handle authentication in Playwright tests?**  
  Use browser contexts to store authentication state:  
  ```javascript
  const context = await browser.newContext({ storageState: 'auth.json' });
  ```

2. **What is the purpose of context in Playwright, and how is it used?**  
  Contexts allow isolated sessions within the same browser instance. They are used for multi-user testing or preserving authentication states.

3. **How do you handle file uploads and downloads in Playwright?**  
  - File upload:  
    ```javascript
    await page.setInputFiles('input#file', 'path/to/file.txt');
    ```
  - File download:  
    ```javascript
    const [download] = await Promise.all([
     page.waitForEvent('download'),
     page.click('a#download-link')
    ]);
    await download.saveAs('path/to/save/file.txt');
    ```

## Debugging and Troubleshooting
1. **How do you debug Playwright scripts?**  
  Use the `--debug` flag or add `await page.pause()` in your script to open the Playwright Inspector.

2. **What are some common errors in Playwright, and how do you resolve them?**  
  - Timeout errors: Increase the timeout using `page.setDefaultTimeout()`.
  - Element not found: Use proper selectors and ensure the element is visible.

3. **How do you capture screenshots and videos during test execution?**  
  ```javascript
  await page.screenshot({ path: 'screenshot.png' });
  const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });
  ```

## Test Framework Integration
1. **How do you integrate Playwright with Jest or Mocha?**  
  Install the required packages and configure the test runner to use Playwright APIs.

2. **What is the role of `playwright-test` and how does it simplify testing?**  
  `@playwright/test` is a built-in test runner that provides fixtures, parallel execution, and reporting out of the box.

3. **How do you perform parallel test execution in Playwright?**  
  Use the `workers` option in the Playwright configuration file:  
  ```javascript
  module.exports = { workers: 4 };
  ```

## Best Practices
1. **What are some best practices for writing maintainable Playwright tests?**  
  - Use meaningful test names.
  - Avoid hard-coded values; use environment variables.
  - Modularize reusable code into helper functions.

2. **How do you manage test data and environment variables in Playwright?**  
  Use `.env` files with the `dotenv` package to manage environment variables.

3. **How do you ensure cross-browser compatibility in Playwright tests?**  
  Run tests across all supported browsers using the `projects` configuration:  
  ```javascript
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } }
  ]
  ```
# Playwright JavaScript Interview Questions and Solutions

## I. Fundamentals & Core Concepts:

1.  **What is Playwright? What are its key advantages over other browser automation tools like Selenium?**
    * **Solution:** Playwright is a Node.js library developed by Microsoft that enables reliable end-to-end testing for modern web applications. It supports all major browsers (Chromium, Firefox, and WebKit) with a single API.
    * **Key Advantages over Selenium:**
        * **Cross-browser support with a unified API:** Simplifies writing tests that run consistently across different browsers. Selenium often requires different drivers and can have browser-specific inconsistencies.
        * **Auto-waits:** Playwright automatically waits for elements to be actionable before performing actions, significantly reducing the flakiness associated with explicit waits in Selenium.
        * **Speed and Stability:** Playwright interacts directly with the browser's DevTools protocol, leading to faster and more stable test execution compared to Selenium's WebDriver protocol.
        * **Built-in Features:** Playwright offers many built-in features like network interception, tracing, auto-screenshots, and video recording, often requiring external libraries in Selenium.
        * **Modern Architecture:** Designed for modern web applications and their asynchronous nature.

2.  **Explain the core concepts of Playwright: Browser, BrowserContext, Page, and Worker.**
    * **Solution:**
        * **Browser:** Represents a single instance of a browser (e.g., Chromium, Firefox, or WebKit). You typically launch a browser instance at the beginning of your test suite and close it at the end.
        * **BrowserContext:** Provides an isolated browsing session. It's akin to an incognito window or a new browser profile. Each context has its own cookies, local storage, and other browsing data, ensuring test isolation. You can have multiple contexts within a single browser instance for parallel testing or simulating different user sessions.
        * **Page:** Represents a single tab or window within a BrowserContext. All interactions with the web application (navigating, clicking, typing, asserting) happen within a Page object.
        * **Worker:** In the context of parallel testing with `@playwright/test`, workers are processes that run your test files concurrently. Playwright automatically manages these workers based on your configuration.

3.  **What are Locators in Playwright? How are they different from Selenium's locators?**
    * **Solution:** Locators in Playwright are the primary way to find elements on a web page. They are more powerful and resilient than traditional Selenium locators.
    * **Key Differences from Selenium:**
        * **Auto-waiting:** Playwright locators automatically wait for the element to be visible, enabled, and stable before performing an action. This eliminates the need for many explicit waits.
        * **Actionability Checks:** Playwright performs actionability checks (e.g., is the element visible, enabled, stable, not overlapping other elements?) before attempting an action, leading to more reliable tests.
        * **Playwright-Specific Selectors:** Playwright offers built-in selectors that are more user-centric and less prone to UI changes, such as:
            * `getByRole()`: Selects elements by ARIA role (e.g., button, link).
            * `getByText()`: Selects elements by their visible text content.
            * `getByLabel()`: Selects input elements by their associated label.
            * `getByPlaceholder()`: Selects input elements by their placeholder text.
            * `getByAltText()`: Selects images by their `alt` attribute.
            * `getByTitle()`: Selects elements by their `title` attribute.
        * **Improved Syntax:** Playwright's locator API is often more fluent and readable.

4.  **How does Playwright handle waiting for elements? What are the different types of waits available?**
    * **Solution:** Playwright's automatic waiting mechanism is a core strength. It implicitly waits for elements to be actionable before performing actions. However, you can also use explicit waits when necessary:
        * `locator.waitFor([options])`: Waits for the element matching the locator to satisfy certain conditions (e.g., `visible`, `hidden`, `attached`, `detached`). You can also specify a `timeout`.
        * `page.waitForSelector(selector[, options])`: Similar to `locator.waitFor` but takes a CSS or XPath selector.
        * `page.waitForURL(url[, options])`: Waits for the page URL to match a specific value or pattern.
        * `page.waitForLoadState([state[, options]])`: Waits for the page to reach a specific load state (`domcontentloaded`, `load`, `networkidle`).
        * `page.waitForFunction(pageFunction[, arg[, options]])`: Waits until a JavaScript function running in the browser returns a truthy value. This offers the most flexibility for complex waiting conditions.
        * `page.waitForTimeout(timeout)`: Pauses execution for a specific duration (generally discouraged for production tests as it can make tests slow and less reliable; prefer more targeted waits).

5.  **What are Actions in Playwright? Give examples of common actions you might use.**
    * **Solution:** Actions in Playwright are methods that simulate user interactions with web elements. They are typically performed on a `Locator` object.
    * **Common Actions:**
        * `locator.click([options])`: Clicks an element. Options can include `button` (left, right, middle), `modifiers` (Shift, Control, Alt, Meta), `force` (bypass actionability checks), etc.
        * `locator.fill(value[, options])`: Fills an input field with a value.
        * `locator.type(text[, options])`: Types text into an input field, simulating key presses.
        * `locator.check([options])`: Checks a checkbox or radio button.
        * `locator.uncheck([options])`: Unchecks a checkbox.
        * `locator.selectOption(values[, options])`: Selects options in a `<select>` element by value, label, or index.
        * `locator.hover([options])`: Hovers over an element.
        * `locator.press(key[, options])`: Presses a keyboard key (e.g., 'Enter', 'Tab', 'Escape').
        * `locator.setInputFiles(files[, options])`: Uploads files to an `<input type="file">` element.
        * `page.goto(url[, options])`: Navigates the page to a new URL.
        * `page.goBack([options])`: Navigates back in history.
        * `page.goForward([options])`: Navigates forward in history.
        * `page.reload([options])`: Reloads the current page.
        * `locator.dragAndDrop(target[, options])`: Drags an element to a target element.

6.  **How do you handle asynchronous operations in Playwright? Explain the use of `async/await`.**
    * **Solution:** Playwright heavily relies on asynchronous operations because browser interactions are inherently non-blocking. JavaScript's `async/await` syntax is used to manage these asynchronous tasks in a more synchronous-looking and easier-to-reason-about way.
        * **`async`:** The `async` keyword is used to define a function as asynchronous. An `async` function implicitly returns a Promise.
        * **`await`:** The `await` keyword can only be used inside an `async` function. It pauses the execution of the `async` function until the Promise that follows `await` settles (resolves or rejects). If the Promise resolves, `await` returns the resolved value. If the Promise rejects, it throws an error (which can be caught using `try...catch`).
    * **Example:**
        ```javascript
        async function clickButtonAndGetText() {
          await page.locator('#myButton').click(); // Asynchronous action
          const text = await page.locator('#result').textContent(); // Asynchronous action
          console.log(text);
        }
        ```

7.  **What is a Browser Context in Playwright? When would you use multiple browser contexts?**
    * **Solution:** A BrowserContext provides an isolated browsing environment within a Browser instance. Each context has its own separate storage (cookies, local storage, etc.), history, and other browsing data.
    * **Use Cases for Multiple Browser Contexts:**
        * **Parallel Testing:** Running tests in different contexts allows for true isolation and prevents test interference, enabling efficient parallel execution.
        * **Simulating Different User Sessions:** You can create multiple contexts to simulate different logged-in users or different browser profiles within the same test run.
        * **Testing Multi-User Scenarios:** Simulating interactions from different users concurrently.
        * **Maintaining Clean Test State:** Each context starts with a clean state, reducing the need for extensive setup and teardown within individual tests.

8.  **How do you handle different browsers (Chromium, Firefox, WebKit) with Playwright?**
    * **Solution:** Playwright provides separate launch methods for each browser:
        * `chromium.launch()`
        * `firefox.launch()`
        * `webkit.launch()`
    * You can configure which browser to use when launching the browser instance in your test setup or via command-line arguments when running your tests. Playwright's API is consistent across all supported browsers, allowing you to write tests that work across them with minimal or no modification. You can also run your test suite against multiple browsers in your Playwright configuration.

9.  **Explain Playwright's Selector Engine. What are some of the built-in selector strategies beyond CSS and XPath?**
    * **Solution:** Playwright's Selector Engine is responsible for finding elements on the page. It supports standard CSS and XPath selectors but also offers more powerful and user-friendly built-in selector strategies:
        * **Text Selectors (`text=`):** Selects elements based on their visible text content (exact match or substring). Example: `page.locator('text=Submit')`, `page.locator('text=Log')`.
        * **Role Selectors (`getByRole()`):** Selects elements by their ARIA role, which describes the element's purpose to assistive technologies. Example: `page.getByRole('button', { name: 'Click Me' })`, `page.getByRole('link', { name: 'Learn more' })`.
        * **Label Selectors (`getByLabel()`):** Selects input elements by their associated `<label>` text. Example: `page.getByLabel('Email')`.
        * **Placeholder Selectors (`getByPlaceholder()`):** Selects input elements by their `placeholder` attribute. Example: `page.getByPlaceholder('Enter your email')`.
        * **Alt Text Selectors (`getByAltText()`):** Selects `<img>` elements by their `alt` attribute. Example: `page.getByAltText('Company Logo')`.
        * **Title Selectors (`getByTitle()`):** Selects elements by their `title` attribute. Example: `page.getByTitle('Homepage')`.
        * **Chaining and Filtering:** Playwright allows you to chain and filter locators for more specific targeting (e.g., `page.locator('div').filter({ hasText: 'Specific Text' }).locator('button')`).

10. **How do you interact with iframes in Playwright?**
    * **Solution:** Playwright provides the `frameLocator()` method on the `Page` object to interact with iframes. You pass a selector that identifies the iframe to `frameLocator()`, which returns a `FrameLocator` object. You can then use this `FrameLocator` to find elements within the iframe and perform actions on them.
    * **Example:**
        ```javascript
        const frame = page.frameLocator('#my-iframe');
        await frame.locator('#element-in-frame').click();
        await frame.locator('input[name="frame-input"]').fill('some text');
        ```

11. **How do you handle new browser windows or tabs (popups) in Playwright?**
    * **Solution:** Playwright uses the `page.waitForEvent('popup')` method to handle new browser windows or tabs. This method returns a Promise that resolves with the new `Page` object when the popup is opened. You typically use `Promise.all()` to wait for both the action that triggers the popup and the `popup` event.
    * **Example:**
        ```javascript
        const [popup] = await Promise.all([
          page.waitForEvent('popup'),
          page.locator('#open-popup-button').click(),
        ]);
        await popup.waitForLoadState();
        const popupTitle = await popup.title();
        console.log('Popup Title:', popupTitle);
        await popup.locator('#close-popup-button').click();
        // You can interact with the 'popup' Page object as you would with the main page.
        ```