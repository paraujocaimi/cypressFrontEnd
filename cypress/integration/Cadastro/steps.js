/// <reference types="cypress"/>

// Load Chance
var Chance = require('chance');
// Instantiate Chance so it can be used
var chance = new Chance();

Given(/^que acesso o site$/, () => {
    //Rotas 
    cy.server()
    cy.route('POST', "**//api/1/databases/userdetails/collections/newtable?**").as('PostNewTable')
    cy.route('POST', "**//api/1/databases/userdetails/collections/usertable?**").as('PostUserTable')
    cy.route('GET', "**//api/1/databases/userdetails/collections/newtable?**").as('GetNewTable')

    // baseUrl + Register.html
    cy.visit('Register.html')
})


When(/^informar meus dados$/, () => {
	cy.get('input[placeholder="First Name"]').type(chance.first())
    cy.get('input[placeholder="Last Name"]').type(chance.last())
    cy.get('input[ng-model="EmailAdress"]').type(chance.email())
    cy.get('input[ng-model="Phone"]').type(chance.phone({formatted: false}))

    //checkBox e radioBottoon
    cy.get('input[value="FeMale"]').check()
    cy.get('input[type=checkbox]').check('Cricket')
    cy.get('input[type=checkbox]').check('Hockey')

    //select 
    cy.get('select#Skills').select('Javascript')
    cy.get('select#countries').select('Antigua and Barbuda')
    cy.get('select#country').select('Australia', {force: true})
    cy.get('select#yearbox').select('1993')
    cy.get('select[ng-model^=month]').select('March')
    cy.get('select[ng-model^=day]').select('13')

    cy.get('input#firstpassword').type('Agilizei@2020')
    cy.get('input#secondpassword').type('Agilizei@2020')

    // uppload 
    cy.get('input#imagesrc').attachFile('image.png')    
})

When(/^salvar$/, () => {
    cy.get('button#submitbtn').click()
})

Then(/^devo ser cadastrado com sucesso$/, () => {
	//validando retorno do XHR da api 
    cy.wait('@PostNewTable').then((resPostNewTable) => {
        cy.log(resPostNewTable.status)
        expect(resPostNewTable.status).to.be.equal(200);
        assert.equal( resPostNewTable.status, 200, "Status retornando deve ser 200");
    })

    cy.wait('@PostUserTable').then((resPostUserTabel) => {
        cy.log(resPostUserTabel.status)
        expect(resPostUserTabel.status).to.be.equal(200);
        assert.equal( resPostUserTabel.status, 200, "Status retornando deve ser 200");
    })

    cy.wait('@GetNewTable').then((resGetNewTable) => {
        cy.log(resGetNewTable.status)
        expect(resGetNewTable.status).to.be.equal(200);
        assert.equal( resGetNewTable.status, 200, "Status retornando deve ser 200");
    })

    //validando se esta na pagina correta
    cy.url().should('contain', 'WebTable.html')

})
