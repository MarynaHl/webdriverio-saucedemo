import loginPage from '../pageobjects/login.page.js';

describe('Login with invalid password', () => {
    it('should display error when password is invalid', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'wrong_password');

        await expect(await loginPage.errorMsg).toBeDisplayed();
        await expect(await loginPage.errorMsg.getText())
            .toContain('Username and password do not match');
    });
});
