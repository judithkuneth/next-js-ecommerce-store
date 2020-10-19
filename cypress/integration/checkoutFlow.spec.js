describe('CheckoutFlow', () => {
  it('adds items to cart, inserts payment info, checks out', () => {
    cy.visit('/products');
    cy.get('[data-cy=product-id-26-amount]').type('5');
    cy.get('[data-cy=button-add-product-id-26]').click();
    cy.get('[data-cy=header-link-cart]').click();
    cy.get('[data-cy=button-checkout]').click();
    cy.location('pathname').should('match', /\/checkout$/);
    cy.get('[data-cy=input-firstname]').type('Hungry');
    cy.get('[data-cy=input-lastname]').type('Pete');
    cy.get('[data-cy=input-street]').type('Burgerstraße 20/3');
    cy.get('[data-cy=input-zip-code]').type('1030');
    cy.get('[data-cy=input-creditcard-name]').type('Hungry Pete');
    cy.get('[data-cy=input-creditcard-number]').type('1234556677889');
    cy.get('[data-cy=input-ccv]').type('123');
    cy.get('[data-cy=button-buy]').click();
    cy.location('pathname').should('match', /\/checkout\/thanks$/);
  });
});
