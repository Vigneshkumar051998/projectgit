Feature: verifying Adactinhotelapp detail

  Scenario Outline: verifying adactionhotelapp login with valid credentials
    Given user is on the adactinhotelapp page
    When user should enter"<username>" and"<password>"
    And user should click login button
    When user is select hotel page "<Location>","<Hotels>","<Room Type>","<Number of Rooms>","<Check in Date>","<Check Out Date>","<Adults per Rooms>","<Children per Room>"
    And user should click search button
    When user should  Select hotel
    And user should click Continue
    When user is on book a hotel page"<First Name>","<Last Name>","<Billing Address>","<Credit Card No>","<Credit Card Type>","<Expiry>","<Date>","<CVV Number>",
    And user should click  book now
    Then user should verify valid msg

    Examples: 
      | username         | password | Location | Hotels      | Room Type | Number of Rooms | Check in Date | Check Out Date | Adults per Rooms | Children per Room | First Name | Last Name | Billing Address | Credit Card No   | Credit Card Type | Expiry   | Date | CVV Number |
      | vigneshkumar1998 |   642506 | London   | Hotel Creek | Deluxe    | 1-One           | 17/12/2021    | 18/12/2021     | 1-One            | 1-One             | vignesh    | kumar     | 2210/A          | 7543211345678990 | Master Card      | December | 2022 |        902 |
      | vigneshkumar1998 |   642506 | London   | Hotel Creek | Deluxe    | 1-One           | 17/12/2021    | 18/12/2021     | 1-One            | 1-One             | vignesh    | kumar     | 2210/A          | 7543211345678990 | Master Card      | December | 2022 |        902 |
      | vigneshkumar1998 |   642506 | London   | Hotel Creek | Deluxe    | 1-One           | 17/12/2021    | 18/12/2021     | 1-One            | 1-One             | vignesh    | kumar     | 2210/A          | 7543211345678990 | Master Card      | December | 2022 |        902 |
      | vigneshkumar1998 |   642506 | London   | Hotel Creek | Deluxe    | 1-One           | 17/12/2021    | 18/12/2021     | 1-One            | 1-One             | vignesh    | kumar     | 2210/A          | 7543211345678990 | Master Card      | December | 2022 |        902 |
      | vigneshkumar1998 |   642506 | London   | Hotel Creek | Deluxe    | 1-One           | 17/12/2021    | 18/12/2021     | 1-One            | 1-One             | vignesh    | kumar     | 2210/A          | 7543211345678990 | Master Card      | December | 2022 |        902 |
      | vigneshkumar1998 |   642506 | London   | Hotel Creek | Deluxe    | 1-One           | 17/12/2021    | 18/12/2021     | 1-One            | 1-One             | vignesh    | kumar     | 2210/A          | 7543211345678990 | Master Card      | December | 2022 |        902 |
      | vigneshkumar1998 |   642506 | London   | Hotel Creek | Deluxe    | 1-One           | 17/12/2021    | 18/12/2021     | 1-One            | 1-One             | vignesh    | kumar     | 2210/A          | 7543211345678990 | Master Card      | December | 2022 |        902 |
      | vigneshkumar1998 |   642506 | London   | Hotel Creek | Deluxe    | 1-One           | 17/12/2021    | 18/12/2021     | 1-One            | 1-One             | vignesh    | kumar     | 2210/A          | 7543211345678990 | Master Card      | December | 2022 |        902 |
      | vigneshkumar1998 |   642506 | London   | Hotel Creek | Deluxe    | 1-One           | 17/12/2021    | 18/12/2021     | 1-One            | 1-One             | vignesh    | kumar     | 2210/A          | 7543211345678990 | Master Card      | December | 2022 |        902 |
      | vigneshkumar1998 |   642506 | London   | Hotel Creek | Deluxe    | 1-One           | 17/12/2021    | 18/12/2021     | 1-One            | 1-One             | vignesh    | kumar     | 2210/A          | 7543211345678990 | Master Card      | December | 2022 |        902 |
