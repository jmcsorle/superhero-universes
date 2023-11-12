describe('404 error', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://akabab.github.io/superhero-api/api/all.json', {
      statusCode: 200,
    })
    .as('getAllCharacters');
    cy.visit('http://localhost:3000/');
    cy.wait(`@getAllCharacters`);
  })
  it('should give a 404 error', () => {
    cy.intercept('GET', 'https://akabab.github.io/superhero-api/api/all.json', {
      statusCode: 404
    })
    .as('404-error')
    cy.visit('http://localhost:3000/lkjlkj')
    cy.wait('@404-error')
    cy.get('h2').should(
      'contain',
      "404 Not Found: Oops! Something went wrong. Please try again."
    );
    cy.get('.error-home-link').should('contain', 'Return to Home Page');
  });
  it('should return an error for a 500 response status, aka, the API call fails', () => {
    cy.intercept('GET', 'https://akabab.github.io/superhero-api/api/all.json', {
      statusCode: 500,
    });
    cy.visit('http://localhost:3000/')
  })
});

