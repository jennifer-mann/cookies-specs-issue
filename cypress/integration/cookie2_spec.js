describe('Cookie 2', function(){
  beforeEach(function(){
    cy.clearCookies();
    cy.setCookie(
      'token',
      'token-2',
      {
        path: '/',
        domain: 'example.cypress.io'
      }
    )

    cy.setCookie(
      'user-data',
      'user-2',
      {
        path: '/',
        domain: 'example.cypress.io'
      }
    );

    cy.visit('https://example.cypress.io/commands/querying')
  });

  it('cy.getCookie2() - get a browser cookie', function(){
    cy.getCookie('token').should('have.property', 'name', 'token')
    cy.getCookie('token').should('have.property', 'value', 'token-2')
    cy.getCookie('user-data').should('have.property', 'name', 'user-data')
    cy.getCookie('user-data').should('have.property', 'value', 'user-2')
  })
});
