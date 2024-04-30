describe('Dark Mode Toggle Tests', () => {
    it('Toggles dark mode', () => {
      cy.visit('http://localhost:4200/dashboard');
      cy.get('mat-slide-toggle').click();
      cy.get('body').should('have.class', 'dark-theme');
    });
  });
  