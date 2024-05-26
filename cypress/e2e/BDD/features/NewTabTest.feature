Feature: User clicks on a Button which opens a new tab

    verify that user is able to work on the new tab page 

    Scenario: verify that user is able to work on the new tab page 
    Given User visits Home Page
    When user click on Contact Us Button which is at Bottom
    Then user is navigated to new Tab which is handled by Cypress
    And user validates the Page Title
    And user validates the Contact Options
    And user validates that Call Now Option is available
    When user uses cypress command to navigate back 
    Then User is navigated back to home page
