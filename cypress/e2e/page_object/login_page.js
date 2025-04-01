class LoginPage{

    elements = {
    
        userEmailField:()=> cy.get("input[placeholder='Email']"),
        passwordField:()=> cy.get("input[placeholder='Password']"),
        //forgotPasswordHyperLink:()=> cy.get(".login-forgot-password span"),
        //termsAndConditionsHyperLink:()=> cy.get(".login-termandcondition a"),
        loginButton:()=> cy.get("button[type='button']"),
        invalidErrorMessage:()=> cy.get("span.p-message-detail"),
        //poweredByApp:()=> cy.get("img.login-footer-appname"),
        //copyRight:()=> cy.get("div.login-footer span.mr-2"),
        //downloadtoExcelIcon:()=>cy.get('div.header-bar button.p-button-icon-only[icon="pi pi-file-export"]'),
        //downloadToExceloptions:()=>cy.get('.p-overlaypanel-content div button span:nth-child(2)'),
        
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
    
    
    /*forgotPasswordLinkVisibility(){
        this.elements.forgotPasswordHyperLink().should('be.visible').invoke('text').should('include','Forgot your password?');
    }

    forgotPasswordLinkIsClickable(){
        this.elements.forgotPasswordHyperLink().click();
        
    }

    checkForTermsAndConditionsLink(){
       return this.elements.termsAndConditionsHyperLink();
    }*/
    
    clickOnLoginButton(){
        this.elements.loginButton().click();        
    }
    
    validateTheInvalidErrorMessage() {
        this.elements.invalidErrorMessage().invoke('text')
        .should('includes', 
        'Error\: account not found');
    }

    /*validateTheAllFieldsMandatoryErrorMessage() {
        this.elements.invalidErrorMessage().invoke('text')
        .should('match', 
        /All fields are mandatory/);
    }
    
    validateTheMaximumFailedAttemptsErrorMessage() {
        this.elements.invalidErrorMessage().invoke('text')
        .should('match', 
        /Error: You have exceeded maximum failed login attempts, please try again after 5 minutes. If you still have trouble logging in contact your Administrator\./);
    }

    PoweredByRiskHawkVisibility(){
        this.elements.poweredByApp().invoke('attr','src').should('include','/riskhawk-logo.png')
    }     
    
    validateCopyRightIsVisible(){
               
        this.elements.copyRight().should('be.visible')
    }

    validateCopyRightYear(){
        let date = new Date();
        let copyrightYear = date.getFullYear();
        this.elements.copyRight().should('have.text','© Copyright '+' '+copyrightYear)
    }*/
    
    // downloadToExcel(){
    //     return this.elements.downloadtoExcelIcon();
    // }
    
    // verifyDownloadToExcelOptions(){
    //     return this.elements.downloadToExceloptions();
    // }
    
    } module.exports = new LoginPage();