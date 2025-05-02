const { test, request, expect } = require('@playwright/test')

const { LoginPage } = require('../pageObjects/LoginPage');

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

test('Api Login', async ({ page, request }) => {
    const res = await request.post('https://bill.gogstbill.com/gst/', {
        data: loginPayload,
    });

    expect(res.status()).toBe(200);

    // Extract cookies from response headers
    const cookiesHeader = res.headers()['set-cookie'];
    console.log(cookiesHeader);
    if (!cookiesHeader) {
        throw new Error('No cookies received from API response');
    }

    // Ensure cookiesHeader is an array
    const cookiesArray = Array.isArray(cookiesHeader) ? cookiesHeader : [cookiesHeader];

    // Convert raw cookies into Playwright format
    const parsedCookies = cookiesArray.map(cookie => {
        const [name, value] = cookie.split(';')[0].split('=');
        return {
            name,
            value,
            domain: "bill.gogstbill.com",
            path: "/",
        };
    });

    // Set cookies in the browser context
    await page.context().addCookies(parsedCookies);

    // Navigate to the dashboard
    await page.goto('https://bill.gogstbill.com/gst/dashboard');
    await page.reload();
    // Ensure login is successful by waiting for an element that only appears after login
    // await page.waitForSelector('text=Welcome' , { timeout: 10000 });

    // Verify title
    await expect(page).toHaveTitle(/Dashboard/i);
});


test('Api Login2', async ({ page, request  }) => {

    await page.goto("https://bill.gogstbill.com/gst/");

    let cookies = await page.context().cookies();

    console.log(cookies);
    console.log("#############################################################")
    
    const loginPage = new LoginPage(page);

    const res = await page.request.post('https://bill.gogstbill.com/gst/', {
        data: loginPayload,
    });
    console.log(res.status())
    console.log("#############################################################")
    
    // Extract cookies from response headers
    const cookiesHeader = res.headers()['set-cookie'];
    console.log(cookiesHeader);

    // if (!cookiesHeader) {
    //     throw new Error('No cookies received from API response');
    // }

    // Ensure cookiesHeader is an array
    const cookiesArray = Array.isArray(cookiesHeader) ? cookiesHeader : [cookiesHeader];

    // Convert raw cookies into Playwright format
    const parsedCookies = cookiesArray.map(cookie => {
        const [name, value] = cookie.split(';')[0].split('=');
        return {
            name,
            value,
            domain: "bill.gogstbill.com",
            path: "/",
        };
    });

    console.log(parsedCookies);
    // Set cookies in the browser context
    await page.context().addCookies(parsedCookies);

    console.log(await page.context().cookies());


    // page.storageState(authFile);
    // Navigate to the dashboard
    // await page.goto('https://bill.gogstbill.com/gst/dashboard');

    // await page.goto("./gst");
    await page.reload();

    await page.pause();
    // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle("Dashboard");
});

