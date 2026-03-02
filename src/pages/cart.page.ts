import { $ } from '@wdio/globals';
import BasePage from './base.page.js';
import { getSelector } from '../utils/locator.factory.js';

class CartPage extends BasePage {
    get bottomSheet() {
        return $(getSelector('bottom-sheet'));
    }
    get closeBtn() {
        return $(getSelector('close-bottom-sheet'));
    }
    get checkoutBtn() {
        return $(getSelector('checkout-button'));
    }
    get totalAmount() {
        return $(getSelector('bottom-sheet-total'));
    }

    cartItem(index: number) {
        return $(getSelector(`cart-item-${index}`));
    }
    removeItemBtn(index: number) {
        return $(getSelector(`remove-cart-item-${index}`));
    }

    async isLoaded(): Promise<boolean> {
        return this.bottomSheet.waitForDisplayed({ timeout: 5000 });
    }

    async getTotalPrice(): Promise<string> {
        return this.totalAmount.getText();
    }

    async close() {
        await this.closeBtn.click();
        await this.bottomSheet.waitForDisplayed({ reverse: true });
    }
}

export default new CartPage();
