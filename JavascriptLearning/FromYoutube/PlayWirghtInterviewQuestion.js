// const { defineConfig } = require('@playwright/test');

// // 1. Explain all below over selenium and cypress

// // Why Playwright?
// // 1. Playwirght is Fast
// // 2. own Test runner and builting report
// // 3. cross browser and cross domain testing
// // 4. multiple language binding
// // 5. huge variety of locator-finding strategies
// // 6. supports both Api and web Automation
// // 7. features like codegen, Storage state, trace
// // 8. mock Api
// // 9. Video generation of tests
// // 10.inbuilt wait mechanism
// // 11. Easy integration with CI/CD pipelines
// // 12. Supports mobile emulation
// // 13. Provides network interception capabilities
// // 14. Handles multiple tabs and frames seamlessly
// // 15. Open-source and actively maintained


// // Playwright is a modern end-to-end testing framework that offers several advantages over Selenium and Cypress. 
// // Here's a detailed explanation of the points you listed:

// // 1. **Playwright is Fast**  
// //    - **Over Selenium**: Playwright uses modern browser automation protocols (like CDP for Chromium), which are faster and more reliable than Selenium's WebDriver protocol. Selenium often suffers from latency due to its architecture.
// //    - **Over Cypress**: Cypress runs in the browser context, which can be slower for certain operations compared to Playwright's direct browser control.

// // 2. **Own Test Runner and Built-in Report**  
// //    - **Over Selenium**: Selenium doesn't have a built-in test runner or reporting tools; you need to integrate third-party tools like TestNG or JUnit.
// //    - **Over Cypress**: Cypress has a test runner, but Playwright's test runner is more flexible and supports parallel execution out of the box.

// // 3. **Cross-Browser and Cross-Domain Testing**  
// //    - **Over Selenium**: Selenium supports cross-browser testing but struggles with cross-domain scenarios due to security restrictions.
// //    - **Over Cypress**: Cypress is limited to Chromium-based browsers and has issues with cross-domain testing due to its single-origin policy.

// //    ✅ What to test in Cross-Domain Testing:
// //         CORS configuration (Access-Control-Allow-Origin)
// //         Secure redirection and data transfer
// //         Token or cookie flow between domains
// //         Authentication/Authorization boundaries
// //         No sensitive data leakage in browser network tab

// // 4. **Multiple Language Binding**  
// //    - **Over Selenium**: Selenium also supports multiple languages, but Playwright's bindings (JavaScript, Python, C#, Java) are more modern and consistent.
// //    - **Over Cypress**: Cypress only supports JavaScript/TypeScript.

// // 5. **Huge Variety of Locator-Finding Strategies**  
// //    - **Over Selenium**: Playwright offers advanced locators like `text`, `nth-match`, and `role`, which are more intuitive and powerful than Selenium's basic locators.
// //    - **Over Cypress**: Cypress has limited locator strategies compared to Playwright.

// // 6. **Supports Both API and Web Automation**  
// //    - **Over Selenium**: Selenium is focused solely on web automation.
// //    - **Over Cypress**: Cypress supports API testing but lacks the seamless integration Playwright offers.

// // 7. **Features Like Codegen, Storage State, Trace**  
// //    - **Over Selenium**: Selenium doesn't have built-in tools for generating test scripts (`codegen`) or managing session storage (`storage state`).
// //    - **Over Cypress**: Cypress lacks features like trace viewer for debugging.

// // 8. **Mock API**  
// //    - **Over Selenium**: Selenium doesn't support API mocking.
// //    - **Over Cypress**: Cypress supports API mocking but is less flexible compared to Playwright.

// // 9. **Video Generation of Tests**  
// //    - **Over Selenium**: Selenium requires third-party tools for video recording.
// //    - **Over Cypress**: Cypress supports video recording, but Playwright's implementation is more customizable.

// // 10. **Inbuilt Wait Mechanism**  
// //     - **Over Selenium**: Selenium relies on explicit or implicit waits, which can be error-prone.
// //     - **Over Cypress**: Cypress has automatic waits, but Playwright's wait mechanism is more robust and customizable.

// // 11. **Easy Integration with CI/CD Pipelines**  
// //     - **Over Selenium**: Selenium requires additional setup for CI/CD integration.
// //     - **Over Cypress**: Cypress also integrates well with CI/CD, but Playwright's lightweight architecture makes it easier to configure.

