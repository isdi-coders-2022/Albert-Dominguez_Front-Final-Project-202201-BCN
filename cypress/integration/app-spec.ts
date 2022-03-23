// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("/login");
  });

  it("should find the 1st input and type kevin", function () {
    cy.get("input").first().type("123456").should("have.value", "123456");
    cy.get("input").last().type("123456").should("have.value", "123456");
    cy.get("button").click();
  });
});

export {};
