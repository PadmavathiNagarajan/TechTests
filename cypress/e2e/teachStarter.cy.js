
describe('teach starter tech test', () => {

  it('Comparing the Title', () => {

    const titleText = "";
    const idText = "";s
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
    
     cy.get(".header").find('h1').should(($identifier) => {
     const idText = $identifier.text();
     expect(idText, 'ID').to.equal(titleText)});
     
     cy.get(".button-single").should('be.visible');

  })
})