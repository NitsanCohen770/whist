Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

before(() => {
  cy.visit('http://localhost:3000/');
  cy.waitForReact();
});

describe('This is an E2E test to check if adding a product to the cart works.', () => {
  let productTitle = '';
  it('Click on the "Buy" button at the first product in the list', () => {
    cy.react('Product').first().find('[type="button"]').click();
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
