class AddUser{

    
headingAddUser(){
    return cy.get("h6.orangehrm-main-title")
    
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

    txtEmpname(){
        return cy.get("div.oxd-autocomplete-text-input")
    }

    autoCompleteEmpname(){
        return cy.get('.oxd-autocomplete-option').first()
    }
    
    txtUsername(){
        return cy.get("input.oxd-input").eq(1)
    }

    txtPassword(){
        return cy.get("input[type='password']").first()
    }

    txtCnfrmPassword(){
        return cy.get("input[type='password']").last()
    }

    btnSubmit(){
        return cy.get("button[type='submit']")
    }

    AddUser(employeename, username, password){

        this.drpdownUserRole().click({force:true});
        cy.wait(2000);
        this.userRoleAdmin().click();
        
        this.drpdownStatus().click({force:true});
        cy.wait(2000);
        this.enabledValue().click();
        this.txtEmpname().type(employeename);
        cy.wait(5000);
        this.autoCompleteEmpname().click();
        this.txtUsername().type(username);
        this.txtPassword().type(password);
        this.txtCnfrmPassword().type(password);

        this.btnSubmit().click();
        }
    
    
    }
    export default AddUser
