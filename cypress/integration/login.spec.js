/// <reference types ="cypress" />

import { authLogin} from '../page_object/authLogin';

describe('login', () => {

    let validEmail = 'jelena.marko2013@gmail.com';
    let validPassword = '1234test'

    before('visit app', () => {
        cy.visit('/')


    });

    it.only('Login with valid credentials', () => {

        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
        }).as('login');



        authLogin.login(validEmail, validPassword);
        cy.wait('@login').then((interception) => {

            expect(interception.response.statusCode).eq(200);
        });


    });

});