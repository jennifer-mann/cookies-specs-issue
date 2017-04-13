describe('Cookie 3', function(){
  beforeEach(function(){
    cy.clearCookies();
    cy.setCookie(
      'token',
      'token-3',
      {
        path: '/',
        domain: 'example.cypress.io'
      }
    )

    cy.setCookie(
      'user-data',
      'user-3',
      {
        path: '/',
        domain: 'example.cypress.io'
      }
    );

    cy.visit('https://example.cypress.io/commands/traversal')
  });

  it('cy.getCookie3() - get a browser cookie', function(){
    cy.getCookie('token').should('have.property', 'name', 'token')
    cy.getCookie('token').should('have.property', 'value', 'token-3')
    cy.getCookie('user-data').should('have.property', 'name', 'user-data')
    cy.getCookie('user-data').should('have.property', 'value', 'user-3')
  })
});
