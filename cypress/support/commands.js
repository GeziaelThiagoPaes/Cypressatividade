
Cypress.Commands.add('usuario', (login, senha) => {

    cy.get('#mat-input-0').type(login)
    cy.get('#mat-input-1').type(senha, { log: false })
    cy.get('.acessar').click()
    cy.wait(1000)

});

Cypress.Commands.add('origemDados', (selecionarOrigemDados) => {

    if (cy.get('.swal2-popup').should('be.visible')) {
        cy.get('.swal2-confirm').click()
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder').click()
        cy.get('[class="mat-option-text"]').contains(selecionarOrigemDados).click()
    } else {
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder').click()
        cy.get('[class="mat-option-text"]').contains(selecionarOrigemDados).click()
    }

})

Cypress.Commands.add('acessaModuloConfiguracao', (moduloConfiguracaos, submoduloConfiguracoes) => {

    cy.get('.mat-dialog-actions > .mat-raised-button').click()
    cy.get(':nth-child(4) > .primary > :nth-child(1) > .mat-list-item-content > .mat-list-text > .mat-line').contains(`${moduloConfiguracaos}`).click()
    cy.get('.mat-list-text').contains(`${submoduloConfiguracoes}`).click()


});

Cypress.Commands.add('consultaRegra', (filtroParidade, preencheCampoRegra, quantidadeConsultaDadosGrid) => {

    let tipoParidade = filtroParidade.charAt(0).toUpperCase() + filtroParidade.slice(1).toLocaleLowerCase();

    function filtroParidadeConsultaGeral() {

        if
            (tipoParidade = 'Todos') {
            tipoParidade = 'Todos' ? 'Sim' : tipoParidade = 'Não'
        }
        else {
            cy.get('[ng-reflect-model]').contains(`${tipoParidade}`).should('be.visible')
        }
    }

    cy.get('#mat-select-5 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
    cy.get(`.mat-option-text`).contains(`${tipoParidade}`).click()


    cy.get('#mat-input-8').type(`${preencheCampoRegra}`)
    cy.get('.mat-raised-button > .mat-button-wrapper').click().wait(900)

    let listaPercorrerGrid = [1, 2, 3, 4, 5, 6]

    listaPercorrerGrid.forEach((linhaColunaPreencherEditar) => {

        if (linhaColunaPreencherEditar <= quantidadeConsultaDadosGrid) {

            cy.get(`:nth-child(${linhaColunaPreencherEditar + 1}) > .cdk-column-Nome`).should('be.visible')
            cy.get(`:nth-child(${linhaColunaPreencherEditar + 1}) > .cdk-column-Nome`).contains(`${preencheCampoRegra}`)
            cy.get(`:nth-child(${linhaColunaPreencherEditar + 1}) > .cdk-column-editar > .mat-icon-button > .mat-button-wrapper > .mat-icon`).click()
            cy.contains(`${preencheCampoRegra}`).should('be.visible')
            filtroParidadeConsultaGeral()
            cy.get('.mat-dialog-actions > .mat-button').click()

        }

    })

});