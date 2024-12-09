import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignUpPage from '../../pages/SignUpPage';
import SignInPage from '../../pages/SignInPage';

const signUpPage = new SignUpPage();
const signInPage = new SignInPage();

Given('the user is on the sign-up page', () => {
  signUpPage.visit();
});

When('the user enters valid details and clicks "Create an Account"', () => {
  signUpPage.fillOutForm('John', 'Doe', 'john.doe@example.com', 'Password123');
  signUpPage.submit();
});

Then('the user should be redirected to the dashboard', () => {
  cy.url().should('include', '/customer/account');
  cy.get('h1').should('contain', 'My Dashboard');
});

Given('the user is on the sign-in page', () => {
  signInPage.visit();
});

When('the user enters invalid credentials and clicks "Sign In"', () => {
  signInPage.enterCredentials('invalid.email@example.com', 'WrongPassword123');
  signInPage.submit();
});

Then('the user should see an error message', () => {
  cy.get('.error-msg').should('contain', 'Invalid login or password.');
});