// // 12. **Supports Mobile Emulation**  
// //     - **Over Selenium**: Selenium supports mobile emulation but requires additional tools like Appium.
// //     - **Over Cypress**: Cypress has limited support for mobile emulation compared to Playwright.

// // 13. **Provides Network Interception Capabilities**  
// //     - **Over Selenium**: Selenium doesn't support network interception.
// //     - **Over Cypress**: Cypress supports network interception but is less flexible than Playwright.

// // 14. **Handles Multiple Tabs and Frames Seamlessly**  
// //     - **Over Selenium**: Selenium can handle tabs and frames but requires more manual effort.
// //     - **Over Cypress**: Cypress struggles with multiple tabs due to its single-browser context.

// // 15. **Open-Source and Actively Maintained**  
// //     - **Over Selenium**: Selenium is also open-source but has slower updates compared to Playwright.
// //     - **Over Cypress**: Cypress is open-source but has a smaller community and slower feature adoption compared to Playwright.

// // In summary, Playwright is a modern, feature-rich framework that addresses many of the limitations of Selenium and Cypress, making it a strong choice for end-to-end testing.



// // 2. How do you run failed Test cases

// // To run failed test cases in Playwright, you can use the `--retries` option in the Playwright Test Runner. This allows you to automatically retry failed tests  until they pass or until the specified number of retries is reached.
// // by Default Failing tests are not retried.

// // Example:

// // npx playwright test --retries=2


// // 3. How do you handle 2 tabs or windows

// // To handle multiple tabs or windows in Playwright, you can use the `context` object. The `context` represents a browser context, and you can create or listen for new pages (tabs) within it. Here's an example:

// // Example: Handling multiple tabs or windows in Playwright

// const { chromium } = require('playwright');

// (async () => {
//    const browser = await chromium.launch({ headless: false });
//    const context = await browser.newContext();

//    // Open the first tab
//    const page1 = await context.newPage();
//    await page1.goto('https://example.com');

//    // Listen for a new tab (page) being opened
//    const [newPage] = await Promise.all([
//       context.waitForEvent('page'), // Wait for a new page event
//       page1.click('a[target="_blank"]') // Simulate clicking a link that opens a new tab
//    ]);

//    // Interact with the new tab
//    await newPage.waitForLoadState();
//    console.log(await newPage.title());

//    await browser.close();
// })();


// // ### Explanation:
// // 1. **Browser Context**: A context isolates browser sessions, allowing you to manage multiple tabs or windows.
// // 2. **`waitForEvent('page')`**: This waits for a new page (tab) to be created.
// // 3. **`click('a[target="_blank"]')`**: Simulates clicking a link that opens a new tab.
// // 4. **`newPage.waitForLoadState()`**: Ensures the new tab has fully loaded before interacting with it.

// // This approach ensures you can handle multiple tabs or windows effectively.


// // How to generate a Report

// // Playwright Test Runner automatically generates an HTML report for your test runs.
// // To enable the report, you need to configure it in the `playwright.config.js` file.

// // Example: Configuring the report in `playwright.config.js`

// module.exports = defineConfig({
//    reporter: [
//       ["dot"], //->concole
//       ["json", {
//          outputFile: "test_result.json" // -> JSON
//       }],
//       ['html', {
//          outputFolder: 'playwright-report',
//          open: "always"
//       }]], // Generates an HTML report
// });

// // After running your tests, the report will be available in the specified folder (e.g., `playwright-report`).

// // To view the report, you can open the `index.html` file in a browser.

// // Example: Running tests and generating the report
// // npx playwright test

// // This will execute the tests and generate the report in the configured folder.


// 5. What is the difference between npm and npx

// **npm**: 
// - Stands for Node Package Manager.
// - Used to install, manage, and update packages globally or locally in a project.
// - Example: `npm install <package-name>` installs a package.

// **npx**: 
// - Stands for Node Package Execute.
// - Used to execute binaries from npm packages without globally installing them.
// - Example: `npx <package-name>` runs the package directly without installing it globally.

// **Key Difference**:
// - `npm` is for managing packages, while `npx` is for executing packages.
