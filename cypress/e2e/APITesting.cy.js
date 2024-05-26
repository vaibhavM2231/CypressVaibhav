

describe("API testing Suite",()=>{

   
    it("Get Request",function() {

        cy.request({
        method:"GET",
        url:Cypress.env("APITestingUrl")+"/api/users?page=2"
        }).then((response)=>{
            cy.log("Response of the API: "+response.body)
           
            expect(response.status).to.eq(200)
            expect(response.body.page).to.eq(2)
            expect(response.body.data.length).to.eq(6)
            expect(response.body.data[0].email).to.contains(Cypress.env("apiEmail"))
    
            })
    })


    it('POST request', function()  {
    
    cy.request({method: 'POST',
     url:Cypress.env("APITestingUrl")+"/api/users",
     body: {
    "name": Cypress.env("name"),
    "job": Cypress.env("job")
    }}).then(function(response){
        
        cy.log("Response of the API: "+response)
        expect(response.status).to.eq(201)
        expect(response.body.name).to.eq(Cypress.env("name"))
        expect(response.statusText).to.eq("Created")
        expect(response.headers).to.have.property("content-type").contains("application/json")    
        expect(response.duration).to.be.lessThan(Cypress.env("duration"))     
        })
    })

})