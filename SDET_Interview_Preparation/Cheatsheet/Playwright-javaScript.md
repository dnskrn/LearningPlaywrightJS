# Playwright JavaScript Guide  

## Core Concepts  
- **Browser**: Represents a browser instance (Chromium, Firefox, WebKit).  
- **BrowserContext**: An isolated browsing session with its own cookies, storage.  
- **Page**: A single tab or window within a BrowserContext.  
- **Locator**: A powerful way to find elements on a page (auto-waits, resilient).  
- **Actions**: Methods to interact with elements (click, fill, check, etc.).  
- **Assertions**: Using testing frameworks (e.g., Jest, Mocha with Chai) to verify state.  
- **Waits**: Handling dynamic elements and page loads.  
- **Network Interception**: Mocking or observing network requests.  
- **Tracing**: Recording test execution for debugging.  

## Setting up Playwright  
```javascript  
const { chromium, firefox, webkit } = require('playwright');  
async function main() {  
    const browser = await chromium.launch(); // Or firefox.launch(), webkit.launch()  
    const context = await browser.newContext();  
    const page = await context.newPage();  
    await page.goto('https://example.com');  
    // ... your automation code ...  
    await browser.close();  
}  
main();  
```  

## Locators (Finding Elements)  
- `await page.locator('#id');` By ID (CSS Selector)  
- `await page.locator('.class');` By Class (CSS Selector)  
- `await page.locator('text=Welcome');` By exact text  
- `await page.locator('text=Welc');` By substring text  
- `await page.locator('button:has-text("Click Me")');` Text within an element  
- `await page.locator('a[href="/about"]');` By attribute (CSS Selector)  
- `await page.locator('xpath=//button[@id="submit"]');` By XPath (less preferred)  
- `await page.locator(':nth-match(div, 2)');` Nth matching element (Playwright-specific)  
- `await page.locator(':scope > li');` Direct children (Playwright-specific)  
- `await page.locator('button').first();`  
- `await page.locator('button').last();`  
- `await page.locator('li').nth(2);` Get the third list item (0-based index)  
- `await page.locator('input[name="username"]').fill('testuser');` Combined action and locator  
- `await page.locator('label:has-text("Email") input');` Find input within a label  
- `await page.getByRole('button', { name: 'Submit' });` Semantic role-based selector  
- `await page.getByText('Click Here');` Get by visible text content  
- `await page.getByLabel('Username');`  
- `await page.getByPlaceholder('Enter your email');`  
- `await page.getByAltText('Logo');`  
- `await page.getByTitle('Homepage');`  

## Basic Actions  
- `await page.goto('https://example.com');` Navigate to a URL  
- `const title = await page.title();` Get page title  
- `const url = await page.url();` Get current URL  
- `await page.click('#submit-button');` Click an element  
- `await page.fill('#username', 'testuser');` Fill an input field  
- `await page.type('#password', 'secure');` Type text (simulates user typing)  
- `await page.check('#remember-me');` Check a checkbox  
- `await page.uncheck('#remember-me');` Uncheck a checkbox  
- `await page.selectOption('#dropdown', 'value1');` Select dropdown option by value  
- `await page.selectOption('#dropdown', { label: 'Option Text' });` Select by label  
- `await page.selectOption('#dropdown', { index: 2 });` Select by index  
- `await page.hover('#menu-item');` Hover over an element  
- `await page.press('Enter');` Press a keyboard key  
- `await page.press('Shift+Tab');` Press multiple keys  
- `await page.setInputFiles('#file-upload', 'path/to/file.txt');` Upload a file  
- `await page.goBack();`  
- `await page.goForward();`  
- `await page.reload();`  

## File Download and Upload  
### Downloading a File  
```javascript  
const [download] = await Promise.all([  
    page.waitForEvent('download'),  
    page.click('#download-button'), // Trigger the download  
]);  
const path = await download.path();  
console.log(`File downloaded to: ${path}`);  
```  

### Uploading a File  
```javascript  
await page.setInputFiles('#file-upload', 'path/to/file.txt');  
console.log('File uploaded successfully');  
```  

