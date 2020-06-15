Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
    Given number of events are visible
    When user doesn’t specify the number of events she wants to see
    Then number of events is 32

Scenario: User can change the number of events they want to see
    Given user opens the app
    When user enters the number of events
    Then specified number of events is shown

