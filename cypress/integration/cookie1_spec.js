describe('Cookie 1', function(){
  beforeEach(function(){
    cy.clearCookies();
    cy.setCookie(
      'token',
      'token-1',
      {
        path: '/',
        domain: 'example.cypress.io'
      }
    )

    cy.setCookie(
      'user-data',
      'user-1',
      {
        path: '/',
        domain: 'example.cypress.io'
      }
    );

    cy.visit('https://example.cypress.io/')
  });

  it('cy.getCookie1() - get a browser cookie', function(){
    cy.getCookie('token').should('have.property', 'name', 'token')
    cy.getCookie('token').should('have.property', 'value', 'token-1')
    cy.getCookie('user-data').should('have.property', 'name', 'user-data')
    cy.getCookie('user-data').should('have.property', 'value', 'user-1')
  })
});
