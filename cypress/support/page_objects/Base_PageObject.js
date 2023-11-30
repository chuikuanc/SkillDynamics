///<reference types="cypress"/>

class Base_PageObject {
  navigate(path) {
    cy.fixture("config.json").then(function (data) {
      cy.visit(data.baseURL + path)
    })
  }
}
export default Base_PageObject;
