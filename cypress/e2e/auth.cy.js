/// <reference types= "cypress" />

describe('Verification of the Dashboard page', () => {
    beforeEach(() => {
        cy.setCookie('orangehrm', '2726101c36f1f7d6e10f4dd8b60b7d1e');
        cy.visit('/')

    })

    it('Verification of the page title', () => {
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    })
})