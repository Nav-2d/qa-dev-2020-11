const todoTitles = [
  'Wac, ft. Valeria - “Tortoise”',
  'Kishi Bashi - “The Ballad of Mr Steak”',
  'Lucy Dacus - “Night Shift”',
  'Shamir - “Larry Clark”',
  'Moloko - “Over & Over”',
  'Shugo Tokumaru - “Lita-Ruta”',
];

const validText = 'Test - "Valid Data"';
const shortText = 'Wrong - !';
const longText = 'Prince Edward Island - "Love"';

describe('List Item Application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('Default elements', () => {
    it('Verify length of existing todos', () => {
      cy.get('.Item').should('have.length', 6);
    });

    it('Verify title of existing todos', () => {
      cy.get('.Item').each((item, index) => {
        cy.wrap(item).should('contain.text', todoTitles[index]);
      });
    });

    it('contains expected default elements', () => {
      cy.findByText('Items').should('exist');

      cy.findByText('Title:').should('exist');

      cy.findByText('(between 10 and 20 characters)').should('exist');

      cy.get('input#title').should('exist').should('have.value', '');

      cy.findByText('Add Item').should('exist');
    });
  });

  context('Add Item', () => {
    it('allow user to add an item on button click', () => {
      cy.get('input#title').clear().type(validText);

      cy.findByText('Add Item').click();

      cy.findByText(validText).should('exist');
    });

    it('allow user to add an item on pressing enter', () => {
      cy.get('input#title').clear().type(validText).type('{enter}');

      cy.findByText(validText).should('exist');
    });

    it('sets text field to blank after adding an item', () => {
      cy.get('input#title').clear().type(validText).type('{enter}');

      cy.get('input#title').should('have.value', '');
    });
  });

  context('Remove Item', () => {
    it('allows user to remove an item from the list', () => {
      cy.get('.Item').as('list');

      cy.get('@list').first().find('button').click();

      cy.get('@list').should('not.contain', 'Wac, ft. Valeria - “Tortoise”');
    });
  });

  context('Validation', () => {
    it('validates for text item title less than 10 characters', function () {
      cy.get('input#title').clear().type(shortText);

      cy.findByText('Add Item').click();

      cy.get('.Form__error').should('be.visible');

      cy.findByText('Title must be at least 10 characters.').should('exist');
    });

    it('validates for text item title more than 20 characters', function () {
      cy.get('input#title').clear().type(longText);

      cy.findByText('Add Item').click();

      cy.get('.Form__error').should('be.visible');

      cy.findByText('Title can be at most 20 characters.').should('exist');
    });

    it('validates for empty text item title', function () {
      cy.get('input#title').clear();

      cy.findByText('Add Item').click();

      cy.get('.Form__error').should('be.visible');

      cy.findByText('Title must be at least 10 characters.').should('exist');
    });
  });
});
