$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Brutto-NettogehaltBerechnen.feature");
formatter.feature({
  "name": "Brutto-Nettogehalt berechnen",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@brutto"
    }
  ]
});
formatter.scenario({
  "name": "Verify that user should able to see the calculation of the net salary",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@brutto"
    }
  ]
});
formatter.step({
  "name": "the user is on the main page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user navigates to \"Brutto Netto Rechner\" menu",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user inputs the requried data to calculate salary",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should able to see Monatlich and Jährlich net salary calculation as a result",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should able to see the \"Software Test Engineer\" Job offers 15 km around \"Leer\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});