class HomePage {

   elements = {

      profileIcon: () => cy.get(".profile-item img"),
      FAQlink: () => cy.get('li[role="menuitem"] a[href*="/faqs"]'),
      companName: () => cy.get('li.m-0.mb-3:nth-of-type(1) span'),
      visibleUserName: () => cy.get('.topbar-menu span.p-element :nth-child(2)'),
      logOutButton: () => cy.get("li[class='cursor-pointer mr-5 flex align-items-center hover:text-primary-500 pr-3 transition-duration-200'] span"),
      createButton: () => cy.get("button.master-create-button"),
      createSearchBox: () => cy.get("p-tree[filterplaceholder='Search...'] input"),
      profileItems: () => cy.get(".profile-item li span"),
      flexyLabel: () => cy.get("p-treenode.p-element li[aria-label]"),
      createListMenus: () => cy.get("span.create-menu-list-label"),
      sidemenus: () => cy.get('master-menu ul li a'),
      freezeColumnIcon: () => cy.get('div.header-bar button.p-button-icon-only[icon="pi pi-lock"]'),
      freezeIconCheckBox: () => cy.get('ul.p-listbox-list.p-scroller-content.ng-star-inserted div.p-checkbox-box'),
      tableHeader: () => cy.get('thead.p-datatable-thead > tr th.p-sortable-column.ng-star-inserted'),
      tableRowsCount: () => cy.get('tbody.p-element.p-datatable-tbody tr'),
      showingEntries: () => cy.get('span.p-paginator-current'),
      downloadtoExcelIcon: () => cy.get('div.header-bar button.p-button-icon-only[icon="pi pi-file-export"]'),
      downloadToExceloptions: () => cy.get('.p-overlaypanel-content div button span:nth-child(2)'),
      exceldownloadsuccessmessage: () => cy.get('div.p-toast.p-component.ng-tns-c3409120995-0.p-toast-top-right div[data-pc-section="text"]'),
      changeCompany: () => cy.get('li.m-0.mb-3:nth-of-type(4) span'),
      changeCompanyDropdown: () => cy.get('p-dialog p-dropdown'),
      changeCompanyDropdownItems: () => cy.get('li.p-dropdown-item span')

   }

   postSignIn() {
      cy.intercept('POST', '/api/Auth/login').as('signIn');
      cy.wait('@signIn');
   }

   logOutButtonVisibility() {
      this.postSignIn();
      this.elements.logOutButton().should('be.visible');
   }


   logOut() {
      this.postSignIn();
      this.elements.logOutButton().click();
   }

   // openCreateModel(){
   //    this.elements.createButton().click();
   // }

   hoverOnProfileIcon() {
      this.elements.profileIcon().trigger('mouseenter');
   }

   presenceOfFAQLink() {
      this.elements.FAQlink().should('be.visible');
   }

   clickOnFAQlink() {
      cy.origin('https://www.riskhawk.net', () => {
         cy.on('uncaught:exception', (err) => {
            // Suppress errors related to "Cannot redefine property: cookie"
            if (err.message.includes('Cannot redefine property: cookie')) {
               return false; // Prevent test failure
            }
         });
      });
      this.elements.FAQlink().invoke('removeAttr', 'target').click();
      cy.origin('https://www.riskhawk.net', () => {
         cy.url().should('include', '/faqs');
      });

   }

   presenceOfCompanyName() {
      this.elements.companyname().invoke('text').then((visiblecompanyName) => {
         cy.log('User Logged in company is :\"' + visiblecompanyName + '\"');
      })
   }

   verifyTheVisibleUserName() {
      this.elements.visibleUserName().invoke('text').then((loggedusername) => {
         cy.log('Logged user is: ' + loggedusername);
      });
   }

   verifyCompanyChangeLinkisVisible() {
      //return this.elements.changeCompany();
      return this.elements.profileItems().contains('Change Company');

   }

   changeCompany(companyname) {
      this.elements.profileItems().contains('Change Company').click();
      this.elements.changeCompanyDropdown().click();
      this.elements.changeCompanyDropdownItems().contains(companyname).click();

   }

   getCoreMenus() {
      cy.intercept('POST', '/api/CoreModuleSideMenu').as('getCoreMenus');
      cy.wait('@getCoreMenus');
   }


