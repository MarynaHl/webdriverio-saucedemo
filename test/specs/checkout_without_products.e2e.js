import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('Checkout without products', () => {
    it('should allow user to checkout even if cart is empty (real site behavior)', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        let isInventoryDisplayed = await inventoryPage.isDisplayed();
        expect(isInventoryDisplayed).toBe(true);

        await inventoryPage.openCart();
        const itemCount = await cartPage.getItemsCount();
        expect(itemCount).toBe(0);

        await cartPage.clickCheckout();

        const isFirstNameFieldDisplayed = await checkoutPage.firstNameField.isDisplayed();
        expect(isFirstNameFieldDisplayed).toBe(true);

    });
});
