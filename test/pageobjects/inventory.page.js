class InventoryPage {
    get productsContainer() { return $('.inventory_list'); }
    get burgerMenuBtn()     { return $('#react-burger-menu-btn'); }
    get logoutLink()        { return $('#logout_sidebar_link'); }
    get sortSelect()        { return $('.product_sort_container'); }
    get cartIcon()          { return $('.shopping_cart_link'); }
    get firstAddToCartBtn() { return $('button[id*="add-to-cart"]'); }

    async addFirstProductToCart() {
        await this.firstAddToCartBtn.click();
    }

    async openMenu() {
        await this.burgerMenuBtn.click();
    }

    async logout() {
        await this.logoutLink.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async selectSorting(optionValue) {
        await this.sortSelect.selectByAttribute('value', optionValue);
    }
}

export default new InventoryPage();
