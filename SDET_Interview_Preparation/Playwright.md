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

## II. Advanced Topics & Techniques:

12. **How do you handle authentication in Playwright tests?**
    * **Solution:** Playwright offers several ways to handle authentication:
        * **`context.storageState([options])`:** This is the recommended approach. After manually logging in once in a setup step, you can save the browser context's storage state (cookies, local storage, etc.) to a file. In subsequent tests, you can load this saved state into a new browser context, effectively bypassing the login process. This is fast and reliable.
        * **Programmatic Login:** You can automate the login process directly in your tests using Playwright's actions (`page.goto()`, `page.fill()`, `page.click()`). However, this can be slower and more prone to UI changes.
        * **API-based Login:** If the application exposes an API for authentication, you can use Playwright's `browser.request` to authenticate programmatically and then set the necessary cookies or tokens in the browser context.

13. **Explain how you can mock network requests and responses using Playwright. Why is this useful?**
    * **Solution:** Playwright's `page.route(url, handler)` allows you to intercept network requests matching a specific URL (or pattern) and provide a custom response.
    * **Why it's useful:**
        * **Isolating Tests:** You can isolate your UI tests from the backend dependencies, making them faster and more reliable.
        * **Testing Edge Cases and Errors:** You can simulate error responses or specific data scenarios that might be difficult to trigger in the actual application.
        * **Improving Performance:** By mocking slow or external resources, you can speed up test execution.
        * **Controlling Test Data:** You can ensure your tests are working with consistent and predictable data.
    * **Example:**
        ```javascript
        await page.route('**/api/users', async (route) => {
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([{ id: 1, name: 'Mock User' }]),
          });
        });
        await page.goto('/users');
        // The page will now display the mocked user data.
        ```

14. **How can you intercept and modify network requests?**
    * **Solution:** Similar to mocking, `page.route(url, handler)` can also be used to intercept and modify requests before they are sent. The `handler` function receives a `route` object, which provides methods to `continue()` the request (optionally with modified headers or body), `fulfill()` with a custom response, or `abort()` the request.
    * **Example:**
        ```javascript
        await page.route('**/api/items/*', async (route) => {
          const request = route.request();
          const headers = { ...request.headers(), 'Authorization': 'Bearer my-test-token' };
          await route.continue({ headers });
        });
        await page.goto('/items'); // All requests to /api/items/* will now have the added Authorization header.
        ```

15. **What is Playwright's Tracing feature? How can it be used for debugging?**
    * **Solution:** Playwright's Tracing feature records a detailed log of everything that happens during a test execution, including browser actions, network requests, console logs, and screenshots at each step.
    * **Debugging Usage:**
        * **Step-by-step Replay:** You can replay the trace in the Playwright Inspector, stepping through each action and observing the state of the application at that point.
        * **Network Inspection:** Examine all network requests and responses, including headers and bodies.
        * **Console Logs:** View any `console.log` statements from the browser.
        * **Screenshots:** See a visual snapshot of the page at each action.
        * **Error Analysis:** Understand exactly what happened leading up to a test failure.
        * **Performance Analysis:** Identify potential performance bottlenecks.
    * Tracing can be enabled in the Playwright configuration or programmatically within your tests. You can then view the trace using the Playwright CLI (`npx playwright show-trace <trace_file>`).

16. **How do you handle file uploads and downloads in Playwright?**
    * **Solution:**
        * **File Uploads:** Use the `locator.setInputFiles(files)` method on an `<input type="file">` element. The `files` argument can be a string (path to a single file) or an array of strings (paths to multiple files).
            ```javascript
            await page.locator('input[type="file"]').setInputFiles('path/to/your/file.pdf');
            ```
        * **File Downloads:** Use `page.on('download', async (download) => { ... })` to listen for download events. When an action triggers a download, the callback function will receive a `Download` object, which provides methods to get the downloaded file path (`download.path()`), save the file to a specific location (`download.saveAs(path)`), get the suggested filename (`download.suggestedFilename()`), and more. You typically use `Promise.all()` to wait for both the action that triggers the download and the `download` event.
            ```javascript
            const [download] = await Promise.all([
              page.waitForEvent('download'),
              page.locator('#download-button').click(),
            ]);
            const suggestedFilename = await download.suggestedFilename();
            await download.saveAs(`downloads/${suggestedFilename}`);
            ```

