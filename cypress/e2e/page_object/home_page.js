class HomePage {

  btnLogOut = "li[class='cursor-pointer mr-5 flex align-items-center hover:text-primary-500 pr-3 transition-duration-200'] span"
   
   logOutButtonVisibility() {
      cy.get(this.btnLogOut).should('be.visible');
      
   }


   logOut() {
      cy.get(this.btnLogOut).click();
   }

   


} module.exports = new HomePage();