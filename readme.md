# Web Automation Project with Playwright

## About the Project

This project aims to automate the test scenario described in Gherkin for the successful creation of a record. Playwright was used to create an automation script that simulates user interaction with the web application, ensuring the expected functionality.

## Dependencies

- Node.js 18+

## Installation

1. Clone the repository to your local machine.
2. Install dependencies using the following command:

```
    npm install
```

## Running Tests

To execute automated tests, use the following command:

```
    npx playwright test
```
Tests are run in headless mode meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal.

## Examples of Commands

Here are some examples of commands that may be useful during development and test execution:

- `npx playwright test --ui`: for a better developer experience where you can easily walk through each step of the test and visually see what was happening before, during and after each step.
- `npx playwright test --headed`: To run your tests in headed mode, use the --headed flag. This will give you the ability to visually see how Playwright interacts with the website.
- `npx playwright test --debug`: To debug all tests, run the Playwright test command followed by the --debug flag.
- `npx playwright test example.spec.ts --debug`: To debug one test file, run the Playwright test command with the name of the test file that you want to debug followed by the --debug flag.

## Browsers

Playwright supports various browsers, including Chromium, Firefox, and WebKit. Tests can be run on different browsers to ensure application compatibility. Make sure to properly configure the desired browsers in the automation script.

To specify which browser you would like to run your tests on, use the --project flag followed by the name of the browser.

```
    npx playwright test --project webkit
```

## Gherkin Test Scenario

```
Feature: Record Creation

Scenario: Successful record creation
Given that the user is on the registration page
When the user fills out the form with valid information
And clicks the "Register" button
Then the record is successfully created

Scenario: Validation of selected date
Given that the user is on the registration page
When the user enters a date of birth
Then the selected date corresponds to the value displayed in the desired field
```
As a system user, I want to visually know when I'm registering incorrectly. Each required field should display a message indicating its requirement.

```
Feature: Registration Validation
Scenario: Mandatory Fields with Error Messages
 Given that the user is on the registration page
 When the user tries to register without filling in a mandatory field
 Then the system displays an error message for the respective field
```
