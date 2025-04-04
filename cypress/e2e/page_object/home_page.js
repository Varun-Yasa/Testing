class HomePage {

   elements = {


      logOutButton: () => cy.get("li[class='cursor-pointer mr-5 flex align-items-center hover:text-primary-500 pr-3 transition-duration-200'] span"),
      

   }

   

   logOutButtonVisibility() {
      this.postSignIn();
      this.elements.logOutButton().should('be.visible');
   }


   logOut() {
      this.postSignIn();
      this.elements.logOutButton().click();
   }

   


} module.exports = new HomePage();