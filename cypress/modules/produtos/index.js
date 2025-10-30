
class Produtos {
    cmp_produtos_pesquisar_produtos = 'input#search_product'
    
    link_produtos_ver_produto = 'a[href="/product_details/1"]'
    btn_produtos_pesquisar = 'button#submit_search'

    verProdutos() {
        cy.get(this.link_produtos_ver_produto).click()
    }

    pesquisarProdutos(produtos) {
        cy.get(this.cmp_produtos_pesquisar_produtos).type(produtos)
        cy.get(this.btn_produtos_pesquisar).click()
    }

}

module.exports = new Produtos()