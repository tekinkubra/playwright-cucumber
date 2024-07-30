import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class SignInPage extends HelperBase{
    constructor(page: Page) {
        super(page)
    }

    async enterEmail(email: string) {
        await this.page.getByPlaceholder('Your email').fill(email)
    }

    async enterPassword(password: string) {
        await this.page.getByPlaceholder('Your password').fill(password)
    }

    async clickLoginButton() {
        await this.page.getByRole('button', {name: 'Login'}).click()
    }

    async clickRegisterYourAccountLink() {
        await this.page.getByRole('link', {name: 'Register your account'}).click()
    }

    async verifyPageHeader() {
        await expect(this.page.getByRole('heading')).toHaveText('Login')
    }

}