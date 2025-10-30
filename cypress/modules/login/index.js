const loginFixture = require('../../fixtures/login.json');

class Login {
    cmp_login_email = 'input[data-qa="login-email"]'
    cmp_login_senha = 'input[data-qa="login-password"]'
    cmp_login_signup_nome = 'input[data-qa="signup-name"]'
    cmp_login_signup_email = 'input[data-qa="signup-email"]'

    btn_login = 'button[data-qa="login-button"]'
    btn_login_signup = 'button[data-qa="signup-button"]'

    fazerlogin() {
        cy.get(this.cmp_login_email).type(loginFixture.email)
        cy.get(this.cmp_login_senha).type(loginFixture.senha)

        cy.get(this.btn_login).click()
    }

    preencherCampoEmail(email) {
        cy.get(this.cmp_login_email).type(email)
    }

    preencherCampoSenha(senha) {
        cy.get(this.cmp_login_senha).type(senha)
    }

    clicarBotaoLogin() {
        cy.get(this.btn_login).click()
    }

    preCadastrarUsuario(signutNome, signutEmail) {
        cy.get(this.cmp_login_signup_nome).type(signutNome)
        cy.get(this.cmp_login_signup_email).type(signutEmail)
        cy.get(this.btn_login_signup).click()
    }

    preCadastrarUsuarioEmailEmUso() {
        cy.get(this.cmp_login_signup_nome).type(loginFixture.nome)
        cy.get(this.cmp_login_signup_email).type(loginFixture.email)
        cy.get(this.btn_login_signup).click()
    }

}

module.exports = new Login();