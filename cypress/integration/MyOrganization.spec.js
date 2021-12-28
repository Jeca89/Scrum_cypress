/// <reference types ="cypress" />


import { authLogin} from '../page_object/authLogin';
import { authOrganization, myOrganization} from '../page_object/authOrganization';
const faker = require("faker");

describe('my organization open', () => {

    let validEmail = 'jelena.marko2013@gmail.com';
    let validPassword = '1234test';

    let userData = {
        randomTitle: faker.name.findName()
    }

    before('visit and login', () => {
        cy.visit('/')
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
        }).as('login');
        authLogin.loginPageHeading.should('be.visible');
        cy.url().should('contains', '/login');


        authLogin.login(validEmail, validPassword);
        cy.wait('@login').then((interception) => {

            expect(interception.response.statusCode).eq(200);
        });
        authLogin.loginPageHeading.should('not.exist');
        cy.url().should('not.contains', "/login");
        myOrganization.myOrgPage.should('exist');

    });

    it('Open my organization, create board', () =>{

        cy.intercept({
            method: 'POST',
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/boards"
        }).as('create');

        myOrganization.myOrgPage.click();
        myOrganization.okBtn.click();
        myOrganization.addNewBoard.click();
        myOrganization.nextBtn.should('be.disabled');
        myOrganization.dotPaginationParent.children.first.should('have.class', 'activ');

       

        myOrganization.inputText(userData.randomTitle);
        myOrganization.nextBtn.click();
        myOrganization.nextBtn.should('be.disabled');
        myOrganization.checkBox.click();
        myOrganization.nextBtn.click();
        myOrganization.nextBtn.click();
        myOrganization.nextBtn.click();
        myOrganization.nextBtn.click();

        cy.wait('@create').then((interception) => {
            expect(interception.response.statusCode).eq(201)

        });
    })
});