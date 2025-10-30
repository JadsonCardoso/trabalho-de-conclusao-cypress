/// <reference types="cypress" />
const Menu = require('../modules/menu')
const Produtos = require('../modules/produtos')

describe('Testes referente aos Produtos', () => {
    beforeEach(() => {
        Menu.navegarParaProdutos()
        cy.get('#header').should('be.visible')
    })

    it('Acessar produto com Sucesso', () => {
        cy.url().should('includes', 'products')
        cy.get('input[id="search_product"]').should('be.visible')
        cy.contains('h2', 'All Products')
        Produtos.verProdutos()
        cy.url().should('includes', 'product_details/1')
        const textos = [
            'Blue Top',
            'Category: Women > Tops',
            'Availability:',
            'In Stock',
            'Condition:',
            'New',
            'Brand:',
            'Polo'
        ]

        textos.forEach(t => cy.get('div.product-information').should('contain.text', t))
    })

    it('Pesquisar produto', () => {
        Produtos.pesquisarProdutos('sleeveless')
        cy.url().should('include', 'search=sleeveless')

        cy.get('div.productinfo.text-center')
            .each(($produto) => {
                cy.get($produto).should('contain.text', 'Sleeveless')
            })
    })

})