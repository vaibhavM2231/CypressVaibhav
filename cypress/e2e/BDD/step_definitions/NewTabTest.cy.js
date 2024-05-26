import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import ContactUs from '../../Pages/ContactUsPage.js'

import Home from '../../Pages/HomePage.js'

let contact = new ContactUs();
let homeObj = new Home();

before(()=>{
    cy.fixture("example").as("ContactPage")

})

Given('User visits Home Page', () => {
    cy.visit(Cypress.env("openTabUrl"));
    cy.url().should("equal",Cypress.env("openTabUrl"));
});

When('user click on Contact Us Button which is at Bottom', () => {
    homeObj.linkContactUs().invoke("removeAttr", "target").click() 
	
});

Then('user is navigated to new Tab which is handled by Cypress', () => {
    cy.url().should('include',Cypress.env("newUrl"))
   
});

Given('user validates the Page Title', () => {
    contact.tittleContactUs().should("have.text", "Contact");
});

Given('user validates the Contact Options', function() {
    var contactWays =  this.ContactPage.contactWays
	contact.textContactways().as("titles");
    cy.get("@titles").should("be.visible");
    cy.get("@titles").each(($e1,index,$list)=>{
      cy.log($e1.text())
      
    })
});


Then('user validates that Call Now Option is available', () => {
	contact.txtCallUs().should("be.visible")
});

When('user uses cypress command to navigate back', () => {
    cy.go("back");
});

Then('User is navigated back to home page', () => {
    cy.url().should("equal",Cypress.env("openTabUrl"));

    homeObj.tittleHomePage().should("be.visible")
});
