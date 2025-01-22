import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Valid Login', () => {
    it('should login with valid credentials', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(await inventoryPage.productsContainer).toBeDisplayed();
    });
});
