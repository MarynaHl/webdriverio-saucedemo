import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('Valid Checkout flow', () => {
    it('should complete checkout successfully with valid data', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        let isInventoryDisplayed = await inventoryPage.isDisplayed();
        expect(isInventoryDisplayed).toBe(true);

        await inventoryPage.addFirstProductToCart();
        await inventoryPage.openCart();
        const itemCount = await cartPage.getItemsCount();
        expect(itemCount).toBeGreaterThan(0);

        await cartPage.clickCheckout();
        await checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
        await checkoutPage.clickContinue();
        await checkoutPage.clickFinish();

        const headerDisplayed = await checkoutPage.isCompleteHeaderDisplayed();
        const headerText = await checkoutPage.getCompleteHeaderText();

        expect(headerDisplayed).toBe(true);
        expect(headerText).toBe('THANK YOU FOR YOUR ORDER');

        await checkoutPage.clickBackHome();
        isInventoryDisplayed = await inventoryPage.isDisplayed();
        expect(isInventoryDisplayed).toBe(true);
    });
});
