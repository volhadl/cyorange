/// <reference types= "cypress" />

import DashboardPage from "../../pages/DashboardPage";
import dashboardData from "../fixtures/dashboardData.json"

describe('Verification of the Dashboard page', () => {
    beforeEach(() => {
        cy.setCookie('orangehrm', '0237ab34a0695bedc18e8bbda76d421c');
        cy.visit('/')
        cy.reload()
    })

    it('Verification of the page title', () => {
        DashboardPage.pageTitle.should('have.text', dashboardData.dashboardTitle)
    })

    it.only('Verification of dashboard items', () => {
        let items = [];
        
        cy.get('div.orangehrm-dashboard-widget-name').each(($el) => {
            items.push($el.text())
        })
        .then(() => {
            expect(items).to.eql(dashboardData.listOfItems);
        })
    })
})