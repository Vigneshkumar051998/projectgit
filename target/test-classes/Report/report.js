$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/test2.feature");
formatter.feature({
  "name": "verifying Adactinhotelapp detail",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verifying adactionhotelapp login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the adactinhotelapp page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter\"\u003cusername\u003e\" and\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user is select hotel page \"\u003cLocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoom Type\u003e\",\"\u003cNumber of Rooms\u003e\",\"\u003cCheck in Date\u003e\",\"\u003cCheck Out Date\u003e\",\"\u003cAdults per Rooms\u003e\",\"\u003cChildren per Room\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.step({
  "name": "user should  Select hotel",
  "keyword": "When "
});
formatter.step({
  "name": "user should click Continue",
  "keyword": "And "
});
formatter.step({
  "name": "user is on book a hotel page\"\u003cFirst Name\u003e\",\"\u003cLast Name\u003e\",\"\u003cBilling Address\u003e\",\"\u003cCredit Card No\u003e\",\"\u003cCredit Card Type\u003e\",\"\u003cExpiry\u003e\",\"\u003cDate\u003e\",\"\u003cCVV Number\u003e\",",
  "keyword": "When "
});
formatter.step({
  "name": "user should click  book now",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify valid msg",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotels",
        "Room Type",
        "Number of Rooms",
        "Check in Date",
        "Check Out Date",
        "Adults per Rooms",
        "Children per Room",
        "First Name",
        "Last Name",
        "Billing Address",
        "Credit Card No",
        "Credit Card Type",
        "Expiry",
        "Date",
        "CVV Number"
      ]
    },
    {
      "cells": [
        "vigneshkumar1998",
        "642506",
        "London",
        "Hotel Creek",
        "Deluxe",
        "1-One",
        "17/12/2021",
        "18/12/2021",
        "1-One",
        "1-One",
        "vignesh",
        "kumar",
        "2210/A",
        "7543211345678990",
        "Master Card",
        "December",
        "2022",
        "902"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verifying adactionhotelapp login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the adactinhotelapp page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.user_is_on_the_adactinhotelapp_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter\"vigneshkumar1998\" and\"642506\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.user_should_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is select hotel page \"London\",\"Hotel Creek\",\"Deluxe\",\"1-One\",\"17/12/2021\",\"18/12/2021\",\"1-One\",\"1-One\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.user_is_select_hotel_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_should_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should  Select hotel",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.user_should_Select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click Continue",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_should_click_Continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on book a hotel page\"vignesh\",\"kumar\",\"2210/A\",\"7543211345678990\",\"Master Card\",\"December\",\"2022\",\"902\",",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.user_is_on_book_a_hotel_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click  book now",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.user_should_click_book_now()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify valid msg",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.user_should_verify_valid_msg()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using id\u003dbook_now\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KTOG02E\u0027, ip: \u0027192.168.0.123\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.mainobject.LoginPage.user_should_verify_valid_msg(LoginPage.java:96)\r\n\tat ✽.user should verify valid msg(src/test/resources/features/test2.feature:13)\r\n",
  "status": "failed"
});
});