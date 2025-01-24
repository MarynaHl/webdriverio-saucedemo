class FooterPage {
    get twitterLink()  { return $('footer .social_twitter'); }
    get facebookLink() { return $('footer .social_facebook'); }
    get linkedinLink() { return $('footer .social_linkedin'); }

    async openSocialLink(network) {
        switch (network) {
            case 'twitter':
                await this.twitterLink.click();
                await browser.pause(1500);
                await browser.switchWindow('twitter.com');
                break;
            case 'facebook':
                await this.facebookLink.click();
                await browser.pause(1500);
                await browser.switchWindow('facebook.com');
                break;
            case 'linkedin':
                await this.linkedinLink.click();
                await browser.pause(1500);
                await browser.switchWindow('linkedin.com');
                break;
            default:
                throw new Error(`Unknown network: ${network}`);
        }
    }

    async getCurrentUrl() {
        return browser.getUrl();
    }

    async closeTabAndSwitchBack() {
        await browser.closeWindow();
        await browser.switchWindow('saucedemo.com');
    }
}

export default new FooterPage();
