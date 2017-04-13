describe('Cookie 5', function(){
  beforeEach(function(){
    cy.clearCookies();
    cy.setCookie(
      'token',
      'token-5',
      {
        path: '/',
        domain: 'example.cypress.io'
      }
    )

    cy.setCookie(
      'user-data',
      'user-5',
      {
        path: '/',
        domain: 'example.cypress.io'
      }
    );

    cy.visit('https://example.cypress.io/commands/window')
  });

  it('cy.getCookie5() - get a browser cookie', function(){
    cy.getCookie('token').should('have.property', 'name', 'token')
    cy.getCookie('token').should('have.property', 'value', 'token-5')
    cy.getCookie('user-data').should('have.property', 'name', 'user-data')
    cy.getCookie('user-data').should('have.property', 'value', 'user-5')
  })
});
