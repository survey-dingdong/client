describe("딩동 이메일 로그인", () => {
  it("create_workspace", () => {
    console.log(Cypress.env);
    cy.visit(Cypress.env("local"));
    cy.get('[data-cy="email-input"]').clear().type(Cypress.env("email"));
    cy.get('[data-cy="password-input"]').type(Cypress.env("password"));
    cy.get('[data-cy="login-button"]').click();
    cy.url().should("include", "/workspaces");
  });
});
