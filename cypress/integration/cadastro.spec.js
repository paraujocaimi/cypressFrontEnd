/// <reference types="cypress"/>

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
        // baseUrl + Register.html
        cy.visit('Register.html')
        cy.get('input[placeholder="First Name"]').type('Aluno')
        cy.get('input[placeholder="Last Name"]').type('Agilizei')
        cy.get('input[ng-model="EmailAdress"]').type('aluno@agilizei.com.br')
        cy.get('input[ng-model="Phone"]').type('1234567890')

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

        //button
        cy.get('button#submitbtn').click()


    });
});