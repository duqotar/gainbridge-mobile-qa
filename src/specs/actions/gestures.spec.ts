import LoginPage from '../../pages/login.page';
import InventoryPage from '../../pages/inventory.page';
import ImageViewerComponent from '../../components/image-viewer.component';
import { pinchIn } from '../../utils/mobile.actions';

describe('Mobile Specific Interactions @regression', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login(process.env.DEMO_USER!, process.env.DEMO_PASS!);
    });

    it('should perform pinch-to-zoom out @fast', async () => {

        await InventoryPage.openImageViewer(1);
        await ImageViewerComponent.container.waitForDisplayed();

        const targetImage = await ImageViewerComponent.zoomableImage;

        await pinchIn(targetImage);

        await ImageViewerComponent.closeBtn.click();
    });
});
