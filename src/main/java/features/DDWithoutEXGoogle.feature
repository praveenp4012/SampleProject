Feature: Test the Search functionality of Google 

# Data driven Feature File without Examples Keyword
Scenario: Enter the text in Google Search Page

	Given URL of the Website 
	When Some text "selenium" is entered in the search box 
	Then Home page should be opened 