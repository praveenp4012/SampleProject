$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Selenium/CucumberDemo/src/main/java/features/DataTableWithMapsGoogle.feature");
formatter.feature({
  "line": 1,
  "name": "Test the Search functionality of Google",
  "description": "",
  "id": "test-the-search-functionality-of-google",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "# Feature File driven by Data table"
    }
  ],
  "line": 4,
  "name": "Enter the text in Google Search Page",
  "description": "",
  "id": "test-the-search-functionality-of-google;enter-the-text-in-google-search-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "URL of the Website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Some text is entered in the search box",
  "rows": [
    {
      "cells": [
        "text"
      ],
      "line": 8
    },
    {
      "cells": [
        "praveen"
      ],
      "line": 9
    },
    {
      "cells": [
        "kohli"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Home page should be opened",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionGoogleUsingMaps.url_of_the_Website()"
});
formatter.result({
  "duration": 9576610177,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionGoogleUsingMaps.some_text_is_entered_in_the_search_box(DataTable)"
});
formatter.result({
  "duration": 3029028900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionGoogleUsingMaps.home_page_should_be_opened()"
});
formatter.result({
  "duration": 171101902,
  "status": "passed"
});
});