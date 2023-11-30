///<reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import TrainingCoursesSourcing_PageObject from "../page_objects/TrainingCoursesSourcing_PageObject"

const sourcing = new TrainingCoursesSourcing_PageObject()

Given("I navigate to the Training Course_Procurement_Sourcing page", () => {
  sourcing.navigatetoSourcing()  
})

When("I click on Arrange a Demo button", () => {
  sourcing.clickOnDemoButton()

})

When("I click on YouTube play button", () => {
  sourcing.clickOnYouTubePlayButton()

})

Then("I verify if I am in the Procument traning page", () => {
 
  // cy.get("section[id='block_6066d426ebc6b'] h2").then(($h2) => {
 //   const text = $h2.text();
 //   cy.log(text);
 // });

  cy.get("section[id='block_6066d426ebc6b'] h2")
    .should("contain","Procurement")
  
});
