describe('should load the home page from the RandomCharacterSelection component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://akabab.github.io/superhero-api/api/all.json', {
      statusCode: 200,
      fixture: 'singleCharacter',
    })
      .as('getAllCharacters')
      .visit('http://localhost:3000/');
    cy.wait('@getAllCharacters');
  });

  it('should load heading, introduction text, and two buttons', () => {
    cy.get('.banner').should('exist');
    cy.get('h1').contains('Marvel versus DC');
    cy.get('.introduction-text').should('contain', "How well do you know Superheroes and Supervillains?")
      .get('.hero-button').should('exist')
      .get('.villain-button').should('exist');
      cy.get('.hero-heading').should('exist');
      cy.get('.villain-heading').should('exist');
  });
});
