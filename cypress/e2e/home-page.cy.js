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
    cy.get('.introduction-text')
      .should('contain', 'How well do you know Superheroes and Supervillains?')
      .get('.hero-button')
      .should('exist')
      .get('.villain-button')
      .should('exist');
    cy.get('.hero-heading').should('exist');
    cy.get('.villain-heading').should('exist');
  });

  it('should load detail page', () => {
    cy.get('.hero-image > img');
    cy.get('.hero-image > img').click();
    cy.wait('@getAllCharacters');
    cy.url('eq', 'http://localhost:3000/characterDetails/1');
    cy.get('.nav-bar')
      .should('exist')
      .get('.home-link')
      .should('contain', 'Choose Another Character')
      .get('.character-image > img')
      .should('exist')
      .get('.random-details-card')
      .contains('h2', 'A-Bomb')
      .get('.random-details-card > div > :nth-child(2)')
      .should(
        'contain',
        "A-Bomb, also known as Richard Milhouse Jones, is part of the Human race. This character is 6'8 tall and weighs 980 lbs."
      )
      .get('.power-stats')
      .should('contain', "A-Bomb's powerstats are:")
      .get('ul > :nth-child(1)')
      .should('contain', 'Intelligence = 38')
      .get('ul > :nth-child(2)')
      .should('contain', 'Strength = 100')
      .get('ul > :nth-child(3)')
      .should('contain', 'Speed = 17')
      .get('ul > :nth-child(4)')
      .should('contain', 'Durability = 80')
      .get('ul > :nth-child(5)').should('contain', 'Power = 24')
      .get('ul > :nth-child(6)').should('contain', 'Combat = 64').pause
      cy.get('.question-container > :nth-child(1)').should('contain', 'Is A-Bomb from the Marvel Universe or the DC Universe?')
      .get('.question-container > :nth-child(2)').should('contain', 'Choose a button below to reveal the answer.')
      .get('.button-container > :nth-child(1) > img').click();
      cy.get('.answer-container > :nth-child(1)').should('contain', 'Yes! A-Bomb is from the Marvel Comics Universe!')
      .get('.answer-container > :nth-child(2)').should('exist')
  });
});
