class LoginPage{

    elements = {
    
        userEmailField:()=> cy.get("input[placeholder='Email address']"),
        passwordField:()=> cy.get("input[placeholder='Password']"),
        loginButton:()=> cy.get(".p-button-label"),
        invalidErrorMessage:()=> cy.get("[data-pc-name='message']"),
        
    }
    
    loadFixtures(){
        cy.fixture('login_data').then((LoginTestData) => {
        this.loginjsondata = LoginTestData;
        });    
    }
    
    openApplication() {
        cy.visit('https://gatehouse-qa.dynamatix.com/');
    };
    
    pageTitle(){
        cy.title().should('include','GB NG').then((title)=>{
        cy.log("Page title : "+ title);        
        });
    };
   
    login(emailaddress, password){
        this.openApplication();
        this.enterLoginEmail(emailaddress);
        this.enterLoginPassword(password);
        this.clickOnLoginButton();
      }
    
    enterLoginEmail(useremail){
        this.elements.userEmailField().type(useremail);
    }
    
    enterLoginPassword(password){
        this.elements.passwordField().type(password);
    }
    

    
    clickOnLoginButton(){
        this.elements.loginButton().click();        
    }
    
    validateTheInvalidErrorMessage() {
        this.elements.invalidErrorMessage().invoke('text')
        .should('contain', 'account not found');
    }


    } module.exports = new LoginPage();