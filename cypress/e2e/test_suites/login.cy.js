/// <reference types = "cypress"/>

import homepage from '../page_object/home_page';
import loginpage from '../page_object/login_page';


before(() => {
  loginpage.loadFixtures();

})

describe('To validate that the user is redirected to the gatehouse Login page when accessing the provided URL.', () => {

  it('To verify that the user is directed to the GB NG URL Login Page.', () => {
    loginpage.openApplication();
    loginpage.verifypageTitle();
    
  });
  it('To verify the GateHouse Logo is displayed', () => {
    loginpage.openApplication();
    loginpage.validateLogoVisibility();
    cy.wait(2000);
    
  });
  it('verify that Remember Me checkbox can be checked', () => {
    loginpage.openApplication();
    loginpage.checkRememberMe();
    cy.wait(2000);

  });
  
  it('verify that Remember Me checkbox can be unchecked', () => {
    loginpage.openApplication();
    loginpage.uncheckRememberMe();
  });

  it('verify that the Dynamatix logo is visible on the login page', () => {
    loginpage.openApplication();
    loginpage.validateDynamatixLogoVisibility();
  });

  it('verify that the footer shows correct copyright text', () => {
    loginpage.openApplication();
    loginpage.validateFooterCopyright();
  });

  it('verify login with valid username and password credentials', () => {
    loginpage.openApplication();
    loginpage.login(loginpage.loginjsondata.validemail, loginpage.loginjsondata.validpassword);
    homepage.logOutButtonVisibility();
    
  });

  it('verify login with valid username and invalid password credentials', () => {
    loginpage.openApplication();
    loginpage.login(loginpage.loginjsondata.validemail, loginpage.loginjsondata.invalidpassword);
    loginpage.validateInvalidPwdErrorMessage();
    
  });

  it('verify login with invalid username and valid password credentials', () => {
    loginpage.openApplication();
    loginpage.login(loginpage.loginjsondata.invalidemail, loginpage.loginjsondata.validpassword);
    loginpage.validateNotFoundErrorMessage();
    
  });
  
  it('verify login with invalid username and invalid password credentials', () => {
    loginpage.openApplication();
    loginpage.login(loginpage.loginjsondata.invalidemail, loginpage.loginjsondata.invalidpassword);
    loginpage.validateNotFoundErrorMessage();
    
  });
  

  
})