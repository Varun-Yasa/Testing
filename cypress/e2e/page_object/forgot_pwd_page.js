class forgotpwd {

    txtEmailAddress = "input[placeholder='Email address']";
    btnresetPwd = "button[type='submit']";
    lnkBacktoLogin = "a[href='#']";
    displaytext = "p[class='ng-star-inserted']";
    errormessage= ".p-message-detail";
    diplaytextAftersubmit= ".success-message.ng-star-inserted";
     



   enterEmailAddress(emailaddress){
    
    cy.get(this.txtEmailAddress).type(emailaddress);
   }

   clickresetpwd(){
    cy.get(this.btnresetPwd).click();
   }

   validateresetpwd(){
    cy.get(this.btnresetPwd).should('be.visible');
   }

   clickBacktoLogin(){
    cy.get(this.lnkBacktoLogin).click();
   }

   ValidateTextBeforeSubmit(){
    cy.get(this.displaytext).should('contain',' Enter your email address and')
   }
   
   ValidateErrorMessageForInvalidEmailFormate(){
    cy.get(this.errormessage).should('contain','email parameter is invalid')
   }

   ValidateErrorMessageForInvalidEmail(){
    cy.get(this.errormessage).should('contain','account not found')
   }

   ValidatetextAftersubmit(){
    cy.get(this.diplaytextAftersubmit).should('contain','Please check your email as')
   }

  
  } module.exports = new forgotpwd();