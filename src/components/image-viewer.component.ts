import { $ } from '@wdio/globals';
import { getSelector } from '../utils/locator.factory.js';

class ImageViewerComponent {
    get container() {
        return $(getSelector('image-viewer-overlay'));
    }
    get zoomableImage() {
        return $(getSelector('zoomable-image'));
    }
    get zoomInfo() {
        return $('//p[contains(text(), "Zoom:")]');
    }
    get closeBtn() {
        return $(getSelector('close-image-viewer'));
    }

    async getZoomLevel(): Promise<number> {
        const text = await this.zoomInfo.getText();
        const match = text.match(/(\d+\.\d+)x/);
        return match ? parseFloat(match[1]) : 1.0;
    }
}

export default new ImageViewerComponent();
