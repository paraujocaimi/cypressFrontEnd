import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given(/^que acesso o site$/, () => {
    //Rotas 
    cy.server()
    cy.route('POST', "**//api/1/databases/userdetails/collections/newtable?**").as('PostNewTable')
    cy.route('POST', "**//api/1/databases/userdetails/collections/usertable?**").as('PostUserTable')
    cy.route('GET', "**//api/1/databases/userdetails/collections/newtable?**").as('GetNewTable')

    // baseUrl + Register.html
    cy.visit('Register.html')
})

When(/^salvar$/, () => {
    cy.get('button#submitbtn').click()
})