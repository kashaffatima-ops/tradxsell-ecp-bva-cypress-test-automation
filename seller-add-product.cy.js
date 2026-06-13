//Seller add product  functionality
describe('template spec', () => {
  it('passes', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.home-container > a').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/admin/registers');
    cy.get(':nth-child(1) > input').clear('A');
    cy.get(':nth-child(1) > input').type('Amna');
    cy.get(':nth-child(2) > input').clear('i');
    cy.get(':nth-child(2) > input').type('i221529@gmail.com');
    cy.get(':nth-child(3) > input').clear('1');
    cy.get(':nth-child(3) > input').type('1234');
    cy.get(':nth-child(4) > input').clear('x');
    cy.get(':nth-child(4) > input').type('xyz');
    cy.get(':nth-child(5) > input').clear('1');
    cy.get(':nth-child(5) > input').type('111111111111');
    cy.get('form > button').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/admin/registers');
    cy.get('[style="border: white; background-color: white;"] > .nav-link').click();
    cy.get(':nth-child(1) > input').clear('i221529@gmail.com');
    cy.get(':nth-child(1) > input').type('i221529@gmail.com');
    cy.get(':nth-child(2) > input').clear('1');
    cy.get(':nth-child(2) > input').type('1234');
    cy.get('form > button').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > a').click();
    cy.get('[style="display: flex; justify-content: space-between; margin-bottom: 20px;"] > button').click();
    cy.get('[name="id"]').clear('8');
    cy.get('[name="id"]').type('876543');
    cy.get('[name="name"]').clear('I');
    cy.get('[name="name"]').type('IPHONE 12 PRO MAX');
    cy.get('[name="price"]').clear('1');
    cy.get('[name="price"]').type('1000000');
    cy.get('[type="file"]').click();
    cy.get('[name="category"]').select('Tools & Hardware');
    cy.get('[name="type"]').select('international');
    cy.get('[name="sizes"]').click();
    cy.get('[name="sizes"]').clear('a');
    cy.get('[name="sizes"]').type('large');
    cy.get('[name="colors"]').clear('g');
    cy.get('[name="colors"]').type('golden');
    cy.get('[name="quantity"]').clear('6');
    cy.get('[name="quantity"]').type('6');
    cy.get('textarea').click();
    cy.get('#latest').check();
    cy.get('#featured').check();
    cy.get('form > button').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > a').click();
    /* ==== End Cypress Studio ==== */
  })
})