Feature: Daily Cases Test
  Check behavior of Daily Cases to different inputs

  Scenario: Normal Data Input
    Given a number key data list
      | Opened | Unassigned | Closed | Canceled |
      | -56     | 45        | 5      | 3        |
    When I request daily number of opened cases
    Then I should expect to get (-56 Tickets)
