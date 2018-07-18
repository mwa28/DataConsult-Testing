Feature: Client Insights Test
  Check behavior of Client Insights table to different inputs

  Scenario: Normal Data Input
    Given a key data list
      | Owner           | CaseCount | Customer            | CustomerCount | Category        | CategoryCount | Technology          | TechnologyCount | Difficulty | DifficultyCount | TotalCases | TotalCustomers | TotalCategories | TotalTechnologies | TotalDifficulties | avatar                                                                                                                             |
      | Julien Rahal    | 63        | Azadea              | 99            | Misconfiguration| 89            | Voice & Video       | 112             | Average    | 187             | 355        | 355            | 346             | 346               | 346               | https://lh3.googleusercontent.com/Z0EzEvOXm-KCY27xigj5fBoSt0hFGIygw4iZ2mfbSZd665LRF7yHZMvU5XbgtVWL2RnivFnR7GbKuQ=s718-rw-no        |
      | Mahmoud Lattouf | 48        | Touch               | 31            | MAC             | 82            | Routing & Switching | 91              | Simple     | 114             | 355        | 355            | 346             | 346               | 346               | https://lh3.googleusercontent.com/Z0EzEvOXm-KCY27xigj5fBoSt0hFGIygw4iZ2mfbSZd665LRF7yHZMvU5XbgtVWL2RnivFnR7GbKuQ=s718-rw-no        |
      | Sylvia El Ferkh | 44        | Bank of Beirut (BOB)| 19            | Others          | 45            | Security            | 75              | Difficult  | 30              | 355        | 355            | 346             | 346               | 346               | https://lh3.googleusercontent.com/lPkdIgRAi0YaOEWmo1tkSRK0EAV0SprkCiebyPcYmeOth2ee2G0DJAFqQQ7P2vx6bBCXZEZgHfGNhg=w1496-h1500-rw-no |
    When I request client insights
    Then I should not expect to get null

  Scenario: No Data Input
    Given no data list
    When I request client insights
    Then I should expect to get null