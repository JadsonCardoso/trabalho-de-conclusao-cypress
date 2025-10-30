Trabalho Final - Testes E2E com Cypress

Este projeto tem como objetivo realizar testes end-to-end (E2E) utilizando o Cypress, com geração de relatórios automatizados por meio do cypress-mochawesome-reporter e gerenciamento de variáveis de ambiente com dotenv.

Tecnologias Utilizadas

- Node.js
- Cypress
- cypress-mochawesome-reporter
- dotenv
- @faker-js/faker

Configuração do Projeto
- Clonar o repositório
git clone https://github.com/seu-usuario/trabalho-final-cypress.git
cd trabalho-final-cypress

Instalar as dependências
- npm install

Criar o arquivo .env

- Crie um arquivo chamado .env na raiz do projeto e adicione a variável de ambiente usada pelo Cypress:

BASE_URL_PADRAO=https://www.automationexercise.com

Executando os Testes
- Abrir o Cypress em modo interativo
- npx cypress open

Rodar os testes em modo headless (terminal)
- npx cypress run

Relatórios

- Este projeto utiliza o Mochawesome Reporter para gerar relatórios detalhados dos testes.
- Após a execução, os relatórios serão salvos na pasta:
- cypress/reports/html
- Para gerar o relatório consolidado e abrir no navegador