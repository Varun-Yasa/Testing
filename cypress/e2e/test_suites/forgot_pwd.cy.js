/// <reference types = "cypress"/>

import loginpage from '../page_object/login_page';
import forgotpwd from '../page_object/forgot_pwd_page';

before(() => {
  loginpage.loadFixtures();

})

describe('To validate that the user is redirected to the gatehouse Login page when accessing the provided URL.', () => {


   it('To verify the GateHouse Logo is displayed', () => {
      loginpage.openApplication();
      loginpage.clickforgotpwd();
      loginpage.validateLogoVisibility();
      cy.wait(2000);
  
    });

    it('verify that the Dynamatix logo is visible on the Forgot Password page', () => {
      loginpage.openApplication();
      cy.wait(1000);
      loginpage.clickforgotpwd();
      loginpage.validateDynamatixLogoVisibility();
      cy.wait(2000);

    });
  
    it('verify that the footer shows correct copyright text', () => {
      loginpage.openApplication();
      loginpage.clickforgotpwd();
      loginpage.validateFooterCopyright();
    });

    it('verify text before clicking on reset password botton', () => {
        loginpage.openApplication();
        loginpage.clickforgotpwd();
        forgotpwd.ValidateTextBeforeSubmit();
      });


    it('verify reset possword with valid email address', () => {
        loginpage.openApplication();
        loginpage.clickforgotpwd();
        forgotpwd.enterEmailAddress(loginpage.loginjsondata.validemail);
        cy.wait(2000);
        forgotpwd.clickresetpwd();
        cy.wait(2000);
        forgotpwd.ValidatetextAftersubmit();
      });

      it('verify reset possword with invalid email address', () => {
        loginpage.openApplication();
        loginpage.clickforgotpwd();
        forgotpwd.enterEmailAddress(loginpage.loginjsondata.invalidemail);
        forgotpwd.clickresetpwd();
        cy.wait(2000);
        forgotpwd.ValidateErrorMessageForInvalidEmail();
      });

      it('verify reset possword with invalid email formate', () => {
        loginpage.openApplication();
        loginpage.clickforgotpwd();
        forgotpwd.enterEmailAddress(loginpage.loginjsondata.invalidEmailFormate);
        forgotpwd.clickresetpwd();
        cy.wait(2000);
        forgotpwd.ValidateErrorMessageForInvalidEmailFormate();
      });

      it('verify functionality of Back to Login Link', () => {
        loginpage.openApplication();
        loginpage.clickforgotpwd();
        forgotpwd.clickBacktoLogin();
        cy.wait(2000);
        loginpage.VerifyVisibilityOfSingInText();
      });



  
})
