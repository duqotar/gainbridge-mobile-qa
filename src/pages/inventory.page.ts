import { $ } from '@wdio/globals';
import BasePage from './base.page.js';
import { getSelector } from '../utils/locator.factory.js';

class InventoryPage extends BasePage {
    get searchInput() {
        return $(getSelector('search-input'));
    }
    get cartIcon() {
        return $(getSelector('cart-icon'));
    }
    get cartBadge() {
        return $(getSelector('cart-badge'));
    }

    getProductImage(id: string | number) {
        return $(getSelector(`product-image-${id}`));
    }
    getAddToCartBtn(id: string | number) {
        return $(getSelector(`add-to-cart-${id}`));
    }

    async addItemToCart(id: string | number) {
        const btn = this.getAddToCartBtn(id);
        await btn.scrollIntoView({ block: 'center' });
        await btn.click();
    }

    async openImageViewer(id: string | number) {
        const img = this.getProductImage(id);
        await img.click();
    }
}

export default new InventoryPage();
