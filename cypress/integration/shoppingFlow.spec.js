describe('ShoppingFlow', () => {
  it('Add items to cart, update qty, delete from cart', () => {
    cy.visit('/products');
    cy.get('[data-cy=product-id-26-amount]').type('5');
    cy.get('[data-cy=button-add-product-id-26]').click();
    cy.get('[data-cy=product-id-301-amount]').type('1');
    cy.get('[data-cy=button-add-product-id-301]').click();
    cy.get('[data-cy=product-id-5] > img').click();
    cy.location('pathname').should('match', /\/products\/5$/);
    cy.get('[data-cy=input-product-id5]').type('1');
    cy.get('[data-cy=button-add-product-id5]').click();
    cy.get('[data-cy=header-link-cart]').click();
    cy.location('pathname').should('match', /\/cart$/);
    cy.get('[data-cy=input-product-id-26]').clear().type('10');
    cy.get('[data-cy=button-update-product-id-26]').click();
    cy.get('[data-cy=button-remove-product-id-301]').click();
  });
});
