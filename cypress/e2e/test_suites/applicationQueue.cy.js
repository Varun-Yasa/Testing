import homepage from '../page_object/home_page';
import loginpage from '../page_object/login_page';
import applicationpage from '../page_object/application_page';

before(() => {
  loginpage.loadFixtures();

})


describe('To vidate the Application Queue', () => {
  
  it('verify login with valid username and password credentials', () => {
    loginpage.openApplication();
    loginpage.login(loginpage.loginjsondata.validemail, loginpage.loginjsondata.validpassword);

    cy.wait(7000);
    applicationpage.applicationidcheck();
    });
  
  });

