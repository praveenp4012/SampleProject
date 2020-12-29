Feature: Test the Search functionality of Google 

# Data driven Feature File with Examples Keyword
Scenario Outline: Enter the text in Google Search Page

	Given URL of the Website 
	When Some text "<text>" is entered in the search box 
	Then Home page should be opened
	
Examples:
	|text|
	|Java|
	|Python|
	|Selenium|