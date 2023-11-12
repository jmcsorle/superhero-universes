describe('errors', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://akabab.github.io/superhero-api/api/all.json', {
      statusCode: 404,
    });
    cy.visit('http://localhost:3000/ahhh');
  });
  it('should give a 404 error', () => {
    cy.get('h2').should(
      'contain',
      "404 Not Found: We're sorry. It looks like the server is down. Please try again later."
    );
    cy.get('.error-home-link').should('contain', 'Return to Home Page');
  });
});
