describe('Cookie 4', function(){
  beforeEach(function(){
    cy.clearCookies();
    cy.setCookie(
      'token',
      'token-4',
      {
        path: '/',
        domain: 'example.cypress.io'
      }
    )

    cy.setCookie(
      'user-data',
      'user-4',
      {
        path: '/',
        domain: 'example.cypress.io'
      }
    );

    cy.visit('https://example.cypress.io/commands/actions')
  });

  it('cy.getCookie4() - get a browser cookie', function(){
    cy.getCookie('token').should('have.property', 'name', 'token')
    cy.getCookie('token').should('have.property', 'value', 'token-4')
    cy.getCookie('user-data').should('have.property', 'name', 'user-data')
    cy.getCookie('user-data').should('have.property', 'value', 'user-4')
  })
});