17. **How can you handle dialogs (alert, confirm, prompt) in Playwright?**
    * **Solution:** Playwright provides the `page.on('dialog', async (dialog) => { ... })` event listener to handle JavaScript dialogs. When a dialog appears, the callback function receives a `Dialog` object, which has properties like `type` (`alert`, `confirm`, `prompt`), `message`, and methods like `accept([promptText])` and `dismiss()`.
    * **Example:**
        ```javascript
        page.on('dialog', async (dialog) => {
          console.log(`Dialog type: ${dialog.type}, message: ${dialog.message}`);
          if (dialog.type === 'confirm') {
            await dialog.accept();
          } else if (dialog.type === 'prompt') {
            await dialog.accept('user input');
          } else {
            await dialog.dismiss();
          }
        });
        await page.locator('#trigger-alert').click();
        await page.locator('#trigger-confirm').click();
        await page.locator('#trigger-prompt').click();
        ```

18. **How do you run Playwright tests in parallel? What are the benefits?**
    * **Solution:** Parallel execution is configured in the `playwright.config.js` file using the `workers` option. You can set it to a number (e.g., `workers: 4` to run on 4 parallel processes) or a percentage of your CPU cores.
    * **Benefits:**
        * **Reduced Test Execution Time:** Running tests concurrently significantly speeds up the overall test suite execution, especially for large test sets.
        * **Faster Feedback:** Developers and stakeholders get quicker feedback on the quality of the application.
        * **Improved Efficiency:** Makes the testing process more efficient.
    * Playwright automatically manages the distribution of test files across the specified number of workers. Using isolated `BrowserContext` for each worker ensures test independence.

19. **How do you generate test reports with Playwright? What are some common reporters?**
    * **Solution:** Playwright uses reporters to output test results. You configure the reporters in the `playwright.config.js` file's `reporter` option, which is an array of reporter names or configurations.
    * **Common Reporters:**
        * **`'list'` (default):** Outputs a simple list of test results to the console.
        * **`'html'`:** Generates an interactive HTML report with detailed information about each test, including steps, screenshots, and traces. This is very useful for debugging and analysis.
        * **`'junit'`:** Generates a JUnit XML report, which is a standard format often used for integration with CI/CD systems.
        * **`'json'`:** Generates a JSON report containing the test results.
        * You can also create custom reporters.

20. **How do you configure Playwright tests (e.g., timeouts, base URL, browser launch options)?**
    * **Solution:** Playwright tests are configured through the `playwright.config.js` file at the root of your project. This file exports a configuration object that allows you to set various options, including:
        * **`timeout`:** The default timeout for actions and assertions (in milliseconds).
        * **`expect`:** Configuration options for the built-in `expect` assertions (e.g., `timeout`).
        * **`use`:** Options that apply to all tests, such as `baseURL`, `browserName`, `headless`, `viewport`, `storageState`, `trace`, `screenshot`, `video`, `slowMo`, `launchOptions` (for browser-specific launch arguments).
        * **`projects`:** An array of project configurations, allowing you to define different settings for running tests on different browsers or environments.
        * **`workers`:** The number of parallel workers to use.
        * **`reporter`:** The list of reporters to use.
        * **`testDir`:** The directory containing your test files.
        * **`outputDir`:** The directory for test artifacts (screenshots, videos, traces).

21. **How can you take screenshots and videos of your Playwright tests?**
    * **Solution:**
        * **Screenshots:**
            * **On Failure:** Configure `'on'` for the `screenshot` option in `playwright.config.js` to automatically take screenshots of failing tests. You can also set it to `'off'` or `'only-on-failure'`.
            * **Programmatically:** Use `await page.screenshot({ path: 'path/to/screenshot.png' })` to take a screenshot at a specific point in your test. You can customize options like `fullPage`.
        * **Videos:**
            * Configure `'on'` for the `video` option in `playwright.config.js` to record videos of test executions. You can set it to `'off'`, `'retain-on-failure'`, or `'on-first-retry'`. Videos are saved in the `test-results` directory.

22. **How do you handle cross-browser testing strategies with Playwright?**
    * **Solution:** Playwright makes cross-browser testing relatively straightforward due to its unified API. Common strategies include:
        * **Running all tests on all supported browsers:** Configure multiple projects in `playwright.config.js`, each targeting a different browser (`chromium`, `firefox`, `webkit`).
        * **Targeting specific browsers based on requirements:** Run tests against the browsers that are most critical for your application's user base.
        * **Using conditional logic (if necessary):** In rare cases where browser-specific behavior needs to be handled differently, you can use `browserName()` to conditionally execute code. However, the goal should be to write tests that work consistently across browsers.
        * **Analyzing reports across browsers:** Playwright's HTML report helps you compare test results across different browsers.

