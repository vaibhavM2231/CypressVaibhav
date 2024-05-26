Feature: User tries to Login with Valid Credentials

    verify that user is able to login with valid Credentials

    Scenario: Verify that user is able to login with valid credentials
    Given Navigate to Website
    When user enters valid username and password
    Then user should be able to login successfully
    And Dashboard is Visible



    


