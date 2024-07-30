import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { pageFixture } from '../../hooks/pageFixture'

Given('Web sitesine giderim', async function () {
    await pageFixture.page.goto('https://practicesoftwaretesting.com/#/')
});

When('Sign in linkine tıklarım', async function () {
    await pageFixture.page.getByRole('link', {name: "Sign in"}).click()
});

When('Email adres kutusuna {string} yazarım', async function (email) {
    await pageFixture.pm.onSignInPage().enterEmail(email)
    // await pageFixture.page.getByPlaceholder('Your email').fill(email)
});

When('Password kutusuna {string} yazarım', async function (password) {
    await pageFixture.pm.onSignInPage().enterPassword(password)
    // await pageFixture.page.getByPlaceholder('Password').fill(password)
});

When('Login butonuna tıklarım', async function () {
    await pageFixture.pm.onSignInPage().clickLoginButton()
    // await pageFixture.page.getByRole('button', {name: 'Login'}).click()
});

Then('My account sayfasının açıldığını görürüm', async function () {
    await pageFixture.pm.onRegistrationPage().verifyPageHeader()
    // await expect(pageFixture.page.getByRole('heading')).toHaveText('My account')
});

When('Register your account linkine tıklarım', async function () {
    await pageFixture.page.getByRole('link', {name: 'Register your account'}).click()
});
