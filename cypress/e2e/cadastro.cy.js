/// <reference types="cypress" />
const Menu = require('../modules/menu');
const Login = require('../modules/login');
const Cadastro = require('../modules/cadastro')
const { faker } = require('@faker-js/faker')
const Helpers = require('../support/helpers')



describe('Testes referente ao Cadastro do Usuário', () => {
    beforeEach(() => {
        Menu.navegarParaLogin()
        cy.get('#header').should('be.visible')
    })
    it('Registrar usuário', () => {
        const nome = faker.person.firstName()
        const email = faker.internet.email()

        Login.preCadastrarUsuario(nome, email)

        const primeiro_nome = faker.person.firstName()
        const segundo_nome = faker.person.lastName()
        const empresa = faker.company.name()
        const endereco1 = faker.location.streetAddress()
        const endereco2 = faker.location.secondaryAddress()
        const estado = faker.location.state()
        const cidade = faker.location.city()
        const cpf = faker.string.numeric(11)
        
        Cadastro.cadastrarUsuario(primeiro_nome, segundo_nome, empresa, endereco1, endereco2, estado, cidade, cpf)


        cy.contains('b', 'Account Created!').should('be.visible')
        Helpers.acessarAplicacao()
        cy.contains('b', nome).should('be.visible')
    })

    it('Registrar usuário com e-mail existente', () => {
        Login.preCadastrarUsuarioEmailEmUso()

        cy.get('form[action="/signup"] > p').should('have.text', 'Email Address already exist!')
        cy.contains('h2', 'New User Signup!')
    })
})
