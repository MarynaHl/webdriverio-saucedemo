import loginPage from '../pageobjects/login.page.js';

describe('Login with invalid username', () => {
    it('should display error when username is invalid', async () => {
        await loginPage.open();
        await loginPage.login('some_invalid_user', 'secret_sauce');

        await expect(await loginPage.errorMsg).toBeDisplayed();
        await expect(await loginPage.errorMsg.getText())
            .toContain('Username and password do not match');
    });
});
