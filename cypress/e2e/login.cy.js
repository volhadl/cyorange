/// <reference types= "cypress" />

import LoginPage from "../../pages/LoginPage";
import loginData from "../fixtures/loginData.json";

const baseUrl = Cypress.config().baseUrl;

describe("Verification of the login page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verification of the page title", () => {
    LoginPage.pageTitle.should("have.text", loginData.pageTitle);
  });

  it("Verification Username and Password fields", () => {
    console.log(loginData);
    console.log(loginData.usernameFieldLabel);

    LoginPage.usernameFieldLabel.should(
      "contain",
      loginData.usernameFieldLabel
    );

    LoginPage.passwordFieldLabel.should(
      "contain",
      loginData.passwordFieldLabel
    );

    LoginPage.usernameInputField
      .invoke("attr", "placeholder")
      .should("contain", loginData.usernameFieldLabel);

    LoginPage.passwordInputField
      .invoke("attr", "placeholder")
      .should("contain", loginData.passwordFieldLabel);
  });

  it("Verification of a login action", () => {
    let credentials = [];

    LoginPage.credentialData
      .each(($el) => {
        credentials.push($el.text().split(": ")[1]);
      })
      .then(() => {
        LoginPage.usernameInputField.type(credentials[0]);
        LoginPage.passwordInputField.type(credentials[1]);
      });

    LoginPage.submitButton.click();

    cy.url().should("eq", baseUrl + loginData.loggedInUsreUrl);
  });

  it("Verification of a reset password action", () => {
    LoginPage.resetPasswordButton.click();

    cy.url().should("eq", baseUrl + loginData.resetPasswordUrl);
  });
});
