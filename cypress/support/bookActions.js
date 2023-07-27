export const clickOnSignInButton = () => {
  cy.get('[id="signIn"] [class="gr-hyperlink"]').click();
  cy.get('[class*="authPortalSignInButton"]').click();
};

export const loginWithCredentials = () => {
  const email = "wafarav189@mliok.com";
  const password = "test12#";

  cy.get('[id="ap_email"]').type(email);
  cy.get('[id="ap_password"]').type(password);
  cy.get('[id="signInSubmit"]').click();
  Cypress.on("uncaught:exception", (err, runnable) => false);
};

export const searchForBookByName = (bookName) => {
  cy.get('[class*="searchBox__input"]').first().type(`{selectAll}${bookName}`);
  cy.get('[id*="bookSearchResults"] [class*="bookSearchResults__item"]')
    .first()
    .click();
};

export const clickOnWantToReadButton = () => {
  cy.get(`button[aria-label="Tap to shelve book as want to read"]`)
    .first()
    .click();
};

export const clickOnMyBooksFromHeader = () => {
  cy.get('a[href="/review/list?ref=nav_mybooks"]').click({ force: true });
};

export const clickOnDeleteIconInMyBooks = () => {
  cy.reload();
  cy.get(".deleteLink").find('[alt="Remove from my books"]').click();
};

export const logoutFromAccount = () => {
  cy.get(`div[class="dropdown dropdown--profileMenu"]`).click();
  cy.wait(500);
  cy.get('.siteHeader__subNav [role="menuitem Sign out"]').click();
};
