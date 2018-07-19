Feature: Vulnerability Table Test
  Check behavior of Vulnerability Cases to different inputs

  Scenario: Wrong Data Input
    Given a key data list
      | threatid | src   | resolved_src | dst   | resolved_dst | severity_of_threatid | count |
      | test     | test  | test         | test  | test         | critical             | 4     |
      | test1    | test1 | test1        | test1 | test1        | high                 | -3    |
    When I request vulnerability table
    Then I should expect to get 100%
