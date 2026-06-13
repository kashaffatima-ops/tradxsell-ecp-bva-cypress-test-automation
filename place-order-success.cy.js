// Place order and checkout successfully
describe('template spec', () => {
  it('passes', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[style="border: white; background-color: white;"] > .nav-link').click();
    cy.get(':nth-child(1) > input').clear('amna123@gmail.com');
    cy.get(':nth-child(1) > input').type('amna123@gmail.com');
    cy.get(':nth-child(2) > input').clear('1');
    cy.get(':nth-child(2) > input').type('1234');
    cy.get('form > button').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .product-details > .btn').click();
    cy.get('select').select('white');
    cy.get('[style="display: flex; align-items: center; margin-bottom: 20px;"] > button').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/cart"]').click();
    cy.get('.btn').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.btn').click();
    /* ==== End Cypress Studio ==== */
  });
})