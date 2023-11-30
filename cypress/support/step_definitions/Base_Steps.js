import { After, Before, When } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.log("Execute for before scenarios");
  cy.clearLocalStorage();
})

After(() => {
  cy.log("Execute after each Scenario/Test");
})

When("I wait for {int} seconds", (seconds) => {
  cy.wait(seconds * 1000);
})
