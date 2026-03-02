import { browser } from '@wdio/globals';

//A simple checker of the actual driver pointing condition web vs native.

export const getSelector = (testId: string): string => {
    const caps = browser.capabilities as WebdriverIO.Capabilities;
    const isWeb = !!caps.browserName;
    if (!isWeb) {
        return `~${testId}`;
    }
    return `[data-testid="${testId}"]`;
};
