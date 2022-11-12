describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the title text', () => {
    cy.get('h2')
    .contains('AI-MOVIE The Social network that create movies with artificial intelligence');
  })
}) 
