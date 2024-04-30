/// <reference types="cypress" />

describe('Tour of Heroes Application', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    });

    it('should navigate to the dashboard page when the Dashboard link is clicked', () => {
        cy.get('.mat-toolbar-link').contains('Dashboard').click();
        cy.url().should('include', '/dashboard');
    });

    it('should navigate to the heroes page when the Heroes link is clicked', () => {
        cy.get('.mat-toolbar-link').contains('Heroes').click();
        cy.url().should('include', '/heroes');
    });

    it('should switch language when a language is selected from the language menu', () => {
        // Click on the language menu button
        cy.get('.mat-toolbar-row').contains('language').click();

        // Wait for the menu to be visible
        cy.get('button[mat-menu-item]').should('be.visible');

        // Select a language from the language menu (assuming English and Spanish options)
        cy.get('button[mat-menu-item]').contains('fr').click();

        // Verify that the language has switched (check for translated text)
        cy.contains('Tour des Héros');

        // Revert back to the original language for subsequent tests (assuming Spanish to English)
        cy.get('.mat-toolbar-row').contains('language').click();
        cy.get('button[mat-menu-item]').contains('en').click();
    });

    it('should toggle dark mode when the dark mode switch is toggled', () => {
        //wait for the dark mode switch to be visible   
        cy.get('.toggle-container mat-slide-toggle').should('be.visible');
        // Toggle the dark mode switch
        cy.get('.toggle-container mat-slide-toggle').click();
        // Verify that dark mode is applied (check for dark mode-specific styles or elements)
        cy.get('body').should('have.class', 'dark-theme');
        // Toggle the dark mode switch back to revert the changes for subsequent tests
        cy.get('.toggle-container mat-slide-toggle').click();
    });
});
