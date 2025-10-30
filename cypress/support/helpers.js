// support/helpers.js
function acessarAplicacao() {
    cy.visit(Cypress.env('BASE_URL_PADRAO'))
    cy.get('img[alt="Website for automation practice"]')
}

module.exports = {
    acessarAplicacao
}