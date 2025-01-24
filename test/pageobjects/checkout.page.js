class CheckoutPage {
    get firstNameField()  { return $('#first-name'); }
    get lastNameField()   { return $('#last-name'); }
    get postalCodeField() { return $('#postal-code'); }
    get continueBtn()     { return $('#continue'); }
    get finishBtn()       { return $('#finish'); }
    get backHomeBtn()     { return $('#back-to-products'); }
    get completeHeader()  { return $('h2.complete-header'); }

    async fillCheckoutForm(first, last, postal) {
        await this.firstNameField.setValue(first);
        await this.lastNameField.setValue(last);
        await this.postalCodeField.setValue(postal);
    }

    async clickContinue() {
        await this.continueBtn.click();
    }

    async clickFinish() {
        await this.finishBtn.click();
    }

    async clickBackHome() {
        await this.backHomeBtn.click();
    }

    async getCompleteHeaderText() {
        return this.completeHeader.getText();
    }

    async isCompleteHeaderDisplayed() {
        return this.completeHeader.isDisplayed();
    }
}

export default new CheckoutPage();
