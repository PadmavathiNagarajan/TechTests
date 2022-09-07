//This code is to compare the title of an element in two different pages and to confirm if download for free button is visible
//To run: use npx cypress open

describe('teach starter tech test', () => {

  it('Comparing the Title', () => {

    const titleText = "";
    //const idText = "";
    cy.visit('https://www.teachstarter.com/')
    cy.contains('Resources').click();
    cy.contains('Teaching Resources').click();
   
    //element is hidden so had to use force
    cy.get('a[href*="/resource-availability/free/"]').click({force: true});
    cy.wait(3000);

     cy.get(".card-content").find('h4').eq(1).then(($h4) => {
     const titleText = $h4.text();
     cy.log("Title Text :   " + titleText)});
     cy.get(".card-content").find('h4').eq(1).click();
     cy.wait(3000);
    
     //Unable to identify element in the free resources page
     cy.get(".header").find('h1').should(($identifier) => {
     const idText = $identifier.text();
     expect(idText, 'ID').to.equal(titleText)});
     
     //To check if download for free button is visible
     cy.get(".button-single").should('be.visible');

  })
})
