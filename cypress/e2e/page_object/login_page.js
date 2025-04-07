class LoginPage{

    txtUserName = "input[placeholder='Email address']";
    txtPassword = "input[placeholder='Password']";
    btnSignIn = "button[type='button']";
    NotFoundErrorMessage = ".p-message-detail";
    InvalidPwdErrorMessage = ".p-message-detail";


    loadFixtures(){
        cy.fixture('login_data').then((LoginTestData) => {
        this.loginjsondata = LoginTestData;
        });    
    }

    openApplication() {
        cy.visit('https://gatehouse-qa.dynamatix.com/');
    };
    
    verifypageTitle(){
        cy.title().should('include','GB NG');
    };
   
    login(emailaddress, password){
        this.openApplication();
        this.enterLoginEmail(emailaddress);
        this.enterLoginPassword(password);
        this.clickOnSignInButton();
      }
    
    enterLoginEmail(useremail){
        cy.get(this.txtUserName).type(useremail);
    }
    
    enterLoginPassword(password){
        cy.get(this.txtPassword).type(password);
    }
    


    clickOnSignInButton(){
       cy.get(this.btnSignIn).click();    
    }
    
    validateNotFoundErrorMessage() {
        cy.get(this.NotFoundErrorMessage).should('contain','account not found')
        
    }

    validateInvalidPwdErrorMessage() {
        cy.get(this.InvalidPwdErrorMessage).should('contain','Password is invalid for account');
        
    }


    } module.exports = new LoginPage();