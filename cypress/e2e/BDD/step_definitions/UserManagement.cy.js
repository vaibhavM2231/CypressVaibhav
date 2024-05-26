import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import Dashboard from '../../Pages/Dashboard.js'

import AddUser from '../../Pages/AddNewUser.js'

import Login from '../../Pages/loginPage.js'

const dashboard = new Dashboard();
const adduser = new AddUser();

const login = new Login();
before(()=>{
    cy.fixture("example").as("user")

})

When('Admin enters valid username and password', function() {
	cy.login(this.user.AdminUsername, this.user.AdminPassword)

});

Given('Admin logged in  successfully',function() {
	login.usernameDropdown().should("be.visible");
login.tittleDashboard().should("have.text","Dashboard")
});

Given('Admin clicks on Admin Link and click on Add User button', function() {
    dashboard.linkAdmin().click();
    dashboard.linkAddUser().click();

});

let usernameFinal = null;
When("User submits the Add user form with unique {string} and {string} and {string}", function (employeename,Username,password) {

    const randomString = Math.random().toString(36).substring(2,4);
    usernameFinal = randomString+Username;
    adduser.AddUser(employeename, usernameFinal, password);
  });

Then('New User should be created successfully', function(){
    dashboard.headingSystemUsers().should("have.text","System Users")
	});

Given('New user is shown in the Search Result', function() {
    dashboard.inputSearchUsers().type(usernameFinal);
    dashboard.buttonSearch().click( {force: true} );
    dashboard.UsersDataRow().should("have.length.at.least",2);
       dashboard.UsersDataRow().each( ($e1,index,$list) =>{
        if(index>0){
            cy.wrap($e1).find(".oxd-table-cell").eq(1).then(function(cell){
                expect(cell.text()).to.eq(usernameFinal)
              })
              cy.wrap($e1).find(".oxd-table-cell").eq(2).then(function(cell){
                  expect(cell.text()).to.eq(this.user.AddUserData.userType)
                })
        }
              
    })

	});
  
  Given("New user is able to Login successfully {string}", function (Password) {

  dashboard.linkUserDropDown().click();
  dashboard.buttonLogout().click();
       
  login.LoginPage(usernameFinal, Password);
  login.usernameDropdown().should("be.visible");
  login.tittleDashboard().should("have.text","Dashboard")
  
});

Given("Admin Clicks on Admin Link", function () {

    dashboard.linkAdmin().click();
  

  });


  Given("Admin Searches for the User to be Edited", function () {

    dashboard.inputSearchUsers().type(usernameFinal);
    dashboard.buttonSearch().click( {force: true} );

  });

  Given("Admin Updates the Role and password of the user", function () {

    dashboard.dataCell().eq(1).then((username)=>{
        expect(username.text()).to.eq(usernameFinal)
    })
     
    dashboard.dataCell().eq(5).find("button.oxd-icon-button").eq(1).click()
    
    dashboard.drpdownUserRole().click();

    cy.contains(this.user.editUserData.updatedRole).click();

    dashboard.checkboxEditPassword().click();

    
    dashboard.inputPassword().type(this.user.editUserData.updatedPassword);
    dashboard.inputConfirmPassword().type(this.user.editUserData.updatedPassword);
    dashboard.buttonSubmit().click();
   
  });

  
  
  Then("Admin validates the updated details of the user", function () {
    cy.wait(5000);
    dashboard.inputSearchUsers().type(usernameFinal);
    dashboard.buttonSearch().click( {force: true} );

    dashboard.dataCell().eq(1).then((username)=>{
        expect(username.text()).to.eq(usernameFinal)
    })

    dashboard.dataCell().eq(2).then((userRole)=>{
        expect(userRole.text()).to.eq(this.user.editUserData.updatedRole)
    })
   
   

  });


  Given("Admin Searches for the User to be Deleted", function () {
    
    dashboard.inputSearchUsers().type(usernameFinal);
    dashboard.buttonSearch().click( {force: true} );
    

  });

  Given("Admin Deletes the user", function () {

    dashboard.dataCell().eq(1).then((username)=>{
        expect(username.text()).to.eq(usernameFinal)
    })  
    dashboard.dataCell().eq(5).find("button.oxd-icon-button").eq(0).click()

    dashboard.buttonConfirm().click()

  });

  Then("Admin validates that new user is deleted.", function () {
    dashboard.inputSearchUsers().type(usernameFinal);
    dashboard.buttonSearch().click( {force: true} );

    dashboard.txtNoRecords().should("be.visible");

    dashboard.txtNoRecords().then(function(header){

        expect(header.text()).to.be.eq("No Records Found")


    })

    dashboard.UsersDataRow().should("have.length.at.most",1);

  });

  Given("Deleted user is not able to Login {string}", function (password) {

    dashboard.linkUserDropDown().click();
    dashboard.buttonLogout().click();
         
    login.LoginPage(usernameFinal, password);
    login.txterrorMessage().should("have.text","Invalid credentials")



  });
