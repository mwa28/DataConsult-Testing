Feature: Update Cases Test
  Check behavior of Update Cases to different inputs

  Scenario: Normal Data Input
    Given a key data list
      | Opened | Unassigned | Closed | Active |
      | 56     | 45         | 3      | 5      |
    When I request number of active cases
    Then I should expect to get 5

  Scenario: Wrong Data Input
    Given a key data list
      | Opened | Unassigned | Closed | Active |
      | foo    | -2         |        | null   |
    When I request number of active cases
    Then I should expect to get null