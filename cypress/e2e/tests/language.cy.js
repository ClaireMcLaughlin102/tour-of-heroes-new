describe('Language Switching Tests', () => {
    it('Switches to French language', () => {
      cy.visit('http://localhost:4200/dashboard');
      cy.contains('language').click();
      cy.contains('fr').click(); 
      cy.contains('Tour des Héros').should('be.visible'); 
    });
    it('Switches to Irish language', () => {
      cy.visit('http://localhost:4200/dashboard');
      cy.contains('language').click();
      cy.contains('ie').click(); 
      cy.contains('Turas na nHeroí').should('be.visible'); 
    });
    it('Switches to English language', () => {
      cy.visit('http://localhost:4200/dashboard');
      cy.contains('language').click();
      cy.contains('en').click(); 
      cy.contains('Tour of Heroes').should('be.visible');
    });
  });
  