const { faker } = require('@faker-js/faker')

class Home {
    cmp_home_inscricao = 'input#susbscribe_email'

    btn_home_enviar_inscricao = 'button#subscribe'
    btn_home_produto_1 = 'div[class="productinfo text-center"] > a[data-product-id="1"]'

    link_home_modal_produto_adicionado_ver_carrinho = 'div[class="modal-content"] a[href="/view_cart"]'

    inscrever() {
        cy.get(this.cmp_home_inscricao).type(faker.internet.email())
        cy.get(this.btn_home_enviar_inscricao).click()
    }

      adicionarProdutoCarrinho() {
        cy.get(this.btn_home_produto_1).contains("Add to cart").click();
    }

      verCarrinhoAposAdicionarProduto() {
        cy.get(this.link_home_modal_produto_adicionado_ver_carrinho).click()
    }
}

module.exports = new Home()