## Assertions (using Jest/Expect)  
```javascript  
const { expect } = require('@playwright/test');  
await expect(page).toHaveTitle('Example Domain');  
await expect(page).toHaveURL('https://example.com/login');  
await expect(page.locator('#welcome-message')).toBeVisible();  
await expect(page.locator('#logout-button')).toBeEnabled();  
await expect(page.locator('#username')).toHaveValue('testuser');  
await expect(page.locator('.error-message')).toHaveText('Invalid credentials');  
await expect(await page.locator('li').count()).toBeGreaterThan(2);  
await expect(await page.locator('img').getAttribute('src')).toContain('logo.png');  
await expect(page.locator('#my-checkbox')).toBeChecked();  
await expect(page.locator('#my-dropdown')).toHaveValue('value1');  
```  

## Waits (Handling Dynamic Content)  
```javascript 
- `await page.waitForSelector('#dynamic-element', { state: 'visible' });` Wait for element to be visible  
- `await page.waitForSelector('#loading-spinner', { state: 'detached' });` Wait for element to be removed  
- `await page.waitForTimeout(2000);` Wait for a fixed time (generally avoid for stability)  
- `await page.waitForURL('https://example.com/dashboard');` Wait for URL to change  
- `await page.waitForLoadState('domcontentloaded');` Wait for initial HTML to be loaded  
- `await page.waitForLoadState('load');` Wait for all resources to be loaded  
- `await page.waitForFunction(() => document.title === 'New Title');` Wait based on a JavaScript condition
```

## Frames and Popups  
### Frames (iframes)  
```javascript  
const frame = await page.frameLocator('#my-frame');  
await frame.locator('input').fill('text in frame');  
```  

### Popups/New Windows  
```javascript  
const [popup] = await Promise.all([  
    page.waitForEvent('popup'),  
    page.locator('#open-popup').click(),  
]);  
await popup.waitForLoadState();  
await popup.locator('#popup-button').click();  
await popup.close();  
```  

## Network Interception (Mocking)  
```javascript  
await page.route('*api/users*', async route => {  
    await route.fulfill({  
        status: 200,  
        contentType: 'application/json',  
        body: JSON.stringify([{ id: 1, name: 'Mocked User' }]),  
    });  
});  
await page.route('*api/products/123', route => route.abort()); // Block a request  
await page.goto('/users'); // Will now receive mocked data  
```  

## Tracing (Debugging)  
```javascript  
await page.tracing.start({ screenshots: true, snapshots: true });  
await page.goto('https://example.com/login');  
await page.fill('#username', 'testuser');  
await page.click('#login-button');  
await page.tracing.stop({ path: 'trace.zip' }); // Save trace to a file  
```  

## Configuration (Playwright Test Runner - `playwright.config.ts/js`)  
### Example Configuration File  
```javascript  
import { defineConfig } from '@playwright/test';  

export default defineConfig({  
    testDir: './tests',  
    fullyParallel: true, // Run tests in parallel  
    workers: process.env.CI ? 2 : undefined, // Limit workers in CI  
    reporter: 'html', // Use HTML reporter  
    use: {  
        baseURL: 'https://example.com',  
        headless: !process.env.DEBUG, // Run headless by default, unless DEBUG env var is set  
        viewport: { width: 1280, height: 720 },  
        trace: 'on-first-retry', // Capture trace on first failure  
    },  
});  
```  

### Using Configuration in Tests  
```javascript  
// Run tests using the configuration file  
npx playwright test --config=playwright.config.ts  
```  

## Common Interview Questions  
- What are the core concepts of Playwright?  
- How do you locate elements effectively in Playwright?  
- How do you handle asynchronous operations and waits?  
- How do you perform assertions in your tests?  
- How do you handle frames and popups?  
- How can you mock API responses using Playwright?  
- What are the benefits of using Playwright over other automation tools?  
- How do you configure and run Playwright tests?  
- How do you debug Playwright tests?  

### Tips for Interviews  
- Mention your experience with Playwright.  
- Highlight why you prefer Playwright (auto-waits, reliability, speed, cross-browser support).  
- Explain how you structure your tests (e.g., using POM).  
- Discuss your approach to handling dynamic elements and flaky tests.  
- Share any advanced features you've used (e.g., tracing, network interception).  

Good luck with your interview!  


# Playwright JavaScript Guide  

## Core Concepts  
- **Browser**: Represents a browser instance (Chromium, Firefox, WebKit).  
- **BrowserContext**: An isolated browsing session with its own cookies, storage.  
- **Page**: A single tab or window within a BrowserContext.  
- **Locator**: A powerful way to find elements on a page (auto-waits, resilient).  
- **Actions**: Methods to interact with elements (click, fill, check, etc.).  
- **Assertions**: Using testing frameworks (e.g., Jest, Mocha with Chai) to verify state.  
- **Waits**: Handling dynamic elements and page loads.  
- **Network Interception**: Mocking or observing network requests.  
- **Tracing**: Recording test execution for debugging.  

