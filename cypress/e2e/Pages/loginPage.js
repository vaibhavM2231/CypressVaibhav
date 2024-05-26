class Login{


    login_username(){
        return cy.get('input[name="username"]')
    }


    login_password(){
        return cy.get('input[name="password"]')
    }
    
    submit(){
        return cy.contains("button", "Login")
    }

    linkAdmin(){
        return  cy.contains("Admin")
    }

    btnAddUSer(){
        return cy.contains("Add")
    }

    txterrorMessage(){
        return cy.get("p.oxd-alert-content-text")
    }

    usernameDropdown(){
        return cy.get("p.oxd-userdropdown-name")
        
    }
    

    tittleDashboard(){
        return cy.get(".oxd-topbar-header-title h6")
    }

    
    LoginPage(username, password){

    this.login_username().type(username).should("have.value",username);
    this.login_password().type(password);
    this.submit().click();
    }


}

export default Login