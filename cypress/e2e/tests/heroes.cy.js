/// <reference types="cypress" />

describe('Heroes Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/heroes'); // Adjust the URL as needed
  });

  it('should display the list of heroes', () => {
    cy.get('.hero-card').should('have.length.above', 0);
  });

  it('should add a new hero', () => {
    const newHeroName = 'Test New Hero';
    cy.get('.add-hero-button').click();
    cy.get('.hero-input input').type(newHeroName);
    cy.get('.add-hero-button').click();
    cy.get('.hero-name').should('contain.text', newHeroName);
  });

  it('should delete a hero', () => {
    cy.get('.hero-card').first().as('firstHero');
    cy.get('@firstHero').invoke('text').then((firstHeroText) => {
      cy.get('.delete-icon').first().click();
      cy.get('.hero-name').first().should('not.contain', 'Dr. Nice');
    });
  });
});
