import homepage from '../page_object/home_page';
import loginpage from '../page_object/login_page';
import QueuePage from '../page_object/queue_page';

before(() => {
  loginpage.loadFixtures();
  QueuePage.loadFixtures();
})


describe('To validate the Application Queue', () => {
  
  it('login and open application', () => {
    loginpage.openApplication();
    loginpage.login(loginpage.loginjsondata.validemail, loginpage.loginjsondata.validpassword);
    cy.wait(7000);
    QueuePage.clickApplication();
    });
  
  });

