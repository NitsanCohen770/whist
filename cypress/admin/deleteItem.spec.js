Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

before(() => {
  cy.visit('http://localhost:3000/admin');
  cy.waitForReact();
});

describe('This is an E2E test to check if deleting a product from the list works.', () => {
  let productTitle = '';
  it('Click on the "Delete" button on the first product in the list', () => {
    cy.get('td')
      .first()
      .invoke('text')
      .then(text => {
        productTitle = text;
      });
    cy.log(productTitle);
  });

  it('Should contain another text for the first item (which means it was deleted)', () => {
    cy.get('[data-cy=delete_button]').first().click();
    cy.get('td').first().should('not.have.value', productTitle);
  });
});
