Feature: verify that Admin user is able to Edit Other Users

    verify that Admin user is able to Edit Other Users
    @Regression
    Scenario: verify that Admin user is able to Edit Other Users
    Given Navigate to Website
    When Admin enters valid username and password
    And Admin logged in  successfully
    And Admin clicks on Admin Link and click on Add User button
    And User submits the Add user form with unique <EmployeeName> and <username> and <password>
    Then New User should be created successfully
    And Admin Clicks on Admin Link
    And Admin Searches for the User to be Deleted
    And Admin Deletes the user
    Then Admin validates that new user is deleted.
    And Deleted user is not able to Login <password>

    


    Examples:
    
        | EmployeeName | username|password|
        | "Jasmine Morgan"| "sara.india@test.com"|"P@ssw0rd1"|
        | "Lisa Andrews"| "Lisa.india@test.com"|"P@ssw0rd1"|
         



    