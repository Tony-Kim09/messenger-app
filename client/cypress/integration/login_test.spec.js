describe("Login Page", function() {
  beforeEach(function() {
    cy.request("POST", "http://localhost:3001/testing/reset")

    const user = {
      username: "Bot1",
      name: "bot",
      password: "test123",
      email: "test@test.test"
    };

    cy.request("POST", "http://localhost:3001/register", user);
    cy.visit("http://localhost:3000/");
  });

  it("Log in with existing account", function(){
    cy.get("#change-to-login-button").click();
    cy.get("#email").type('test@test.test');
    cy.get("#password").type('test123');
    cy.get("#login-button").click();
    cy.contains("Bot1");
  });

  it("Wrong Credentials", function(){
    cy.get("#change-to-login-button").click();
    cy.get("#email").type('test@test.test');
    cy.get("#password").type('wrong');
    cy.get("#login-button").click();
    cy.contains("Invalid Username or Password");
  });

  it("Successfuly logout after logging in", function(){
    cy.get("#change-to-login-button").click();
    cy.get("#email").type('test@test.test');
    cy.get("#password").type('test123');
    cy.get("#login-button").click();
    cy.contains("Bot1");

    cy.get("#show-account-setting").click();
    cy.get("#logout-button").click();
    cy.contains("Create an account");
  })
});