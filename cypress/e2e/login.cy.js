/// <reference types="cypress" />
const Menu = require('../modules/menu')
const Login = require('../modules/login')
const loginFixture = require('../fixtures/login.json');

describe('Testes referente ao Login do usuário', () => {
    beforeEach(() => {
        Menu.navegarParaLogin()
        cy.get('#header').should('be.visible')
    })

    it('Login do usuário com e-mail e senha corretos', () => {
        cy.url().should('includes', 'login')
        cy.get('input[data-qa="login-email"]').should('be.visible')

        Login.fazerlogin()

        cy.get('a[href="/delete_account"]').should('be.visible')
        cy.contains('a', loginFixture.nome)
    })

    it('Login de usuário com e-mail e senha incorretos', () => {
        cy.url().should('includes', 'login')
        Login.preencherCampoEmail('teste.1236@teste.com')
        Login.preencherCampoSenha('12345684')
        Login.clicarBotaoLogin()

        cy.contains('p', 'Your email or password is incorrect!')
        cy.get('a[href="/delete_account"]').should('not.exist')
    })


    it.only('Sair do usuário', () => {
        cy.url().should('includes', 'login')
        Login.fazerlogin()

        cy.contains('a', loginFixture.nome)

        Menu.sairDaAplicacao()
        cy.url().should('includes', 'login')
        cy.get('input[data-qa="login-emaila"]').should('be.visible')
    })
})