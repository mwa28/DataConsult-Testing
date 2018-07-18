Feature: Previous Button Test
  Check behavior of Previous Button to different date list inputs

  Scenario: Normal Date Input
    Given a date list
      | 2008 May 3 08:56:39 | 2009 Jun 5 08:07:02 | 2008 Jan 3 05:56:36 | 2003 May 20 05:30:15 |
    When I press previous
    Then I should get from 2008 May 3 8:56:39 to 2009 Jun 5 8:07:02
