const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const registrationCommands = require('../commands/registration-commands.js');
const registrationLocators = require('../locators/locators.js');

test.describe('Validations on the registration page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.nopcommerce.com/');
    });

    test('Creation of a record successful', async ({ page }) => {
        const password = faker.internet.password();
        const confirmedPassword = password;
        await registrationCommands.registerUser(page, faker.person.firstName(), faker.person.lastName(), faker.internet.email(), password, confirmedPassword);
        await expect(page.locator(registrationLocators.registrationCompleted)).toBeVisible();
    });

    test('Validates birth date field', async ({ page }) => {

        await registrationCommands.selectDateOfBirth(page, 9, 11, 1989);

        expect(await page.locator(registrationLocators.dateOfBirthDaySelect).evaluate(element => element.value)).toEqual('9');
        expect(await page.locator(registrationLocators.dateOfBirthMonthSelect).evaluate(element => element.value)).toEqual('11');
        expect(await page.locator(registrationLocators.dateOfBirthYearSelect).evaluate(element => element.value)).toEqual('1989');
    });

    test('Valid error message for required field - First Name', async ({ page }) => {
        await registrationCommands.registerUser(page, '', 'da Silva', 'test@example.com', 'mypassword', 'mypassword');
        await expect(page.locator(registrationLocators.firstNameRequiredMessage)).toBeVisible();
    });

    test('Valid error message for required field - Last Name', async ({ page }) => {
        await registrationCommands.registerUser(page, 'Fulano', '', 'test@example.com', 'mypassword', 'mypassword');
        await expect(page.locator(registrationLocators.lastNameRequiredMessage)).toBeVisible();
    });

    test('Valid error message for required field - Email', async ({ page }) => {
        await registrationCommands.registerUser(page, 'Fulano', 'da Silva', '', 'mypassword', 'mypassword');
        await expect(page.locator(registrationLocators.emailRequiredMessage)).toBeVisible();
    });

    test('Valid error message for required field - Password', async ({ page }) => {
        await registrationCommands.registerUser(page, 'Fulano', 'da Silva', 'test@example.com', '', '');
        await expect(page.locator(registrationLocators.passwordRequiredMessage)).toBeVisible();
    });

    test('Valid error message for required field - Password Confirmation', async ({ page }) => {
        await registrationCommands.registerUser(page, 'Fulano', 'da Silva', 'test@example.com', 'mypassword', '');
        await expect(page.locator(registrationLocators.confirmPasswordRequiredMessage)).toBeVisible();
    });

    test('Valid error message for password do not match', async ({ page }) => {
        await registrationCommands.registerUser(page, 'Fulano', 'da Silva', 'test@example.com', '', 'mypassword');
        await expect(page.locator(registrationLocators.passwordDoNotMatch)).toBeVisible();
    });

});