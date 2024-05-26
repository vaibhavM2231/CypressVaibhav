Test Setup
Installations
You need to have Node.js installed before using Cypress.

For rest of the installations move to project folder in command prompt and type

npm install

which will install Cypress and other supporting tools

Framework Structure:

1. Package.json : It contains Dependencies and Step definition path

2. cypress.config.js: It contains the configuration related data and environments variables.

3. Reporting used: multiple cucumber html reporter

4. e2e.js: This file is used for importing a parameter which is to imported at global level

5. Commands.js: This is used to create reusable custom commands.. which can be reused in diffrent files

5. fixtures: We create files unde this folder for saving and fetching test data for the scenarios.

5. BDD/Features: These feature files contains the BDD test scenarios which are written in GHERKIN language in form of steps which is readble by non tech person as well

6. Step Definitions: Technical code is written for the step written in a feature file is written here.

7. Pages: Followed Page Object Model i.e. POM- A Js file is created for WebPage and all the elements and methods related to a particular page are saved in that file.

8. MOCHA Based Tests: APITesting.cy.js this is mocha test case in this test case we are validating the APIs with the help of CYPRESS.

