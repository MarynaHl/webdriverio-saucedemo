import loginPage from '../pageobjects/login.page.js';

describe('Login with invalid password', () => {
    it('should display error when password is invalid', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'wrong_password');

        const isError = await loginPage.isErrorDisplayed();
        const errorText = await loginPage.getErrorText();

        expect(isError).toBe(true);
        expect(errorText).toContain('Username and password do not match');
    });
});
