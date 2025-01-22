import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('Valid Checkout flow', () => {
    it('should complete checkout successfully with valid data', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(await inventoryPage.productsContainer).toBeDisplayed();

        await inventoryPage.addFirstProductToCart();
        await inventoryPage.openCart();
        let itemsInCart = await cartPage.cartItems.length;
        expect(itemsInCart).toBeGreaterThan(0);

        await cartPage.clickCheckout();
        await checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
        await checkoutPage.clickContinue();

        await checkoutPage.clickFinish();
        const finishHeader = await $('h2.complete-header');
        expect(await finishHeader.getText()).toBe('THANK YOU FOR YOUR ORDER');

        await checkoutPage.clickBackHome();
        await expect(await inventoryPage.productsContainer).toBeDisplayed();

        await inventoryPage.openCart();
        itemsInCart = await cartPage.cartItems.length;
        expect(itemsInCart).toBe(0);
    });
});
