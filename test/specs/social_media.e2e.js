import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import footerPage from '../pageobjects/footer.page.js';

describe('Social media links', () => {
    before(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(await inventoryPage.productsContainer).toBeDisplayed();
    });

    it('should open Twitter link in a new tab', async () => {
        await footerPage.clickTwitter();
        await browser.pause(2000);
        await browser.switchWindow('twitter.com');
        const url = await browser.getUrl();
        expect(url).toContain('twitter.com');
        await browser.closeWindow();
        await browser.switchWindow('saucedemo.com');
    });

    it('should open Facebook link in a new tab', async () => {
        await footerPage.clickFacebook();
        await browser.pause(2000);
        await browser.switchWindow('facebook.com');
        const url = await browser.getUrl();
        expect(url).toContain('facebook.com');
        await browser.closeWindow();
        await browser.switchWindow('saucedemo.com');
    });

    it('should open LinkedIn link in a new tab', async () => {
        await footerPage.clickLinkedIn();
        await browser.pause(2000);
        await browser.switchWindow('linkedin.com');
        const url = await browser.getUrl();
        expect(url).toContain('linkedin.com');
        await browser.closeWindow();
        await browser.switchWindow('saucedemo.com');
    });
});
