Feature: My first cucumber feature
    As a user I should get a message Hello UserName!!!
    
    Scenario: Greeting Message
        Given I am on the HomePage
        When I enter the text "Rajesh"
        Then I should be able to see the message "Hello Rajesh"