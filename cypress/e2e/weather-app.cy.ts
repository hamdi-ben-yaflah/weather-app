describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays the city name and country", () => {
    cy.get("main").within(() => {
      cy.get("h4").should("contain", "Berlin, DE");
    });
  });

  it("renders the WeatherList component", () => {
    cy.get("main").within(() => {
      cy.get('[data-cy="weather-list"]').should("exist");
    });
  });
});
