import { $ } from '@wdio/globals';
import BasePage from './base.page.js';
import { getSelector } from '../utils/locator.factory.js';

class DashboardPage extends BasePage {
    get searchInput() {
        return $(getSelector('search-input'));
    }
    get cartIcon() {
        return $(getSelector('cart-icon'));
    }

    async isLoaded(): Promise<boolean> {
        return this.searchInput.waitForDisplayed({ timeout: 5000 });
    }
}

export default new DashboardPage();