## Setting up Playwright  
```javascript  
const { chromium, firefox, webkit } = require('playwright');  
async function main() {  
    const browser = await chromium.launch(); // Or firefox.launch(), webkit.launch()  
    const context = await browser.newContext();  
    const page = await context.newPage();  
    await page.goto('https://example.com');  
    // ... your automation code ...  
    await browser.close();  
}  
main();  
```  

## Locators (Finding Elements)  
- `await page.locator('#id');` By ID (CSS Selector)  
- `await page.locator('.class');` By Class (CSS Selector)  
- `await page.locator('text=Welcome');` By exact text  
- `await page.locator('text=Welc');` By substring text  
- `await page.locator('button:has-text("Click Me")');` Text within an element  
- `await page.locator('a[href="/about"]');` By attribute (CSS Selector)  
- `await page.locator('xpath=//button[@id="submit"]');` By XPath (less preferred)  
- `await page.locator(':nth-match(div, 2)');` Nth matching element (Playwright-specific)  
- `await page.locator(':scope > li');` Direct children (Playwright-specific)  
- `await page.locator('button').first();`  
- `await page.locator('button').last();`  
- `await page.locator('li').nth(2);` Get the third list item (0-based index)  
- `await page.locator('input[name="username"]').fill('testuser');` Combined action and locator  
- `await page.locator('label:has-text("Email") input');` Find input within a label  
- `await page.getByRole('button', { name: 'Submit' });` Semantic role-based selector  
- `await page.getByText('Click Here');` Get by visible text content  
- `await page.getByLabel('Username');`  
- `await page.getByPlaceholder('Enter your email');`  
- `await page.getByAltText('Logo');`  
- `await page.getByTitle('Homepage');`  

## Basic Actions  
- `await page.goto('https://example.com');` Navigate to a URL  
- `const title = await page.title();` Get page title  
- `const url = await page.url();` Get current URL  
- `await page.click('#submit-button');` Click an element  
- `await page.fill('#username', 'testuser');` Fill an input field  
- `await page.type('#password', 'secure');` Type text (simulates user typing)  
- `await page.check('#remember-me');` Check a checkbox  
- `await page.uncheck('#remember-me');` Uncheck a checkbox  
- `await page.selectOption('#dropdown', 'value1');` Select dropdown option by value  
- `await page.selectOption('#dropdown', { label: 'Option Text' });` Select by label  
- `await page.selectOption('#dropdown', { index: 2 });` Select by index  
- `await page.hover('#menu-item');` Hover over an element  
- `await page.press('Enter');` Press a keyboard key  
- `await page.press('Shift+Tab');` Press multiple keys  
- `await page.setInputFiles('#file-upload', 'path/to/file.txt');` Upload a file  
- `await page.goBack();`  
- `await page.goForward();`  
- `await page.reload();`  

## Assertions (using Jest/Expect)  
```javascript  
const { expect } = require('@playwright/test');  
await expect(page).toHaveTitle('Example Domain');  
await expect(page).toHaveURL('https://example.com/login');  
await expect(page.locator('#welcome-message')).toBeVisible();  
await expect(page.locator('#logout-button')).toBeEnabled();  
await expect(page.locator('#username')).toHaveValue('testuser');  
await expect(page.locator('.error-message')).toHaveText('Invalid credentials');  
await expect(await page.locator('li').count()).toBeGreaterThan(2);  
await expect(await page.locator('img').getAttribute('src')).toContain('logo.png');  
await expect(page.locator('#my-checkbox')).toBeChecked();  
await expect(page.locator('#my-dropdown')).toHaveValue('value1');  
```  

## Waits (Handling Dynamic Content)  
- `await page.waitForSelector('#dynamic-element', { state: 'visible' });` Wait for element to be visible  
- `await page.waitForSelector('#loading-spinner', { state: 'detached' });` Wait for element to be removed  
- `await page.waitForTimeout(2000);` Wait for a fixed time (generally avoid for stability)  
- `await page.waitForURL('https://example.com/dashboard');` Wait for URL to change  
- `await page.waitForLoadState('domcontentloaded');` Wait for initial HTML to be loaded  
- `await page.waitForLoadState('load');` Wait for all resources to be loaded  
- `await page.waitForFunction(() => document.title === 'New Title');` Wait based on a JavaScript condition  

