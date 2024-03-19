const registrationLocators = {
    registerLink: '//a[text()="Register"]',
    registrationCompleted: '//*[text()[contains(.,"Your registration completed")]]',
    firstNameInput: '//input[@id="FirstName"]',
    lastNameInput: '//input[@id="LastName"]',
    emailInput: '//input[@id="Email"]',
    passwordInput: '//input[@id="Password"]',
    confirmPasswordInput: '//input[@id="ConfirmPassword"]',
    registerButton: '//button[@id="register-button"]',
    dateOfBirthDaySelect: '//select[@name="DateOfBirthDay"]',
    dateOfBirthMonthSelect: '//select[@name="DateOfBirthMonth"]',
    dateOfBirthYearSelect: '//select[@name="DateOfBirthYear"]',
    // Locators para campos obrigatórios
    firstNameRequiredMessage: '//span[@id="FirstName-error"]',
    lastNameRequiredMessage: '//span[@id="LastName-error"]',
    emailRequiredMessage: '//span[@id="Email-error"]',
    passwordRequiredMessage: '//span[@id="Password-error"]',
    confirmPasswordRequiredMessage: '//span[@id="ConfirmPassword-error"]',
    passwordDoNotMatch: '//*[text()[contains(.,"The password and confirmation password do not match.")]]'
};

module.exports = registrationLocators;