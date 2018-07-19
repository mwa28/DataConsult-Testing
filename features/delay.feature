Feature: Delay Graph Test
  Check behavior of Delay Graph to different inputs

  Scenario: Random Data Input
    Given a random data list
      | Antarctica | Australia | Brazil | Egypt | Japan | UK | USA | UAE |
    When I request delay graph
    Then it should pass
