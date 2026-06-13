// Delete from cart and add review
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
    cy.get(':nth-child(4) > .product-details > .btn').click();
    cy.get('[style="display: flex; align-items: center; margin-bottom: 20px;"] > input').click();
    cy.get('[style="display: flex; align-items: center; margin-bottom: 20px;"] > input').click();
    cy.get('[style="display: flex; align-items: center; margin-bottom: 20px;"] > input').click();
    cy.get('[style="display: flex; align-items: center; margin-bottom: 20px;"] > input').click();
    cy.get('[style="display: flex; align-items: center; margin-bottom: 20px;"] > input').click();
    cy.get(':nth-child(1) > input').clear('I');
    cy.get(':nth-child(1) > input').type('I like it');
    cy.get('form > button').click();
    cy.get('[style="display: flex; align-items: center; margin-bottom: 20px;"] > button').click();
    cy.get('[href="/cart"]').click();
    cy.get(':nth-child(1) > [style="padding: 12px 10px 12px 12px;"] > button').click();
    cy.get(':nth-child(1) > [style="padding: 12px 10px 12px 12px;"] > button').click();
    cy.get(':nth-child(1) > [style="padding: 12px 10px 12px 12px;"] > button').click();
    /* ==== End Cypress Studio ==== */
  })
})