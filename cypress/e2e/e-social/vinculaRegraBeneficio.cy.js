/// <reference types="cypress" />

describe('Teste de regras com paridade', () => {

    beforeEach(() => {

        cy.visit('/')

        cy.fixture('usuario').then((dados) => {

            cy.usuario(dados.login, dados.senha)

        })

        cy.origemDados('PROXIMA ÁGUA CLARA - 04')
        
        cy.acessaModuloConfiguracao('Configurações', 'Vincular Regra de Benefício ao eSocial (Tabela 25)')

    })

    it('Validar todos os elementos visíveis na tela', () => {

        cy.get('.mat-headline').contains('Vincular Regra de Benefício ao eSocial (Tabela 25)').should('be.visible')
        cy.get('.no-results').contains('Nenhuma origem de dados foi encontrado!').should('be.visible')
        cy.get('[fxflex="25"] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('be.visible')
        cy.get('#mat-input-8').should('be.visible')
        cy.get('.mat-raised-button').should('be.visible')
        cy.get('.mat-header-row > .cdk-column-editar').should('be.visible')
        cy.get('.mat-header-row > .cdk-column-Nome').should('be.visible')
        cy.get('.mat-header-row > .cdk-column-FundamentacaoLegal').should('be.visible')
        cy.get('.mat-header-row > .cdk-column-TipoBeneficio').should('be.visible')
        cy.get('.mat-header-row > .cdk-column-Tabela25Codigo').should('be.visible')
        cy.get('.mat-header-row > .cdk-column-Tabela25Descricao').should('be.visible')
        cy.get('.mat-paginator-page-size').should('be.visible')
        cy.get('.mat-paginator-range-actions').should('be.visible')

    })

    it('Realizar consulta de regras com paridade', () => {

        cy.consultaRegra('sim', 'Apos. Voluntária Tempo', 1)
    })

    it('Realizar consulta de regras sem paridade', () => {

        cy.consultaRegra('Não', 'Apos. Voluntária Tempo', 1)
    })

    it('Realizar consulta da regra com paridade e a sua descrição', () => {

        cy.consultaRegra('SIM', 'Apos. Voluntária Tempo', 5)
    })

    it('Realizar consulta da regra sem paridade e a sua descrição', () => {

        cy.consultaRegra('Não', 'Apos. Voluntária Tempo', 2)
    })

    it.only('Realizar consulta da regra com paridade ou sem paridade e a sua descrição', () => {

        cy.consultaRegra('Todos', 'Apos. Voluntária Tempo', 5)
    })


})
