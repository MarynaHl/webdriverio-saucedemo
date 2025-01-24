import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import footerPage from '../pageobjects/footer.page.js';

describe('Social media links', () => {
    before(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        const isInventoryDisplayed = await inventoryPage.isDisplayed();
        expect(isInventoryDisplayed).toBe(true);
    });

    it('should open Twitter link in a new tab', async () => {
        await footerPage.openSocialLink('twitter');
        const url = await footerPage.getCurrentUrl();
        expect(url).toContain('twitter.com');

        await footerPage.closeTabAndSwitchBack();
        const finalUrl = await footerPage.getCurrentUrl();
        expect(finalUrl).toContain('saucedemo.com');
    });

    it('should open Facebook link in a new tab', async () => {
        await footerPage.openSocialLink('facebook');
        const url = await footerPage.getCurrentUrl();
        expect(url).toContain('facebook.com');

        await footerPage.closeTabAndSwitchBack();
        const finalUrl = await footerPage.getCurrentUrl();
        expect(finalUrl).toContain('saucedemo.com');
    });

    it('should open LinkedIn link in a new tab', async () => {
        await footerPage.openSocialLink('linkedin');
        const url = await footerPage.getCurrentUrl();
        expect(url).toContain('linkedin.com');

        await footerPage.closeTabAndSwitchBack();
        const finalUrl = await footerPage.getCurrentUrl();
        expect(finalUrl).toContain('saucedemo.com');
    });
});
