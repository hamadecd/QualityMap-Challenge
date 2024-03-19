const registrationLocators = require('../locators/locators.js');

const registrationCommands = {
    async registerUser(page, firstName, lastName, email, password, confirmedPassword) {
        await page.locator(registrationLocators.registerLink).click();
        await page.locator(registrationLocators.firstNameInput).fill(firstName);
        await page.locator(registrationLocators.lastNameInput).fill(lastName);
        await page.locator(registrationLocators.emailInput).fill(email);
        await page.locator(registrationLocators.passwordInput).fill(password);
        await page.locator(registrationLocators.confirmPasswordInput).fill(confirmedPassword);
        await page.locator(registrationLocators.registerButton).click();
    },
    
    async selectDateOfBirth(page, day, month, year) {
        await page.locator(registrationLocators.registerLink).click();
        await page.locator(registrationLocators.dateOfBirthDaySelect).selectOption({ value: day.toString() });
        await page.locator(registrationLocators.dateOfBirthMonthSelect).selectOption({ value: month.toString() });
        await page.locator(registrationLocators.dateOfBirthYearSelect).selectOption({ value: year.toString() });
    }
};

module.exports = registrationCommands;
