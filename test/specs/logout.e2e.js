import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Logout test', () => {
    it('should logout user and redirect to login page', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        let isInventoryDisplayed = await inventoryPage.isDisplayed();
        expect(isInventoryDisplayed).toBe(true);

        await inventoryPage.openMenu();
        await inventoryPage.logout();

        // Перевіряємо, що знову на сторінці логіну
        const isLoginButtonDisplayed = await loginPage.loginBtn.isDisplayed();
        expect(isLoginButtonDisplayed).toBe(true);
    });
});
