Feature: Toggle todo

  Background:
    Given I open Monocle ToDoMVC page
    And I add a new todo "todo toggle"

  Scenario: User should be able to add new todo
    Given I toggle a todo
    Then I see "completed" todo
    And I see todo count decrement "1"
