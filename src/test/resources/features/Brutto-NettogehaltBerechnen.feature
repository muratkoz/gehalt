@brutto
Feature: Brutto-Nettogehalt berechnen

Scenario: Verify that user should able to see the calculation of the net salary
  Given the user is on the main page
  When user logs in with valid credentials
Then user navigates to "Brutto Netto Rechner" menu
And user inputs the requried data to calculate salary
Then user should able to see Monatlich and Jährlich net salary calculation as a result
And user should able to see the "Software Test Engineer" Job offers 15 km around "Leer"