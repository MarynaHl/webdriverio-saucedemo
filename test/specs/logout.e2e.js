import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Logout test', () => {
    it('should logout user and redirect to login page', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(await inventoryPage.productsContainer).toBeDisplayed();

        await inventoryPage.openMenu();
        await inventoryPage.logout();

        await expect(await loginPage.loginBtn).toBeDisplayed();
        await expect(await loginPage.usernameField).toBeDisplayed();
        await expect(await loginPage.passwordField).toBeDisplayed();
    });
});
