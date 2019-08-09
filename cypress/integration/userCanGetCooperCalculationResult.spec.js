describe("Cooper Client calculates successfully", () => {
  before(function() {
    cy.visit("http://localhost:3001");
    cy.get('input[id="distance"]').type("1000");
    cy.get('select[id="gender"]').select("female");
    cy.get('input[id="age"]').type("23");
  });

  it("displays age", () => {
    cy.contains("23 years old");
  });

  it("displays gender", () => {
    cy.contains("female");
  });

  it("displays distance", () => {
    cy.contains("Running 1000 meters");
  });

  it("displays result", () => {
    cy.contains("POOR");
  });
});
