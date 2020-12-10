Feature: Verify the basic arithmatic functionality of the system
  In order to work with calculator application
  As a user
  I want to be able to perform a basic arithmatic operations

  Scenario: Perform  addition of  two numbers
    Given I press number '5'
    And I press number '2'
    And I press '+' as the arithmatic operation
    And I press number '3'
    And I press number '2'
    And I press equals operation
    Then I should get result '84' as my answer

  Scenario: Perform  multiplication of  two numbers
    Given I press number '2'
    And I press number '5'
    And I press 'x' as the arithmatic operation
    And I press number '1'
    And I press number '0'
    And I press equals operation
    Then I should get result '250' as my answer

  Scenario: Perform  division of  two numbers
    Given I press number '6'
    And I press number '0'
    And I press '/' as the arithmatic operation
    And I press number '1'
    And I press number '0'
    And I press equals operation
    Then I should get result '6' as my answer

  Scenario: Perform  substraction of two numbers
    Given I press number '2'
    And I press number '4'
    And I press '-' as the arithmatic operation
    And I press number '1'
    And I press number '1'
    And I press equals operation
    Then I should get result '13' as my answer

