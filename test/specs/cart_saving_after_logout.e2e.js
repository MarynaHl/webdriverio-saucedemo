import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';

describe('Saving the cart after logout (should FAIL on real site)', () => {
    it('should keep product in the cart after logout and re-login', async () => {

        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        let isInventoryDisplayed = await inventoryPage.isDisplayed();
        expect(isInventoryDisplayed).toBe(true);

        await inventoryPage.addFirstProductToCart();

        await inventoryPage.openMenu();
        await inventoryPage.logout();

        await loginPage.login('standard_user', 'secret_sauce');
        isInventoryDisplayed = await inventoryPage.isDisplayed();
        expect(isInventoryDisplayed).toBe(true);

        await inventoryPage.openCart();
        const isCartHasItem = await cartPage.isAnyProductInCart();

        expect(isCartHasItem).toBe(true);
    });
});
