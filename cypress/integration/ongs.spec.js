/// <reference types="cypress"/>

describe('Ongs', () => {

    it.skip("devem poder realizar um cadastro", ()=>{
        cy.visit('http://localhost:3000/register')
        // cy.get busca um elemento 
        // .type() insere o elemento
        cy.get('[data-cy="name"]').type('Dogs queridos')
        cy.get('[data-cy="email"]').type('dogs@email.com')
        cy.get('[data-cy="whatsapp"]').type('51997440272')
        cy.get('[data-cy="city"]').type('Porto Alegre')
        cy.get('[data-cy="uf"]').type('RS')

        //routing
        //start server com cy.server()
        cy.server()

        // criar uma rota com cy.route()
        //atribuir rota a um alias
        cy.route('POST', '**/ongs').as('postOng');
        cy.get('[data-cy=submit]').click();

        //esperar com cy.wait
        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        });

    });

    it.skip("deve poder realizar um login no sistema",()=>{
        cy.visit('http://localhost:3000')
        cy.get('input').type(Cypress.env('createdOngId'))
        cy.get('.button').click()
    })

    it("Realizar logout", () =>{
        cy.login();
        cy.get('button').click()
    })
})