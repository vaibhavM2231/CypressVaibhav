Feature:  Verify that new user is created successfully and New user is able to login

    Verify that new user is created successfully and New user is able to login
    @Reg
    Scenario: Verify that new user is created successfully and New user is able to login
    Given Navigate to Website
    When Admin enters valid username and password
    And Admin logged in  successfully
    And Admin clicks on Admin Link and click on Add User button
    And User submits the Add user form with unique <EmployeeName> and <username> and <password>
    Then New User should be created successfully
    And New user is shown in the Search Result
    And New user is able to Login successfully <password>


    Examples:
    
        | EmployeeName | username|password|
        | "Jasmine Morgan"| "sara.india@test.com"|"P@ssw0rd1"|
        | "Lisa Andrews"| "Lisa.india@test.com"|"P@ssw0rd1"|
         


    @Reg
    Scenario: Verify that new user is created successfully and New user is able to login
    Given Navigate to Website
    When Admin enters valid username and password
    And Admin logged in  successfully
    And Admin clicks on Admin Link and click on Add User button
    And User submits the Add user form with unique <EmployeeName> and <username> and <password>
    Then New User should be created successfully
    And New user is shown in the Search Result
    And New user is able to Login successfully


    Examples:
    
        | EmployeeName | username|password|
        | "Jasmine Morgan"| "sara.india@test.com"|"P1"|
     



    