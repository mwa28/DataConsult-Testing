Feature: Latest Ticket Test
  Check behavior of Latest Ticket table to different inputs

  Scenario: Unsorted Data Input
    Given a data with dates list
      | Date                  | Customer | Title  | Owner    | Reference      | Status      |
      | May 19 2018 06:30:20  | May 19   | May 19 | May 19   | 180519-063020  | Soft-Closed |
      | May 20 2018 09:57:38  | May 20   | May 20 | May 20   | 180520-095738  | Active      |
      | May 15 2018 04:30:20  | May 15   | May 15 | May 15   | 180515-043020  | Active      |
      | May 2 2018 02:02:02   | May 2    | May 2  | May 2    | 180502-020202  | Soft-Closed |
    When I request latest ticket
    Then I should expect to get the ticket of May 19 2018 06:30:20

  Scenario: Wrong Data Input
    Given a data with dates list
      | Date                  | Customer | Title  | Owner    | Reference      | Status      |
      | foo                   | May 19   | May 19 | May 19   | 180519-063020  | Soft-Closed |
      | May 20 2018 09:57:38  | May 20   | May 20 | May 20   | 180520-095738  | Active      |
      | May 15 2018 04:30:20  | May 15   | May 15 | May 15   | 180515-043020  | Active      |
      | May 2 2018 02:02:02   | May 2    | May 2  | May 2    | 180502-020202  | Soft-Closed |
    When I request latest ticket
    Then I should expect to get the ticket of Invalid Date

  Scenario: Wrong Status Input
    Given a data with dates list
      | Date                  | Customer | Title  | Owner    | Reference      | Status      |
      | May 19 2018 06:30:20  | May 19   | May 19 | May 19   | 180519-063020  | Soft        |
      | May 20 2018 09:57:38  | May 20   | May 20 | May 20   | 180520-095738  | Active      |
      | May 15 2018 04:30:20  | May 15   | May 15 | May 15   | 180515-043020  | Active      |
      | May 2 2018 02:02:02   | May 2    | May 2  | May 2    | 180502-020202  | Soft-Closed |
    When I request latest ticket
    Then I should expect to get a badge of success