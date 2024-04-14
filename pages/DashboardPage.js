export default new (class DashboardPage {
    get pageTitle() {
        return cy.get('.oxd-topbar-header-breadcrumb-module')
    }
})