///<reference types="cypress" />
import { After, Given, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage_PageObject from "../page_objects/HomePage_PageObject";

const homePage = new HomePage_PageObject()

Given("I navigate to the Skill Dynamics homepage", () => {
  homePage.navigateToHomePage();
})

When("I click on the Training courses link", () => {
  homePage.trainingCoursesLink();
})

When("I click on the Sourcing link", () => {
  homePage.traningCoursesProcurement();
})
