Feature: Toggle todo

  Background:
    Given I open Monocle ToDoMVC page
    And I add a new todo "todo toggle"

  Scenario: User should be able to toggle a todo
    Given I toggle a todo
    Then I see a "completed" todo
    And I see todo count decrement "1"
    When I untoggle a todo
    Then I don't see a "completed" todo
    And I see todo count incremented "1"
