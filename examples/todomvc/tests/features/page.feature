Feature: ToDo Page

  Scenario: Validate Todo Home page
    Given I open Monocle ToDoMVC page
    Then I see title "Monocle • TodoMVC"
    And I see header "todos"
    And I see input with placeholder "What needs to be done?"
