export default new (class LoginPage {
  get pageTitle() {
    return cy.get(".orangehrm-login-title");
  }

  get usernameFieldLabel() {
    return cy.get("form.oxd-form *:nth-child(2) * .oxd-label");
  }

  get passwordFieldLabel() {
    return cy.get("form.oxd-form *:nth-child(3) * .oxd-label");
  }

  get usernameInputField() {
    return cy.get('input[name="username"]');
  }

  get passwordInputField() {
    return cy.get('input[name="password"]');
  }

  get submitButton() {
    return cy.get('button[type="submit"]');
  }

  get resetPasswordButton() {
    return cy.get(".orangehrm-login-forgot-header");
  }

  get credentialData() {
    return cy.get(".orangehrm-demo-credentials > .oxd-text");
  }
})();
