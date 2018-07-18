Feature: Next Button Test
  Check behavior of Next Button to different date list inputs

  Scenario: Normal Date Input
    Given A date of Feb 8 2008 05:56:36
    When I press next
    Then I should get from Jan 9 2008 05:56:36 to Feb 8 2008 05:56:36

  Scenario: Invalid Date Input
    Given A date of foo
    When I press next
    Then I should get from null to null
