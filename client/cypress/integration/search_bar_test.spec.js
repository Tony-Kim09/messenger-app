describe("Login Page", function() {
  beforeEach(function() {
    cy.request("POST", "http://localhost:3001/testing/reset")

    const users = [
      {
      username: "Bob",
      name: "Bob",
      password: "Bob123",
      email: "Bob@test.test"
      },
      {
        username: "Tom",
        name: "Tom",
        password: "Tom123",
        email: "Tom@test.test"
      },
      {
        username: "David",
        name: "David",
        password: "David123",
        email: "David@test.test"
      },
      {
        username: "Jessica",
        name: "Jessica",
        password: "Jessica23",
        email: "Jessica@test.test"
      },
      {
        username: "Monica",
        name: "Monica",
        password: "Monica123",
        email: "Monica@test.test"
      },
      {
        username: "Ross",
        name: "Ross",
        password: "Ross123",
        email: "Ross@test.test"
      },
      {
        username: "Thomas",
        name: "Thomas",
        password: "Thomas123",
        email: "Thomas@test.test"
      },
      {
        username: "Clara",
        name: "Clara",
        password: "Clara123",
        email: "Clara@test.test"
      },
      {
        username: "Tiffany",
        name: "Tiffany",
        password: "Tiffany123",
        email: "Tiffany@test.test"
      },
  ];
    users.forEach(user => {
      cy.request("POST", "http://localhost:3001/register", user);
    });
    cy.visit("http://localhost:3000/");
  });

  it("Check search filter works", function(){
    cy.get("#change-to-login-button").click();
    cy.get("#email").type('Bob@test.test');
    cy.get("#password").type('Bob123');
    cy.get("#login-button").click();
    
    cy.get("#search-bar").type('David');
    cy.contains("David");
  });
});