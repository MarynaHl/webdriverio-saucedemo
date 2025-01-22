import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';

describe('Saving the cart after logout', () => {
    it('should keep the product in the cart after logout and re-login (according to test case)', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(await inventoryPage.productsContainer).toBeDisplayed();

        await inventoryPage.addFirstProductToCart();

        await inventoryPage.openMenu();
        await inventoryPage.logout();

        await loginPage.login('standard_user', 'secret_sauce');
        await expect(await inventoryPage.productsContainer).toBeDisplayed();

        await inventoryPage.openCart();
        const isCartHasItem = await cartPage.isAnyProductInCart();

        await expect(isCartHasItem).toBe(true);
    });
});
