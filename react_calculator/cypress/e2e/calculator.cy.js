describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '234')
  })

  it('the arithmetical operations should update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click()
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('should chain together multiple operations', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click()
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display positive numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click()
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('should display negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click()
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2')
  })

  it('should display decimal numbers', () => {
    
  })

})






// Is the output as expected for decimal numbers
// Is the output as expected for very large numbers
// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
