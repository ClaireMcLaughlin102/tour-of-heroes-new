/// <reference types="cypress" />

describe('Hero Detail Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/heroes');
  });
  it('should navigate to the hero detail page', () => {
    cy.get('.hero-item').first().click();
    cy.url().should('include', '/detail/');
  });
  it('should navigate back to the heroes list', () => {
    cy.get('.hero-item').first().click();
    cy.get('#back-button').click();
    cy.url().should('include', '/heroes');
  });
});
describe('Hero Detail Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/detail/12');
  });
  it('should display the hero details', () => {
    cy.get('#hero-name-input').should('be.visible');
    cy.get('#hero-id').should('be.visible');
  });
  it('should update the hero name', () => {
    const newHeroName = 'New Hero Name';
    cy.get('#hero-name-input').click().clear().type(newHeroName);
    cy.get('#save-button').click();
    cy.get('#hero-name-input').invoke('val').should('include', newHeroName);
  });
});
