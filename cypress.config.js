const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {

  await preprocessor.addCucumberPreprocessorPlugin(on,config)

  on("file:preprocessor", browserify.default(config));
  //require('cypress-mochawesome-reporter/plugin')(on);

  return config;

}

module.exports = defineConfig({
  env:{
    url:"https://opensource-demo.orangehrmlive.com/web/index.php/",
    urlString:"https://opensource-demo.orangehrmlive.com",
    username:"Admin",
    password:"admin123",
    openTabUrl:"https://practice.automationbro.com/",
    newUrl:"https://practice.automationbro.com/contact",
    APITestingUrl:"https://reqres.in",
    name:"Bingo",
    job: "Team lead",
    duration:600,
    apiEmail:"michael.lawson@reqres.in"

      
  },
  projectId:"ao21kf",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  //specPattern:"cypress/e2e/**/*.cy.js",
    specPattern:"cypress/e2e/**",
    excludeSpecPattern: ["cypress/e2e/BDD/step_definitions/**","cypress/e2e/Pages/**"],
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/",
    defaultCommandTimeout:6000,

    screenshotsFolder:"cypress/results/screenshots",
    screenshotOnRunFailure:true,
    setupNodeEvents

  },
});
