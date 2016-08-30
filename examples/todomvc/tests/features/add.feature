Feature: Add todo

  Background:
    Given I open Monocle ToDoMVC page

  Scenario: User should be able to add new todo
    Given I add a new todo "todo one"
    Then I see "todo one" is displayed
    And I see todo count increment "1"
