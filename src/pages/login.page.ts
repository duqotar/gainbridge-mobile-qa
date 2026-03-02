import { $ } from '@wdio/globals';
import BasePage from './base.page.js';
import { getSelector } from '../utils/locator.factory.js';
import { hideKeyboard } from '../utils/mobile.actions.js';

class LoginPage extends BasePage {
    get inputUsername() {
        return $(getSelector('login-username'));
    }
    get inputPassword() {
        return $(getSelector('login-password'));
    }
    get btnSubmit() {
        return $(getSelector('login-button'));
    }
    get checkboxRememberMe() {
        return $(getSelector('remember-me-checkbox'));
    }

    async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await hideKeyboard();
        await this.btnSubmit.scrollIntoView({ block: 'center' });
        await this.btnSubmit.waitForClickable({ timeout: 5000 });
        await this.btnSubmit.click();
    }

    open() {
        return super.open('');
    }
}

export default new LoginPage();
