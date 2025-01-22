import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';

describe('Checkout without products', () => {
    it('should show error or stay on cart if user tries to checkout with empty cart', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(await inventoryPage.productsContainer).toBeDisplayed();

        await inventoryPage.openCart();
        const itemsCount = await cartPage.cartItems.length;
        expect(itemsCount).toBe(0);

        await cartPage.clickCheckout();

        const cartTitle = await $('.title');
        await expect(cartTitle).toBeDisplayed();
        await expect(await cartTitle.getText()).toContain('Your Cart');

        // const emptyError = await $('#cart_empty_error');
        // await expect(emptyError).toBeDisplayed();
        // await expect(await emptyError.getText()).toBe('Cart is empty');
    });
});
