///<reference types ="cypress"/>
import Base_PageObject from "./Base_PageObject";

class TrainingCoursesSourcing_PageObject extends Base_PageObject {
  navigatetoSourcing() {
    super.navigate("/procurement-training/sourcing");
  }

  clickOnDemoButton() {
    cy.get(".block-btns a[class='button']").click();
  }

  clickOnYouTubePlayButton(){
    //iframe handling

    cy.get("iframe[title='Skill Dynamics product overview']").then(function($iframe){

      const iframebody = $iframe.contents().find('body')
      console.log(iframebody)
      cy.log(iframebody)
      cy.wrap(iframebody).as("karen")

        })

        cy.get("@karen").find("button[title='Play']").click()


  }

}
export default TrainingCoursesSourcing_PageObject;
