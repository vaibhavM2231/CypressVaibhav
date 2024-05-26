class Home{

    linkContactUs(){
        return cy.get('#contact-us')
        
    }

    tittleHomePage(){
        return  cy.contains("Think different. Make different.")
    }



}
export default Home
