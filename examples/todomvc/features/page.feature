Feature: Validate ToDo Page

  Scenario: Validate Todo Home page
    Given I am on ToDo page
    Then I see title "TodoMVC"
    And I see header "todos"
    And I see input with placeholder "What needs to be done?"
