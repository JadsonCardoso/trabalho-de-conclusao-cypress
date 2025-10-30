const Cadastro = require('../modules/cadastro')
const Carrinho = require('../modules/carrinho')
const Home = require('../modules/paginaPrincipal')
const Menu = require('../modules/menu')
const Login = require('../modules/login')
const { faker } = require('@faker-js/faker')
const Helpers = require('../support/helpers')
const Pagamento = require('../modules/pagamento')

describe('Testes referente ao Carrinho', () => {
    it('Fazer pedido: Registrar antes de finalizar a compra', () => {
        Menu.navegarParaLogin()
        cy.get('#header').should('be.visible')

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

        Menu.navegarParaHome()
        Home.adicionarProdutoCarrinho()

        Home.verCarrinhoAposAdicionarProduto()
        cy.url().should('includes', 'view_cart')
        cy.contains('Proceed To Checkout').should('be.visible')

        Carrinho.fazerCheckout()
        const endereco = [
            'Your delivery address',
            `Mr. ${primeiro_nome}`,
            `${empresa}`,
            `${endereco1}`,
            `${endereco2}`,
            'New Zealand',
            '222 123 321'
        ]

        endereco.forEach(t => cy.get('ul#address_delivery').should('contain.text', t))

        cy.get('tr[id="product-1"] td.cart_description > h4')
            .should('have.text', 'Blue Top')

        cy.get('tr[id="product-1"] td.cart_description > p')
            .should('have.text', 'Women > Tops')

        cy.get('tr[id="product-1"] td.cart_price > p')
            .should('have.text', 'Rs. 500')

        cy.get('tr[id="product-1"] td.cart_quantity > button')
            .should('have.text', 1)

        cy.get('tr[id="product-1"] td.cart_total > p')
            .should('have.text', 'Rs. 500')

        Carrinho.comentarioPedido('Lorem Ipsum')
        Carrinho.fazerPedido()

        cy.url().should('includes', 'payment')
        Pagamento.preencherPagamentoCartao()
        cy.get('div[class="col-sm-9 col-sm-offset-1"] > p').should('have.text', 'Congratulations! Your order has been confirmed!')

        Menu.removerConta()
        cy.get('h2[data-qa="account-deleted"] > b').should('have.text', 'Account Deleted!')
        cy.continuarRemocaoConta()
    })
})