23. **How can you integrate Playwright tests into a CI/CD pipeline?**
    * **Solution:** Playwright tests can be easily integrated into most CI/CD platforms (e.g., Jenkins, GitLab CI, GitHub Actions, CircleCI). The general steps involve:
        * **Setting up Node.js and Playwright in the CI/CD environment.**
        * **Checking out your test code.**
        * **Installing Playwright browsers:** Use `npx playwright install --with-deps` to install the necessary browser binaries.
        * **Running your Playwright tests:** Execute your tests using the Playwright CLI command (e.g., `npx playwright test`).
        * **Generating and publishing test reports:** Configure the `junit` or `html` reporter to generate reports that can be consumed by the CI/CD platform.
        * **Handling test failures:** Configure the CI/CD pipeline to fail the build if any tests fail.

24. **What are Playwright fixtures? How can they be used for setup and teardown?**
    * **Solution:** Playwright fixtures are a powerful mechanism for managing test setup and teardown, sharing test state, and creating reusable test components. They are functions decorated with `@playwright/test` annotations.
    * **Setup and Teardown:** Fixtures can define setup logic that runs before each test that uses them and teardown logic that runs after the test, regardless of its outcome. You can use `yield` within a fixture to separate the setup from the teardown. The value before `yield` is provided to the test, and the code after `yield` is the teardown.
    * **Example:**
        ```javascript
        const { test } = require('@playwright/test');

        const loggedInPage = test.extend({
          page: async ({ page }, use) => {
            await page.goto('/login');
            await page.fill('#username', 'testuser');
            await page.fill('#password', 'password');
            await page.click('button[type="submit"]');
            await page.waitForURL('/dashboard');
            await use(page); // Provide the logged-in page to the test
            await page.locator('#logout-button').click(); // Teardown
          },
        });

        loggedInPage('can access dashboard', async ({ loggedInPage }) => {
          await loggedInPage.locator('#dashboard-title').isVisible();
        });
        ```

25. **How can you share state between tests using fixtures?**
    * **Solution:** Playwright fixtures can share state at different scopes:
        * **`scope: 'test'` (default):** A new instance of the fixture is created for each test that uses it.
        * **`scope: 'worker'`:** A single instance of the fixture is created per worker process. This is useful for sharing resources that can be reused across tests within the same worker (e.g., a single browser instance).
        * **`scope: 'session'`:** A single instance of the fixture is created for the entire test session. This is suitable for sharing expensive resources that should only be initialized once (e.g., a database connection).
    * You can define the scope when extending the base `test` object.

This covers the advanced topics. We're making good progress! Are you ready for the final set of questions focusing on testing strategies and best practices?


# Playwright Interview Questions and Solutions  

## Questions and Solutions  

### 1. How is Playwright different from other browser automation tools like Selenium?  
**Solution:**  
Playwright supports multiple browsers (Chromium, Firefox, WebKit) with a single API, provides built-in support for modern web features like shadow DOM and iframes, and offers better performance with headless execution.  

### 2. What are the supported browsers in Playwright?  
**Solution:**  
Playwright supports Chromium, Firefox, and WebKit.  

### 3. How do you install Playwright?  
**Solution:**  
Run the following command:  
```bash  
npm install playwright  
```  

### 4. What are the Key features of the Playwright test automation tool?  
**Solution:**  
- Cross-browser support  
- Auto-waiting for elements  
- Built-in test runner  
- Network interception  
- Emulation of devices  

### 5. What are the different testing types the Playwright supports?  
**Solution:**  
- Functional testing  
- End-to-end testing  
- Visual regression testing  

### 6. What is a Configuration File in Playwright Framework?  
**Solution:**  
A configuration file (e.g., `playwright.config.ts`) is used to define global settings like browser options, test directory, and timeouts.  

### 7. What are some common locator strategies used in Playwright?  
**Solution:**  
- CSS selectors  
- XPath  
- Text selectors  
- Role selectors  

### 8. What are Playwright Selectors?  
**Solution:**  
Selectors are used to locate elements on a page. Playwright supports text, CSS, XPath, and custom selectors.  

