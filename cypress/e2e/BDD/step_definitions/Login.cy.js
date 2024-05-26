import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import Login from '../../Pages/loginPage.js'

const login = new Login();

Given('Navigate to Website', () => {
	cy.visit("/")
	cy.url().should("contain",Cypress.env('urlString'));
	
});

When('user enters valid username and password', () => {

	cy.login(Cypress.env('username'), Cypress.env('password'))
	
});

Then('user should be able to login successfully', () => {
	login.usernameDropdown().should("be.visible");
	
});

Given('Dashboard is Visible', () => {
	login.tittleDashboard().should("have.text","Dashboard")
});
