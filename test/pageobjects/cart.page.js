class CartPage {
    get cartItems()   { return $$('.cart_item'); }
    get checkoutBtn() { return $('#checkout'); }

    async getItemsCount() {
        const items = await this.cartItems;
        return items.length;
    }

    async isAnyProductInCart() {
        return (await this.getItemsCount()) > 0;
    }

    async clickCheckout() {
        await this.checkoutBtn.click();
    }
}

export default new CartPage();
