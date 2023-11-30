///<reference types="cypress"/>

import Base_PageObject from "./Base_PageObject";

class HomePage_PageObject extends Base_PageObject {
  navigateToHomePage() {
    super.navigate("")
  }

  trainingCoursesLink() {
    cy.get('#menu-item-4023 > [href="#"]').click()
  }

  traningCoursesProcurement() {
    cy.get("a[href*='sourcing']").click();
  }
}
export default HomePage_PageObject;
