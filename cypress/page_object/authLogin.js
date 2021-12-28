/// <reference types ="cypress" />

class AuthLogin {
    get loginPageHeading() {
        return cy.get('.vs-c-auth-modal-body__heading')
    }
    get emailInput() {
        return cy.get("input[type=email]");
    }
    get passwordInput() {
        return cy.get('input[type=password');
    }
    get loginBtn() {
        return cy.get('.vs-c-btn').eq(0);
    }

    login(email, pass) {
        this.emailInput.clear().type(email);
        this.passwordInput.clear().type(pass);
        this.loginBtn.click();
    }
}

export const authLogin = new AuthLogin();