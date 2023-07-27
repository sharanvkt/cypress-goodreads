import {
  clickOnSignInButton,
  loginWithCredentials,
  searchForBookByName,
  clickOnWantToReadButton,
  clickOnMyBooksFromHeader,
  clickOnDeleteIconInMyBooks,
  logoutFromAccount,
} from "../support/bookActions";

describe("Add and Remove Book from 'Want to Read' List", () => {
  before(() => {
    cy.visit("https://www.goodreads.com/");
  });

  it("Should add a book to 'Want to Read', mark it as 'Want to Read', and then remove it", () => {
    clickOnSignInButton();
    loginWithCredentials();
    searchForBookByName("DOCTOR STRANGE");
    clickOnWantToReadButton();
    clickOnMyBooksFromHeader();
    clickOnDeleteIconInMyBooks();
    logoutFromAccount();
  });
});
