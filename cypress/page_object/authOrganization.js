/// <reference types ="cypress" />


class MyOrganization {
    get myOrgPage() {
        return cy.get('a[class = "vs-c-list__btn vs-c-list__organisation"]');
    }
    get okBtn() {
        return cy.get('button[class="vs-c-btn vs-c-btn--primary vs-c-btn--lg vs-u-font-sm vs-c-modal--features-confirm-button"]');
    }
    get addNewBoard() {
        return cy.get('div[class="vs-c-organization-boards__item--add-new"]');
    }
    get titleInput() {
        return cy.get('input[type="text"]').eq(1);
    }
    get nextBtn() {
        return cy.get('.el-button--success').eq(1);
    }
    inputText(title) {
        this.titleInput.clear().type(title);
    }
    get checkBox() {
        return cy.get('.vs-c-radio-check').eq(0);
    }

    get dotPaginationParent() {
        return cy.get('.vs-c-dot-pagination');
    }
    
}

export const myOrganization = new MyOrganization();