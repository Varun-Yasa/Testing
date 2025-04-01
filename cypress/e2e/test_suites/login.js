/// <reference types = "cypress"/>

import homepage from '../page_objects/home_page';
import loginpage from '../page_objects/login_page';


before(() => {
  loginpage.loadFixtures();

})

/*describe('To validate that the user is redirected to the Risk Hawk Login page when accessing the provided URL.', () => {

  it('To verify that the user is directed to the Risk Hawk URL Login Page.', () => {
    loginpage.openApplication();
    loginpage.pageTitle();
  });

  //   it('Verify whether the user is logged back into the application when the back arrow in the tab is clicked after logging out of Application',()=>{
  //     loginpage.openApplication();
  //     loginpage.enterLoginEmail(loginpage.loginjsondata.userEmails[0].validemail);
  //     loginpage.enterLoginPassword(loginpage.loginjsondata.passwords[0].validpassword);
  //     loginpage.clickOnLoginButton();
  //     //loginpage.clickOnLogoutButton().click();
  //     loginpage.goBackToPreviousPage();
  //     loginpage.pageTitle();
  // });
});*/

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

  /*it('To validate error message when login to the application with Blank Username and Blank password', () => {
    loginpage.openApplication();
    loginpage.clickOnLoginButton();
    loginpage.validateTheAllFieldsMandatoryErrorMessage();
  });*/

  // it('To test user is able to login to the application with single character Username and password', () => {
  //   loginpage.openApplication();
  //   loginpage.enterLoginEmail(loginpage.loginjsondata.userEmails[0].singlecharacteremail);
  //   loginpage.enterLoginPassword(loginpage.loginjsondata.passwords[0].singlecharacterpassword);
  //   loginpage.clickOnLoginButton();
  //   loginpage.validateTheInvalidErrorMessage();
  // });


  /*it('To validate error message when login to the application with Blank Username and Valid password', () => {
    loginpage.openApplication();
    loginpage.enterLoginPassword(loginpage.loginjsondata.passwords[0].validpassword);
    loginpage.clickOnLoginButton();
    loginpage.validateTheAllFieldsMandatoryErrorMessage();
  });

  it('To validate error message when login to the application with Valid Username and blank password', () => {
    loginpage.openApplication();
    loginpage.enterLoginEmail(loginpage.loginjsondata.userEmails[0].validemail);
    loginpage.clickOnLoginButton();
    loginpage.validateTheAllFieldsMandatoryErrorMessage();
  });

  it('To validate user\'s account gets locked after 5 failed login attempts', () => {
    loginpage.login(loginpage.loginjsondata.userEmails[0].emailfor5Attempts, loginpage.loginjsondata.passwords[0].invalidpassword);
    for (let i = 0; i < 5; i++) {
      loginpage.clickOnLoginButton();
      loginpage.validateTheInvalidErrorMessage();

    }
    loginpage.clickOnLoginButton();
    loginpage.validateTheMaximumFailedAttemptsErrorMessage();
  });

  it('To validate the error message when user tries to log in with correct credentials while the account is locked', () => {
    loginpage.login(loginpage.loginjsondata.userEmails[0].emailfor5Attempts, loginpage.loginjsondata.passwords[0].passwordfor5Attempts);
    loginpage.validateTheMaximumFailedAttemptsErrorMessage();
  });

});

describe(`Copyright functionality`, () => {

  it('To validate the visibility of copyright on the login page', () => {
    loginpage.openApplication();
    loginpage.validateCopyRightIsVisible();

  });

  it('To validate Copyright On Login page should show the current year', () => {
    loginpage.openApplication();
    loginpage.validateCopyRightYear();

  });

});

describe('To validate the functionality of the Terms & Conditions link.', () => {

  it('Verify visibility of Terms & Conditions link on login page', () => {
    loginpage.openApplication();
    loginpage.checkForTermsAndConditionsLink().invoke('text').should('include', 'Terms And Conditions');
  });

  it('Verify if Terms & Conditions link is clickable or not', () => {
    loginpage.openApplication();
    loginpage.checkForTermsAndConditionsLink().should('have.attr', 'href').and('include', 'https://www.riskhawk.net/terms');

  });

  it('Verify landing on terms andd condition page on clicking TermsAndConditionLink', () => {
    loginpage.openApplication();
    cy.origin('https://www.riskhawk.net', () => {
      cy.on('uncaught:exception', (err) => {
        // Suppress errors related to "Cannot redefine property: cookie"
        if (err.message.includes('Cannot redefine property: cookie')) {
          return false; // Prevent test failure
        }
      });
    });
    loginpage.checkForTermsAndConditionsLink().invoke('removeAttr', 'target').click();
    cy.origin('https://www.riskhawk.net', () => {
      cy.url().should('include', '/terms');
    });
  })
});

describe('To validate the functionality of the Powered By Risk Hawk logo.', () => {

  it('Verify the visibility of the Powered By Risk Hawk logo on the login page.', () => {
    loginpage.openApplication();
    loginpage.PoweredByRiskHawkVisibility();
  });

})


describe('verify Forgot Password functionality', () => {

  it('Verify the visibility of the forgot password link', () => {

    loginpage.openApplication();
    loginpage.forgotPasswordLinkVisibility();

  })

  it('Verify that ForgotPasswordLink is clickable', () => {

    loginpage.openApplication();
    loginpage.forgotPasswordLinkIsClickable();

  })*/

});
