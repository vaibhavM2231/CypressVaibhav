Feature:  verify that user is not able to login with invalid Credentials

    verify that user is not able to login with invalid Credentials
    @Regression
    Scenario: verify that user is not able to login with invalid Credentials
    Given Navigate to Website
    When user enters the invalid credentials <username> and <password>
    Then user should get error message

    Examples:
    
        | username | password|
        | "Admin"| "Test"|
        | "Test"| "admin123"|
        | "admin123"| "Admin"|




    