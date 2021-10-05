describe("Register Page", function() {
  beforeEach(function() {
    cy.wait(2000);
    cy.clearLocalStorage();
    cy.request("POST", "http://localhost:3001/testing/reset");
    cy.visit("http://localhost:3000/");
  });

  it("Successfuly make an account", function(){
    cy.contains("Create an account");
    cy.get("#username").type('account');
    cy.get("#name").type('account');
    cy.get("#email").type('account@gmail.com');
    cy.get("#password").type('account');
    cy.get("#create-button").click();
    cy.contains("account");
  });

  it("Check if redirect to login button works", function(){
    cy.get("#change-to-login-button").click();
    cy.contains("Welcome Back!");
  });

  it("Username Too Short", function(){
    cy.contains("Create an account");
    cy.get("#username").type('a');
    cy.get("#name").type('account');
    cy.get("#email").type('account@gmail.com');
    cy.get("#password").type('account');
    cy.get("#create-button").click();
    cy.contains("Minimum of 3 characters");
  });

  it("Password Too Short", function(){
    cy.contains("Create an account");
    cy.get("#username").type('account');
    cy.get("#name").type('account');
    cy.get("#email").type('account@gmail.com');
    cy.get("#password").type('a');
    cy.get("#create-button").click();
    cy.contains("Minimum of 6 characters");
  });

  it("Wrong email format", function(){
    cy.contains("Create an account");
    cy.get("#username").type('account');
    cy.get("#name").type('account');
    cy.get("#email").type('account.com');
    cy.get("#password").type('account');
    cy.get("#create-button").click();
    cy.contains("Email Format is xyz@xxx.xxx");
  });
});