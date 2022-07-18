// beforeEach(() => {
//   cy.visit('https://ahdevelop.herokuapp.com')
// })

describe('Open google', () => {
  it('should load home page', () => {
    // cy.visit('https://ahdevelop-pr-41312.herokuapp.com/')
    

    // using demo site
    cy.visit('https://demo.applitools.com/')
    cy.log('visited google')
  })

  it('should confirm page is completely loaded', () => {
    // cy.contains('Find the Best Classes and Camps')
    // cy.get('.page-description-section > .heading').invoke('text').should('have.html', '<h1 class="heading">Find the Best Classes and Camps</h1>')

    cy.get('.auth-header').contains('Login Form')
  })

  // it('should open login modal', () => {
  //   // cy.get('.dropdown.hidden-xs').click()
  //   cy.get(':nth-child(3) > .Hide__StyledDiv-sc-10ju3q5-0 > .Link-sc-1wne7g-2 > .Box-sc-g760pt-0')
  // })

  // it('should confirm login modal', () => {
  //   // cy.get('.title').invoke('text').should('eq', 'Sign In to ActivityHero')
  // })

  it('should fill the login form', () => {
    // cy.get('form > :nth-child(2) > #user-email').type('siya35@gmail.com')
    // cy.get('#user-password').type('blessing')

    // for demo
    cy.get('#username').type('abc@gmail.com')
    cy.get('#password').type('12345')
  })

  it('should submit the login form', () => {
    // cy.get('form > :nth-child(4) > .btn').click()
    cy.get('#log-in').click()
  })

  it('should confirm login', () => {
    cy.get('.hidden-mobile > .balance-title').contains('Total Balance')
  })
})