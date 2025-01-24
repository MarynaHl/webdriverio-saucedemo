import loginPage from '../pageobjects/login.page.js';

describe('Login with invalid username', () => {
    it('should display error when username is invalid', async () => {
        await loginPage.open();
        await loginPage.login('some_invalid_user', 'secret_sauce');

        const isError = await loginPage.isErrorDisplayed();
        const errorText = await loginPage.getErrorText();

        expect(isError).toBe(true);
        expect(errorText).toContain('Username and password do not match');
    });
});
