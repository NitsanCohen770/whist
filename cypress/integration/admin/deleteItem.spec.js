Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

before(() => {
  cy.visit('http://localhost:3000/admin');
  cy.waitForReact();
});

describe('This is an E2E test to check if deleting a product from the list works.', () => {
  it('Click on the "Delete" button on the first product in the list', () => {
    cy.react('Button').first().click();
    cy.react('Product')
      .first()
      .find('h5')
      .invoke('text')
      .then(text => {
        productTitle = text;
      });
    cy.log(productTitle);
  });

  it('Should contain the product that was added in the last test', () => {
    cy.get('[data-cy=dropdown]').click();
    cy.get('[data-cy=dropdown-item]')
      .click()
      .invoke('text')
      .then(text => {
        const productName = text.split(':')[0].trim();
        assert.equal(productName, productTitle);
      });
  });
});
