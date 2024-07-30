import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

Then('Customer registration başlığını görürüm', async function () {
    await expect(pageFixture.page.getByRole('heading')).toHaveText('Customer registration')
});