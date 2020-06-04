// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("createOng", ()=>{
    cy.request({
        method: 'Post',
        url: "http://localhost:3333/ongs",
        body: {
            name:"gatos ",
            email:"gatos@gmail.com",
            whatsapp:"51997440272",
            city:"Porto Alegre",
            uf:"RS"}
    }).then(response=>{
        expect(response.body.id).is.not.null;
        cy.log(response.body.id)
        Cypress.env('createdOngId', response.body.id)
    })
})

Cypress.Commands.add("login", ()=>{
    cy.visit('http://localhost:3000/profile', {
        onBeforeLoad:(browser) => {
            browser.localStorage.setItem('ongName', 'gatos')
            browser.localStorage.setItem('ongId', Cypress.env('createdOngId'))
        }
    })
})

Cypress.Commands.add("createNewIncidents", ()=>{
    cy.request({
        method: 'Post',
        url: "http://localhost:3333/incidents",
        headers: {
            'Authorization': `${Cypress.env('createdOngId')}`
        },
        body: {
            description: "animal precisa de novo moradia",
            title: "animal abandonado",
            value: "200"    
        }
    }).then(response=>{
        expect(response.body.id).is.not.null;
        cy.log(response.body.id)
        Cypress.env('incidetId', response.body.id)
    })
})

Cypress.Commands.add("deleteIncident", ()=>{
    cy.request({
        method: 'Delete',
        url: "http://localhost:3333/incidents/"+`${Cypress.env('incidetId')}`, 
        headers: {
            'Authorization': `${Cypress.env('createdOngId')}`
        }
    }).then(response=>{
        expect(response.status).to.eq(204)
    })
})