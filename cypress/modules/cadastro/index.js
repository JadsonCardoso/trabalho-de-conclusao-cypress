
class Cadastro {
    cmp_cadastro_senha = 'input#password'
    cmp_cadastro_primeiro_nome = 'input[data-qa="first_name"]#first_name'
    cmp_cadastro_sobre_nome = 'input[data-qa="last_name"]#last_name'
    cmp_cadastro_empresa = 'input#company'
    cmp_cadastro_endereco = 'input#address1'
    cmp_cadastro_endereco2 = 'input#address2'
    cmp_cadastro_estado = 'input#state'
    cmp_cadastro_cidade = 'input#city'
    cmp_cadastro_cpf = 'input#zipcode'
    cmp_cadastro_numero_tel = 'input[data-qa="mobile_number"]#mobile_number'

    radio_cadastro_titulo = 'input[type="radio"]'
    select_cadastro_dia = 'select#days'
    select_cadastro_mes = 'select#months'
    select_cadastro_ano = 'select#years'
    select_cadastro_pais = 'select[data-qa="country"]#country'
    check_cadastro_increver_newsletter = 'input[type="checkbox"]#newsletter'
    check_cadastro_receber_ofertas = 'input[type="checkbox"]#optin'
    
    btn_cadastro_criar_contar = 'button[data-qa="create-account"]'

    cadastrarUsuario(
        primeiro_nome,
        segundo_nome,
        empresa,
        endereco1,
        endereco2,
        estado,
        cidade,
        cpf
    ) {
        cy.get(this.radio_cadastro_titulo).check('Mr')
        cy.get(this.cmp_cadastro_senha).type("123456")
        cy.get(this.select_cadastro_dia).select('23')
        cy.get(this.select_cadastro_mes).select('October')
        cy.get(this.select_cadastro_ano).select('2015')
        cy.get(this.check_cadastro_increver_newsletter).check()
        cy.get(this.check_cadastro_receber_ofertas).check()

        cy.get(this.cmp_cadastro_primeiro_nome).type(primeiro_nome)
        cy.get(this.cmp_cadastro_sobre_nome).type(segundo_nome)
        cy.get(this.cmp_cadastro_empresa).type(empresa)
        cy.get(this.cmp_cadastro_endereco).type(endereco1)
        cy.get(this.cmp_cadastro_endereco2).type(endereco2)
        cy.get(this.select_cadastro_pais).select('New Zealand')
        cy.get(this.cmp_cadastro_estado).type(estado)
        cy.get(this.cmp_cadastro_cidade).type(cidade)
        cy.get(this.cmp_cadastro_cpf).type(cpf)
        cy.get(this.cmp_cadastro_numero_tel).type('222 123 321')

        cy.get(this.btn_cadastro_criar_contar).click()
    }

}

module.exports = new Cadastro()