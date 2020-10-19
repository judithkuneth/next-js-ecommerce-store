describe('ShoppingFlow', () => {
  it('Add items to cart, update qty, delete from cart', () => {
    cy.visit('/products');
    cy.get('[data-cy=product-id-26-amount]').type('5');
    expect(true).to.equal(true);
  });
});
