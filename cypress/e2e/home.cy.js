const Helpers = require('../support/helpers')
const Home = require('../modules/paginaPrincipal')

describe('Testes referente a Home', () => {
    it('Verificar assinatura na página inicial', () => {
        Helpers.acessarAplicacao()
        Home.inscrever()
        cy.get('.alert-success').should('be.visible')
    })
})