import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import Login from '../../Pages/loginPage.js'
const login = new Login()



When("user enters the invalid credentials {string} and {string}",  function(username, password) {
	login.LoginPage(username, password)

  });

  Then("user should get error message", function () {

    login.txterrorMessage().should("have.text","Invalid credentials")



  });