   openFormViaCreateButton(formname) {
      this.getCoreMenus();
      this.elements.createButton().click();
      this.elements.createSearchBox().click().type(formname);
      this.elements.flexyLabel().contains(formname).click();
      // cy.wait(2000);

   }

   // openMenuViaCreateButton(menuname) {
   //    this.elements.createButton().click();
   //    this.elements.createSearchBox().click().type(menuname);
   //    this.elements.flexyLabel().contains(menuname).click();

   // }


   verifytheTableRowsCount() {
      return this.elements.tableRowsCount();
   }

   recordsCountInFooter() {
      return this.elements.showingEntries();
   }


   selectTheFlexy(flexyname) {

      var flexyFound = false;
      this.elements.sidemenus().each(($e1) => {

         if (!flexyFound) {

            cy.wrap($e1).find('span').invoke('text').then((menuname) => {

               if (menuname.trim() == flexyname.trim()) {

                  cy.wrap($e1).contains(flexyname).click({ force: true });
                  cy.log(`Flexy "${flexyname}" clicked`);
                  flexyFound = true;


               }
               cy.log('Flexyfound flag = ' + flexyFound);

            })

            cy.log('Flexyfound flag = ' + flexyFound);
         }

      })

   }

   selectTheFlexy2(flexyname) {

      var flexyFound = false;
      this.elements.sidemenus().each(($e1) => {
         var menuname = $e1.text();

         if (menuname.trim() == flexyname.trim()) {

            cy.wrap($e1).contains(flexyname).click({ force: true });
            cy.log(`Flexy "${flexyname}" clicked`);
            flexyFound = true;
            return false;

         }

      })


   }


   selectTheMenu2(menuname) {

      var menuFound = false;
      this.elements.sidemenus().each(($e1) => {

         if (!menuFound) {

            cy.wrap($e1).find('span').invoke('text').then((menu) => {

               if (menu.trim() == menuname.trim()) {

                  cy.wrap($e1).contains(menuname).click({ force: true });
                  cy.log(`Menu "${menuname}" clicked`);
                  menuFound = true;

               }
               cy.log('menufound flag = ' + menuFound);

            })

            cy.log('menufound flag = ' + menuFound);
         }

      })

   }

   selectTheMenu(menuname) {

      this.elements.sidemenus().each(($el) => {

         if ($el.text().includes(menuname)) {
            // Click the item
            cy.wrap($el).click();

            // Return false to break out of the .each() loop
            return false;  // This stops further iterations

         }

      })

   }

   columnFreeze() {
      return this.elements.freezeColumnIcon();
   }

   clickOnFreezeIconCheckbox() {
      return this.elements.freezeIconCheckBox();
   }

   verifyTableHeaderFields() {
      return this.elements.tableHeader();
   }

   downloadToExcel() {
      return this.elements.downloadtoExcelIcon();
   }

   verifyDownloadToExcelOptions() {
      return this.elements.downloadToExceloptions();
   }
   verifyExcelDownloadSusscessMessage() {
      return this.elements.exceldownloadsuccessmessage();
   }

   //    selectTheFlexy2(flexyname) {

   //          let flexyFound = false;

   //          // Define a recursive function to search for the flexy name
   //          const searchFlexyRecursively = ($elements, index) => {
   //              if (index >= $elements.length || flexyFound) {
   //                  // Base case: Stop recursion if all elements are checked or flexy is found
   //                  return;
   //              }

   //              let $e1 = $elements;
   //              $e1.eq(index).find('span').invoke('text').then((menuname) => {
   //                if (menuname.trim() === flexyname.trim()) {
   //                    cy.wrap($e1).contains(flexyname).click({ force: true });
   //                    cy.log(`Flexy "${flexyname}" clicked`);
   //                    flexyFound = true;
   //                }
   //                  cy.log('Flexyfound flag = ' + flexyFound);

   //                  // Continue recursion with the next element
   //                  searchFlexyRecursively($elements, index + 1);
   //              });
   //          };

   //          // Start the recursive search from the sidemenus elements
   //          const $sidemenus = this.elements.sidemenus();
   //          searchFlexyRecursively($sidemenus, 0);


   //   }


} module.exports = new HomePage();