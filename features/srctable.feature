Feature: Source Table Test
  Check behavior of Source Table to different inputs

  Scenario: Normal Data Input
    Given a key data list
      | src       | resolved_src | sessions | bytes     |
      | 127.0.1.1 | 127.0.1.1    | 121      | 250000000 |
      | 127.0.0.1 | 127.0.0.1    | 1209     | 100000000 |
    When I request source table
    Then I should expect to get 48%
