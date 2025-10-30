class Carrinho {
    cmp_carrinho_comentario = 'textarea[name="message"]'

    btn_carrinho_checkout = 'a[class="btn btn-default check_out"]'
    btn_carrinho_fazer_pedido = 'a[href="/payment"]'

    fazerCheckout() {
        cy.get(this.btn_carrinho_checkout).click()
    }

    comentarioPedido(comentario) {
        cy.get(this.cmp_carrinho_comentario).type(comentario)
    }

    fazerPedido() {
        cy.get(this.btn_carrinho_fazer_pedido).click()
    }
}

module.exports = new Carrinho()