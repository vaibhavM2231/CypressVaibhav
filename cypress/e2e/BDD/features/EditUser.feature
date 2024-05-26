Feature: erify that Admin user is able to Edit Other Users

    @Regression
    Scenario: verify that Admin user is able to Edit Other Users
    Given Navigate to Website
    When Admin enters valid username and password
    And Admin logged in  successfully
    And Admin clicks on Admin Link and click on Add User button
    And User submits the Add user form with unique <EmployeeName> and <username> and <password>
    Then New User should be created successfully
    And Admin Clicks on Admin Link
    And Admin Searches for the User to be Edited
    And Admin Updates the Role and password of the user
    Then Admin validates the updated details of the user
    
      Examples:
    
    
        | EmployeeName | username|password|
        | "Jasmine Morgan"| "sara.india@test.com"|"P@ssw0rd1"|
        | "Lisa Andrews"| "Lisa.india@test.com"|"P@ssw0rd1"|




    