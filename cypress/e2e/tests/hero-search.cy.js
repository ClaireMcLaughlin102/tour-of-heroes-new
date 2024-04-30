/// <reference types="cypress" />

describe('Hero Search Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/dashboard'); 
  });

  it('should display hero search input', () => {
    cy.get('#search-component').should('be.visible');
  });

  it('should clear search results when the search input is cleared', () => {
    cy.get('#searchBox').type('Bombasto'); 
    cy.get('#mat-list-item').should('exist'); 
    cy.get('#searchBox').clear(); 
    cy.get('#mat-list-item').should('not.exist'); 
  });

  it('should display search results when a term is entered', () => {
    cy.get('#searchBox').type('Bombasto'); 
    cy.get('#mat-list-item').should('have.length.above', 0); 
  });

  it('should navigate to hero detail when a search result is clicked', () => {
    cy.get('#searchBox').type('Bombasto'); 
    cy.wait(2000);
    cy.get('#mat-list-item').contains('Bombasto').should('be.visible');
    cy.get('#mat-list-item').contains('Bombasto').click();
    cy.wait(2000);
    cy.url().should('include', '/detail/13'); 
  });
});

