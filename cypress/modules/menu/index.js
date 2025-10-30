const helpers = require('../../support/helpers');

class Menu {
    link_menu_ir_para_login = 'a[href="/login"]'
    link_menu_remover_conta = 'a[href="/delete_account"]'
    link_menu_ir_para_contatos = 'a[href="/contact_us"]'
    link_menu_ir_para_produtos = 'a[href="/products"]'
    link_menu_carrinho = 'a[href="/view_cart"]'
    link_menu_home = 'a[href="/"]'
    link_menu_sair = 'a[href="/logout"]'

    navegarParaLogin() {
        helpers.acessarAplicacao()
        cy.get(this.link_menu_ir_para_login).click()
    }

    navegarParaContatos() {
        helpers.acessarAplicacao()
        cy.get(this.link_menu_ir_para_contatos).click()
    }

    navegarParaProdutos() {
        helpers.acessarAplicacao()
        cy.get(this.link_menu_ir_para_produtos).click()
    }

    navegarParaCarrinho() {
        helpers.acessarAplicacao()
        cy.get(this.link_menu_carrinho).click()
    }

      navegarParaHome() {
        helpers.acessarAplicacao()
    }

    sairDaAplicacao() {
        cy.get(this.link_menu_sair).click()
    }

    removerConta() {
        cy.get(this.link_menu_remover_conta).click()
    }
}
module.exports = new Menu();