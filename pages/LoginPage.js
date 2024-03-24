class LoginPage {
    pageTitle = '.orangehrm-login-title'
    usernameFieldName = 'form.oxd-form *:nth-child(2) * .oxd-label'
    passwordFieldName = 'form.oxd-form *:nth-child(3) * .oxd-label'
    usernameInputField = 'input[name="username"]'
    passwordInputField = 'input[name="password"]'
    submit = 'button[type="submit"]'
    resetPasswordButton = '.orangehrm-login-forgot-header'
}
export default new LoginPage()