## Frames and Popups  
### Frames (iframes)  
```javascript  
const frame = await page.frameLocator('#my-frame');  
await frame.locator('input').fill('text in frame');  
```  

### Popups/New Windows  
```javascript  
const [popup] = await Promise.all([  
    page.waitForEvent('popup'),  
    page.locator('#open-popup').click(),  
]);  
await popup.waitForLoadState();  
await popup.locator('#popup-button').click();  
await popup.close();  
```  

## Network Interception (Mocking)  
```javascript  
await page.route('*api/users*', async route => {  
    await route.fulfill({  
        status: 200,  
        contentType: 'application/json',  
        body: JSON.stringify([{ id: 1, name: 'Mocked User' }]),  
    });  
});  
await page.route('*api/products/123', route => route.abort()); // Block a request  
await page.goto('/users'); // Will now receive mocked data  
```  

## Tracing (Debugging)  
```javascript  
await page.tracing.start({ screenshots: true, snapshots: true });  
await page.goto('https://example.com/login');  
await page.fill('#username', 'testuser');  
await page.click('#login-button');  
await page.tracing.stop({ path: 'trace.zip' }); // Save trace to a file  
```  

## Configuration (Playwright Test Runner - `playwright.config.ts/js`)  
```javascript  
import { defineConfig } from '@playwright/test';  

export default defineConfig({  
    testDir: './tests',  
    fullyParallel: true, // Run tests in parallel  
    workers: process.env.CI ? 2 : undefined, // Limit workers in CI  
    reporter: 'html', // Use HTML reporter  
    use: {  
        baseURL: 'https://example.com',  
        headless: !process.env.DEBUG, // Run headless by default, unless DEBUG env var is set  
        viewport: { width: 1280, height: 720 },  
        trace: 'on-first-retry', // Capture trace on first failure  
    },  
});  
```  

## Common Interview Questions  
- What are the core concepts of Playwright?  
- How do you locate elements effectively in Playwright?  
- How do you handle asynchronous operations and waits?  
- How do you perform assertions in your tests?  
- How do you handle frames and popups?  
- How can you mock API responses using Playwright?  
- What are the benefits of using Playwright over other automation tools?  
- How do you configure and run Playwright tests?  
- How do you debug Playwright tests?  

### Tips for Interviews  
- Mention your experience with Playwright.  
- Highlight why you prefer Playwright (auto-waits, reliability, speed, cross-browser support).  
- Explain how you structure your tests (e.g., using POM).  
- Discuss your approach to handling dynamic elements and flaky tests.  
- Share any advanced features you've used (e.g., tracing, network interception).  

Good luck with your interview!  


### File Upload and Download
- **Uploading a File**: Use `page.setInputFiles()` to upload files to an input element.
- **Downloading a File**: Use `page.waitForEvent('download')` to handle file downloads and save them to a specific location.

### Wait Functions
- **Wait for Selector**: Use `page.waitForSelector()` to wait for an element to appear or disappear.
- **Wait for Timeout**: Use `page.waitForTimeout()` for fixed delays (not recommended for dynamic content).
- **Wait for URL**: Use `page.waitForURL()` to wait for a specific URL to load.
- **Wait for Load State**: Use `page.waitForLoadState()` to wait for the page to reach a specific load state (e.g., `domcontentloaded`, `load`).
- **Wait for Function**: Use `page.waitForFunction()` to wait for a custom JavaScript condition.

### Option Handling
- **Select Dropdown Option**: Use `page.selectOption()` to select options by value, label, or index.
- **Get Selected Option**: Use locators to retrieve the selected option's value or text.

### Configuration
- **Playwright Config File**: Use `playwright.config.ts` or `playwright.config.js` to define global settings for tests.
    - **Base URL**: Set the `baseURL` for relative navigation.
    - **Headless Mode**: Configure `headless` mode based on environment variables.
    - **Viewport**: Define the default viewport size.
    - **Trace**: Enable tracing for debugging (`trace: 'on-first-retry'`).
    - **Parallel Execution**: Configure `workers` for parallel test execution.
    - **Reporter**: Specify the test reporter (e.g., `html`, `list`).
