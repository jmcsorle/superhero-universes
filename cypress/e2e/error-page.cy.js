describe('should load error page that contains response status', () => {

    it('should give a user an error for a 404 response', () => {
        cy.intercept('GET', 'https://akabab.github.io/superhero-api/api/all.json', {
            statusCode: 404,
            body: '',
        })
        .as('getAllCharacters')
        .visit('http://localhost:3000/')
        cy.wait('@getAllCharacters')

        cy.get()

    })
        


})



it('should display a 404 error message when the page is not found', () => {
    cy.visit('http://localhost:3000/nonexistentpage');

    cy.contains('404 - Page Not Found').should('be.visible');
    cy.contains("Sorry! That page doesn't seem to exist. Try going back to the Home page.").should('be.visible');
    cy.get('.error404-go-home-button').should('be.visible');
    cy.get('.ref-fact').should('be.visible');
    cy.get('.old-news-paper').should('be.visible');
  });


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