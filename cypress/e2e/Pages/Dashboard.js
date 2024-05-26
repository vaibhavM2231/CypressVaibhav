class Dashboard{


    linkAdmin(){
        return  cy.contains("Admin")
    }

    linkAddUser(){
        return cy.contains("Add")
    }
   

    headingSystemUsers(){
        return cy.get("h5.oxd-text")
    }

    inputSearchUsers(){
        return cy.get("input.oxd-input").eq(1)
    }


    buttonSearch(){
        return cy.get("button[type='submit']")
    }

    

    UsersDataRow(){
        return  cy.get("div.oxd-table-row")
    }


    dataCell(){
        return  cy.get(".oxd-table-cell")
    }



    drpdownUserRole(){
        return cy.get("i.oxd-select-text--arrow").eq(0);
    }

    userRoleAdmin(){
       return cy.get(".oxd-select-dropdown").contains("Admin");
    }

    userRoleESS(){
        return cy.get(".oxd-select-dropdown").contains("ESS");
     }

    drpdownStatus(){
        return cy.get("i.oxd-select-text--arrow").eq(1);
    }

    enabledValue(){
        return cy.get('.oxd-select-dropdown > :nth-child(2)');
    }

    checkboxEditPassword(){
        return cy.get("i.oxd-checkbox-input-icon");
    }

    inputPassword(){
        return cy.get("input[type='password']").first();
    }

    inputConfirmPassword(){
        return  cy.get("input[type='password']").last();
    }

    buttonSubmit(){
        return  cy.get("button[type='Submit']"); 
    }

    txtNoRecords(){
        return  cy.get("div.orangehrm-horizontal-padding > span.oxd-text"); 
    }

    linkUserDropDown(){
        return  cy.get("span.oxd-userdropdown-tab"); 
    }
    
    buttonLogout(){
        return  cy.contains("Logout"); 
    }


    buttonConfirm(){
        return  cy.get('.oxd-button--label-danger')
    }
   /**
    * linkUserDropDown buttonLogout
    */


    

}

export default Dashboard