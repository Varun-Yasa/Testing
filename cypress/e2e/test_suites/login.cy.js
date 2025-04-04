/// <reference types = "cypress"/>

import homepage from '../page_object/home_page';
import loginpage from '../page_object/login_page';


before(() => {
  loginpage.loadFixtures();

})

describe('To validate that the user is redirected to the gatehouse Login page when accessing the provided URL.', () => {

  it('To verify that the user is directed to the Risk Hawk URL Login Page.', () => {
    loginpage.openApplication();
    loginpage.pageTitle();
  });

  
});

describe('To validate the login functionality', () => {

  it('To validate logging into the application with a valid username and password.', () => {
    loginpage.login(loginpage.loginjsondata.userEmails[0].validemail, loginpage.loginjsondata.passwords[0].validpassword);
    homepage.logOutButtonVisibility();
  });


  it('To validate error message when login to the application with Invalid Username and Valid password', () => {
    loginpage.login(loginpage.loginjsondata.userEmails[0].invalidemail, loginpage.loginjsondata.passwords[0].validpassword);
    loginpage.validateTheInvalidErrorMessage();
  });

  it('To validate error message when login to the application with valid Username and Invalid password', () => {
    loginpage.login(loginpage.loginjsondata.userEmails[0].validemail, loginpage.loginjsondata.passwords[0].invalidpassword);
    loginpage.validateTheInvalidErrorMessage();
  });

  it('To validate error message when login to the application with Invalid Username and Invalid password', () => {
    loginpage.login(loginpage.loginjsondata.userEmails[0].invalidemail, loginpage.loginjsondata.passwords[0].invalidpassword);
    loginpage.validateTheInvalidErrorMessage();
  });

  
});
