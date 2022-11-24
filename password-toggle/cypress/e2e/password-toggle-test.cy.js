/// <reference types="cypress" />

describe("password toggle", () => {
  beforeEach(() => {
    cy.visit("http://localhost:64908");
  });

  it.only("Input field should exist", () => {
    cy.get("#text").should("exist");
  });
});
