const formularioDeContato = require('../../fixtures/formulario-de-contato.json');

class Contato {
    cmp_contato_nome = 'input[data-qa="name"]'
    cmp_contato_email = 'input[data-qa="email"]'
    cmp_contato_assunto = 'input[data-qa="subject"]'
    cmp_contato_mensagem = 'textarea[data-qa="message"]'
    cmp_contato_arquivo = 'input[type="file"]'
    btn_contato_enviar = 'input[data-qa="submit-button"]'

    preencherFormularioDeContato() {
        cy.get(this.cmp_contato_nome).type(formularioDeContato.name)
        cy.get(this.cmp_contato_email).type(formularioDeContato.email)
        cy.get(this.cmp_contato_assunto).type(formularioDeContato.subject)
        cy.get(this.cmp_contato_mensagem).type(formularioDeContato.message)

        cy.fixture('example.json').as('arquivo')
        cy.get(this.cmp_contato_arquivo).selectFile('@arquivo')

        cy.get(this.btn_contato_enviar).click()

    }
}

module.exports = new Contato();