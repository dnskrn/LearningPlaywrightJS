class LoginPage {

    constructor(page) {
        this.loginUsingUserId = page.locator(".login_using_userid");
        this.userIdTextBox = page.getByRole('textbox', { name: 'User ID' });
        this.passwordTextBox = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: "Login" })
    }


    async clickLoginUsingUserIdButton() {
        await this.loginUsingUserId.click()
    }

    async performStaffLogin(username, password) {
        await this.userIdTextBox.fill(username);
        await this.passwordTextBox.fill(password);
        await this.loginButton.click();
    }

}


module.exports = { LoginPage };