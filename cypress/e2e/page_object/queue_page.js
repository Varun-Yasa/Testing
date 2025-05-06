class QueuePage {
    applicationBlock = "div.scrollable";
    applicationID = "span.font-bold";
    financeAmount = "span.text-primary";
    

    loadFixtures(){
        cy.fixture('application_data').then((applicationTestData) => {
        this.applicationjsondata = applicationTestData;
        });    
    }

    clickApplication () {
        cy.get(this.applicationBlock).each(($block) => {
            const idText = $block.find(this.applicationID).text().trim();
            
            if (idText.includes(this.applicationjsondata.appID)) {


                cy.wrap($block).within(() => {

                    cy.get($block).click();
                    //cy.get(this.financeAmount).should('have.text', '$ 100');
                });
            }
        });
    }
}

module.exports = new QueuePage();
