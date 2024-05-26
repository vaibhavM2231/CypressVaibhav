class ContactUs{


    tittleContactUs(){
        return  cy.get("h1.tg-page-header__title");
    }
    textContactways(){
        return  cy.get("h4.elementor-image-box-title");
    }

    txtCallUs(){
        return  cy.contains("call us now")
    }

   
}

export default ContactUs