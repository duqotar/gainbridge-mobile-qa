import { expect } from '@wdio/globals';
import LoginPage from '../../pages/login.page';
import InventoryPage from '../../pages/inventory.page';
import CartPage from '../../pages/cart.page';

describe('E2E: Purchase Workflow @regression', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login(process.env.DEMO_USER!, process.env.DEMO_PASS!);
    });

    it('should add product and verify cart total @smoke', async () => {
        await expect(InventoryPage.searchInput).toBeDisplayed();

        await InventoryPage.addItemToCart(1);

        await expect(InventoryPage.cartBadge).toHaveText('1');

        await InventoryPage.cartIcon.click();
        await expect(CartPage.totalAmount).toBeDisplayed();

        const total = await CartPage.totalAmount.getText();
        expect(total).toContain('$99.99');
    });
});
