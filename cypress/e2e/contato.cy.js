/// <reference types="cypress" />
const Menu = require('../modules/menu')
const Contato = require('../modules/contato')

describe('Testes referente ao Contato do usuário', () => {
    it('Formulário de contato', () => {
        Menu.navegarParaContatos()
        cy.get('#header').should('be.visible')
        
        cy.url().should('includes', 'contact_us')
        cy.get('input[type="file"]').should('be.visible')
        cy.contains('h2', 'Get In Touch')

        Contato.preencherFormularioDeContato()

        cy.get('.status').should('be.visible')
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
        cy.contains('div', 'Success! Your details have been submitted successfully.') 
    })
})