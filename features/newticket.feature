Feature: New Ticket Test
  Check behavior of New Ticket Creation to different inputs

  Scenario: Normal Data Input
    Given a key data list
      | title | description | product | serial | site | technology | severity |
      | test  | test        | test    | test   | 549  | 33         | 1        |
    When I request new ticket
    Then I should expect to get
      | title | description | product | serial | site | technology | severity |
      | test  | test        | test    | test   | 549  | 33         | 1        |