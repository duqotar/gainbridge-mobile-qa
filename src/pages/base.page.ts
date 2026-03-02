import { browser } from '@wdio/globals';

export default class BasePage {
    public async open(path: string) {
        await browser.url(`https://qa-mobile-automation.vercel.app/${path}`);
    }
}
