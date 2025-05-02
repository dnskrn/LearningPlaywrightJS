const { test, expect } = require('@playwright/test');

const loginPayload = {
    username: "DKTest01",
    password: "Mar@2025",
    login: "Login",
    browser: "Chrome",
    version: "0.0",
    platform: "Win10",
    device_type: "Desktop",
    ismobiledevice: "",
    istablet: "",
    ip_address: ""
}

test.only('Api Login2', async ({ browser, request }) => {

    // Step 1: Perform API Login Request
    const res = await request.post('https://bill.gogstbill.com/gst/', {
        data: loginPayload,
    });

    expect(res.status()).toBe(200);

    // Step 2: Extract and Parse Cookies
    const cookiesHeader = res.headers()['set-cookie'];

    if (!cookiesHeader) {
        throw new Error('No cookies received from API response');
    }
    
    // Ensure `cookiesHeader` is an array
    const cookiesArray = Array.isArray(cookiesHeader) ? cookiesHeader : [cookiesHeader];
    
    const parsedCookies = cookiesArray.map(cookie => {
        const [name, value] = cookie.split(';')[0].split('=');
        return {
            name,
            value,
            domain: "bill.gogstbill.com",
            path: "/",
            httpOnly: true,
            secure: true,
        };
    });
    
    console.log("Extracted Cookies:", parsedCookies);
    

    // Step 3: Apply Cookies in New Browser Context
    const context = await browser.newContext();
    await context.addCookies(parsedCookies);

    // Step 4: Open a New Page and Navigate to Dashboard
    const page = await context.newPage();
    await page.goto("https://bill.gogstbill.com/gst/dashboard");

    // Step 5: Verify Login Success
    await expect(page).toHaveTitle(/Dashboard/i);
    console.log("✅ Login successful!");

    await page.pause(); // Debug if needed
});
