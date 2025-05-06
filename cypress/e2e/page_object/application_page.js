class ApplicationPage {
    applicationBlock = "div.scrollable";
    applicationID = "span.font-bold";
    financeAmount = "span.text-primary";
    

    loadFixtures(){
        cy.fixture('application_data').then((applicationTestData) => {
        this.applicationjsondata = applicationTestData;
        });    
    }

    applicationidcheck () {
        cy.get(this.applicationBlock).each(($block) => {
            const idText = $block.find(this.applicationID).text().trim();
            
            if (idText.includes('00162230')) {


                cy.wrap($block).within(() => {
                    cy.get(this.financeAmount).should('have.text', '$ 100');
                });
            }
        });
    }
}

module.exports = new ApplicationPage();
