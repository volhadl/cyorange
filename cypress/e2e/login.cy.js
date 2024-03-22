/// <reference types= "cypress" /> 
import * as loginData from '../../testData/loginData'

describe("Login Form", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("logging in", () => {
    cy.get(loginData.username).type('Admin')
    cy.get(loginData.password).type('admin123')
    cy.get(loginData.submit).click()
    cy.url().should('eq', Cypress.config().baseUrl + loginData.loggedInUrl)
  })
});