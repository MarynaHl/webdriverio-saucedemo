import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Sorting functionality', () => {
    before(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(await inventoryPage.productsContainer).toBeDisplayed();
    });

    it('should sort products by Price (low to high)', async () => {
        await inventoryPage.selectSorting('lohi');
    });

    it('should sort products by Price (high to low)', async () => {
        await inventoryPage.selectSorting('hilo');
    });

    it('should sort products by Name (A to Z)', async () => {
        await inventoryPage.selectSorting('az');
    });

    it('should sort products by Name (Z to A)', async () => {
        await inventoryPage.selectSorting('za');
    });
});
