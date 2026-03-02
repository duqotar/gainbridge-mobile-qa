import { browser } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

//Helper for bypassing the UI element ovelrap by keyboard

export const hideKeyboard = async (): Promise<void> => {
    const caps = browser.capabilities as WebdriverIO.Capabilities;
    const isWeb = !!caps.browserName;

    if (isWeb) {
        await browser.execute('if(document.activeElement) document.activeElement.blur();');
    } else {
        const isKeyboardOpen = await browser.isKeyboardShown();
        if (isKeyboardOpen) {
            await browser.hideKeyboard();
        }
    }
};

/**
 * Performs a pinch-in gesture on the specified element
 */
export const pinchIn = async (
    element: WebdriverIO.Element | ChainablePromiseElement,
): Promise<void> => {
    const target = (await element) as WebdriverIO.Element;

    await target.waitForDisplayed();

    const rect = await browser.execute((el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        return { left: r.left, top: r.top, width: r.width, height: r.height };
    }, target);

    const centerX = Math.round(rect.left + rect.width / 2);
    const centerY = Math.round(rect.top + rect.height / 2);
    const startOffset = 100;
    const endOffset = 10;

    await browser.performActions([
        {
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: centerX - startOffset, y: centerY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 200 },
                { type: 'pointerMove', duration: 600, x: centerX - endOffset, y: centerY },
                { type: 'pointerUp', button: 0 },
            ],
        },
        {
            type: 'pointer',
            id: 'finger2',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: centerX + startOffset, y: centerY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 200 },
                { type: 'pointerMove', duration: 600, x: centerX + endOffset, y: centerY },
                { type: 'pointerUp', button: 0 },
            ],
        },
    ]);

    await browser.releaseActions();
};
