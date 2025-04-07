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