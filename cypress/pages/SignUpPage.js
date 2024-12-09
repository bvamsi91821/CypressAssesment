class SignUpPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    }
  
    fillOutForm(firstName, lastName, email, password) {
      cy.get('#firstname').type(firstName);
      cy.get('#lastname').type(lastName);
      cy.get('#email_address').type(email);
      cy.get('#password').type(password);
      cy.get('#password-confirmation').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default SignUpPage;
  