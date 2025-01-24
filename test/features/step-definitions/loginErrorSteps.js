import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../../pageobjects/login.page.js';

Given(/^User is located on the main page of saucedemo website$/, async () => {
    await loginPage.open();
});

When(/^User clicks "Login" button$/, async () => {
    await loginPage.loginBtn.click();
});

Then(/^User should see "([^"]*)" error message$/, async (expectedMessage) => {
    const isError = await loginPage.isErrorDisplayed();
    const errorText = await loginPage.getErrorText();

    expect(isError).toBe(true);
    expect(errorText).toBe(expectedMessage);
});