### 9. What languages does the Playwright tool support?  
**Solution:**  
Playwright supports JavaScript, TypeScript, Python, Java, and C#.  

### 10. How to record and Play scripts in Playwright?  
**Solution:**  
Use the Playwright CLI to record scripts:  
```bash  
npx playwright codegen  
```  

### 11. What is the difference between `fill()` and `type()`?  
**Solution:**  
- `fill()`: Clears the input field and types the text.  
- `type()`: Types the text without clearing the field.  

### 12. What is the default timeout for the playwright page?  
**Solution:**  
The default timeout is 30 seconds.  

### 13. What is the default timeout for assertions in Playwright?  
**Solution:**  
The default timeout for assertions is 5 seconds.  

### 14. How do you verify a URL in Playwright?  
**Solution:**  
Use the `expect` assertion:  
```javascript  
await expect(page).toHaveURL('https://example.com');  
```  

### 15. How to perform click actions in Playwright?  
**Solution:**  
Use the `click()` method:  
```javascript  
await page.click('selector');  
```  

### 16. What are soft assertions?  
**Solution:**  
Soft assertions do not stop the test execution even if they fail.  

### 17. What is the difference between `innerText()` and `textContent()` in Playwright?  
**Solution:**  
- `innerText()`: Returns visible text.  
- `textContent()`: Returns all text, including hidden text.  

### 18. What is the difference between `locator()` and `locateAll()`?  
**Solution:**  
- `locator()`: Finds a single element.  
- `locateAll()`: Finds multiple elements.  

### 19. What are the different commands used to select a dropdown list using Playwright?  
**Solution:**  
- `selectOption()`  
- `click()` and `type()`  

### 20. How to locate an element using compound selectors in the Playwright Framework?  
**Solution:**  
Use `>>` to combine selectors:  
```javascript  
await page.locator('div >> text="Submit"');  
```  

### 21. What is the purpose of the `waitForFunction` method in Playwright, and how is it used?  
**Solution:**  
It waits for a custom condition to be true:  
```javascript  
await page.waitForFunction(() => document.title === 'Expected Title');  
```  

### 22. Explain `WaitFor()` in Playwright.  
**Solution:**  
`WaitFor()` waits for specific conditions like element visibility or network idle.  

### 23. How to perform scrolling in Playwright?  
**Solution:**  
Use the `evaluate()` method:  
```javascript  
await page.evaluate(() => window.scrollBy(0, 500));  
```  

### 24. How to retry failed test cases in Playwright?  
**Solution:**  
Use the `retries` option in the configuration file:  
```javascript  
retries: 2  
```  

### 25. Name a few Playwright exceptions.  
**Solution:**  
- TimeoutError  
- ElementHandleError  
- NavigationError  

### 26. How to save a screenshot to the path?  
**Solution:**  
```javascript  
await page.screenshot({ path: 'screenshot.png' });  
```  

### 27. How to take partial screenshots with the Playwright?  
**Solution:**  
```javascript  
await page.locator('selector').screenshot({ path: 'partial.png' });  
```  

### 28. What is Browser Context in Playwright?  
**Solution:**  
A browser context is an isolated environment for running tests, similar to an incognito window.  

### 29. How to automate alert popups in Playwright?  
**Solution:**  
Use the `on('dialog')` event:  
```javascript  
page.on('dialog', dialog => dialog.accept());  
```  

### 30. How do I run tests parallel in the Playwright framework?  
**Solution:**  
Set `workers` in the configuration file:  
```javascript  
workers: 4  
```  

### 31. How to execute Playwright tests in parallel mode from a single test file?  
**Solution:**  
Use the `test.describe.parallel` block.  

### 32. How to execute Playwright tests in Serial mode from a single test file?  
**Solution:**  
Use the `test.describe.serial` block.  

### 33. How to download a file using Playwright?  
**Solution:**  
```javascript  
const [download] = await Promise.all([  
    page.waitForEvent('download'),  
    page.click('selector')  
]);  
await download.saveAs('filePath');  
```  

### 34. How to attach a file in the HTML report?  
**Solution:**  
Use the `attachments` property in the test results.  

### 35. How to generate and share the Allure report/HTML report in the Playwright framework?  
**Solution:**  
Install the Allure plugin and configure it in the `playwright.config.ts` file.  
