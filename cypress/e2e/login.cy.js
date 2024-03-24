/// <reference types= "cypress" />
import LoginPage from '../../pages/LoginPage'
import * as loginData from '../../testData/loginData'

describe('Verification of the login page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Verification of the page title', () => {
        cy.get(LoginPage.pageTitle).should('have.text', 'Login')
    })

    it('Verification Username and Password fields', () => {
        cy.get(LoginPage.usernameFieldName).should('contain',loginData.usernameFieldName)
        cy.get(LoginPage.passwordFieldName).should('contain',loginData.passwordFieldName)
        cy.get(LoginPage.usernameInputField).invoke('attr', 'placeholder').should('contain', loginData.usernameFieldName)
        cy.get(LoginPage.passwordInputField).invoke('attr', 'placeholder').should('contain', loginData.passwordFieldName)
    })

    it('Verification of a login action', () => {
        let username = []
        cy.get('.orangehrm-demo-credentials > .oxd-text').each(($el) => {
                username.push($el.text().split(': ')[1])
            }).then(() => {
                cy.get(LoginPage.usernameInputField).type(username[0])
                cy.get(LoginPage.passwordInputField).type(username[1])
            })
        cy.get(LoginPage.submit).click()
        cy.url().should('eq', Cypress.config().baseUrl + loginData.loggedInUsreUrl)
    })

    it('Verification of a reset password action', () => {
        cy.get('.orangehrm-login-forgot-header').click()
        cy.url().should('eq', Cypress.config().baseUrl + loginData.resetPasswordUrl)
    })
})
