class FooterPage {
    get twitterLink()  { return $('footer .social_twitter'); }
    get facebookLink() { return $('footer .social_facebook'); }
    get linkedinLink() { return $('footer .social_linkedin'); }

    async clickTwitter() {
        await this.twitterLink.click();
    }

    async clickFacebook() {
        await this.facebookLink.click();
    }

    async clickLinkedIn() {
        await this.linkedinLink.click();
    }
}

export default new FooterPage();
