Feature: Test the Search functionality of Google 

# Feature File driven by Data table
Scenario: Enter the text in Google Search Page

Given URL of the Website 
When Some text is entered in the search box
|praveen|
Then Home page should be opened 
