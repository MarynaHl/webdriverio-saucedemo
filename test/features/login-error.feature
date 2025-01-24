Feature: Login error

  Scenario: Clicking Login without username
    Given User is located on the main page of saucedemo website
    When User clicks "Login" button
    Then User should see "Epic sadface: Username is required" error message
