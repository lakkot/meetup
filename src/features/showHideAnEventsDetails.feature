Feature: Show/Hide event details

Scenario: An event element is collapsed by default
    Given user can see the event list
    When user views search result
    Then details for event will be collapsed

Scenario: User can expand an event to see its details
    Given user can see events list
    When user clicks on the event 
    Then event details are shown

Scenario: User can collapse an event to hide its details
    Given user can see events list
    And details for the event are visible
    When user clinks on the -hide details- button 
    Then details of the event are collapsed



