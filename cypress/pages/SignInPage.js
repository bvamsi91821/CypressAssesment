class SignInPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    }
  
    enterCredentials(email, password) {
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default SignInPage;
  