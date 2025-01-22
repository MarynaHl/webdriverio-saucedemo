class CartPage {
    get cartItems()   { return $$('.cart_item'); }
    get checkoutBtn() { return $('#checkout'); }

    async isAnyProductInCart() {
        return (await this.cartItems.length) > 0;
    }

    async clickCheckout() {
        await this.checkoutBtn.click();
    }
}

export default new CartPage();
