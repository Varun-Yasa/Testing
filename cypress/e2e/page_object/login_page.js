class LoginPage{

    txtUserName = "input[placeholder='Email address']";
    txtPassword = "input[placeholder='Password']";
    btnSignIn = "button[type='button']";
    NotFoundErrorMessage = ".p-message-detail";
    InvalidPwdErrorMessage = ".p-message-detail";
    Logo = "img[alt='gatehouse_bank_logo']";
    rememberMeCheckbox = '#remember';
    dynamatixLogo = "img[alt='Dynamatix']";
    footerCopyrightText = "div.footer span";


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

    validateLogoVisibility(){
        cy.get(this.Logo).should('be.visible');
    }
    checkRememberMe() {
        cy.get(this.rememberMeCheckbox).check().should('be.checked');
    }
    
    uncheckRememberMe() {
        cy.get(this.rememberMeCheckbox).uncheck().should('not.be.checked');
    }
    validateDynamatixLogoVisibility() {
        cy.get(this.dynamatixLogo).should('be.visible');
    }

    validateFooterCopyright() {
        cy.get(this.footerCopyrightText)
          .should('be.visible')
          .and('contain.text', 'Copyright 2025');
    }



    } module.exports = new LoginPage();