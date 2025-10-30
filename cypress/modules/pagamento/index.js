const { faker } = require('@faker-js/faker')
class Pagamento {
    cmp_pagamento_nome_cartao = 'input[data-qa="name-on-card"]'
    cmp_pagamento_numero_cartao = 'input[data-qa="card-number"]'
    cmp_pagamento_cvc = 'input[data-qa="cvc"]'
    cmp_pagamento_vencimento_mes = 'input[data-qa="expiry-month"]'
    cmp_pagamento_vencimento_ano = 'input[data-qa="expiry-year"]'

    btn_pagamento_confirmar_pedido = 'button#submit'

    preencherPagamentoCartao() {
        cy.get(this.cmp_pagamento_nome_cartao).type(faker.finance.accountName())
        cy.get(this.cmp_pagamento_numero_cartao).type(faker.finance.creditCardNumber())
        cy.get(this.cmp_pagamento_cvc).type(faker.finance.currencyNumericCode())
        cy.get(this.cmp_pagamento_vencimento_mes).type(faker.date.month({index: true }).toString().padStart(2, '0'))
        cy.get(this.cmp_pagamento_vencimento_ano).type(faker.date.future().getFullYear().toString())
        cy.get(this.btn_pagamento_confirmar_pedido).click()
    }
}

module.exports = new Pagamento()