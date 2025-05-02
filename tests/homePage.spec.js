const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../pageObjects/LoginPage');

test('has title', async ({ page }) => {
  await page.goto('/gst');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Login - Go GST Bill -  Best GST Billing Software in India");

});

test('Login using Staff Account', async ({ page }) => {
  const loginPage= new LoginPage(page);

  await page.goto('/gst');

  // Click the get started link.
  await loginPage.clickLoginUsingUserIdButton();

  // Expects page to have a heading with the name of Installation.
  await expect(loginPage.userIdTextBox).toBeVisible();
  await expect(loginPage.passwordTextBox).toBeVisible();

  await loginPage.performStaffLogin("DKTest01","Mar@2025");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Dashboard");
});
