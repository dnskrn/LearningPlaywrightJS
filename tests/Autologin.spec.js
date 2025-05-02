const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pageObjects/LoginPage');


test("Auto Login Setup", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/gst');

    // Click the get started link.
    await loginPage.clickLoginUsingUserIdButton();

    // Expects page to have a heading with the name of Installation.
    await expect(loginPage.userIdTextBox).toBeVisible();
    await expect(loginPage.passwordTextBox).toBeVisible();

    await loginPage.performStaffLogin("DKTest01", "Mar@2025");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Dashboard");

    await page.context().storageState({ path: 'auth.json' });
})

test.use({ storageState: 'auth.json' });

test.only('Verify Dashboard after Auto Login', async ({ page }) => {
    await page.goto('https://bill.gogstbill.com/gst/dashboard');

    // Ensure login persisted by checking dashboard elements
    await expect(page).toHaveTitle(/Dashboard/i);
    await page.waitForSelector('text=Dashboard');

    console.log("✅ Auto-login successful!");
});