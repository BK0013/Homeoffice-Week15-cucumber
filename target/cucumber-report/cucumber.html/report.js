$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/VisaChecks.feature");
formatter.feature({
  "line": 1,
  "name": "Visa checks",
  "description": "",
  "id": "visa-checks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9090917100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "An Australian coming to the UK for Tourism.",
  "description": "",
  "id": "visa-checks;an-australian-coming-to-the-uk-for-tourism.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I start visa check",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select a nationality of \u0027australia\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select reason \u0027tourism\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I will be informed \u0027You will not need a visa to come to the UK\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeOfficeSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 412551900,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 534661800,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectANationalityOfAustralia()"
});
formatter.result({
  "duration": 246427800,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 279604800,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectReasonTourism()"
});
formatter.result({
  "duration": 111447800,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 332278500,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iWillBeInformedYouWillNotNeedAVisaToComeToTheUK()"
});
formatter.result({
  "duration": 85206400,
  "status": "passed"
});
formatter.after({
  "duration": 1303627800,
  "status": "passed"
});
formatter.before({
  "duration": 3932349000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "A Chilean coming to the UK for Work and plans on staying for longer than 6 months.",
  "description": "",
  "id": "visa-checks;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-6-months.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Smoke"
    },
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I start visa check",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select a nationality of \u0027chile\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select reason \u0027Work, academic visit or business\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I state I am intending to stay for \u0027more\u0027 than 6 months",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I state I have planning to work \u0027health\u0027 types of job",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I will be informed \u0027You need a visa to work in health and care\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeOfficeSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 47300,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 404975000,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectANationalityOfChile()"
});
formatter.result({
  "duration": 148623000,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 429736200,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectReasonWorkAcademicVisitOrBusiness()"
});
formatter.result({
  "duration": 104723600,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 336833700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 47
    }
  ],
  "location": "HomeOfficeSteps.iStateIAmIntendingToStayForMoreThanMonths(int)"
});
formatter.result({
  "duration": 117511100,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 359865700,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iStateIHavePlanningToWorkHealthTypesOfJob()"
});
formatter.result({
  "duration": 109486100,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 434416500,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iWillBeInformedYouNeedAVisaToWorkInHealthAndCare()"
});
formatter.result({
  "duration": 72963800,
  "status": "passed"
});
formatter.after({
  "duration": 1006657100,
  "status": "passed"
});
formatter.before({
  "duration": 4034573100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "A Columbian national coming to the UK to join a partner for a long stay. They do have an Article 10 or 20 card.",
  "description": "",
  "id": "visa-checks;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay.-they-do-have-an-article-10-or-20-card.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I start visa check",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I select a nationality  of \u0027colombia\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select reason \u0027family\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I state My partner or family member have uk immigration status \u0027yes\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I will be informed \u0027You’ll need a visa to join your family or partner in the UK\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeOfficeSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 29600,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 334231100,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectANationalityOfColombia()"
});
formatter.result({
  "duration": 144059300,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 399691400,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectReasonFamily()"
});
formatter.result({
  "duration": 96216200,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 374243000,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iStateMyPartnerOrFamilyMemberHaveUkImmigrationStatusYes()"
});
formatter.result({
  "duration": 130861700,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 393333400,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iWillBeInformedYouLlNeedAVisaToJoinYourFamilyOrPartnerInTheUK()"
});
formatter.result({
  "duration": 69434600,
  "status": "passed"
});
formatter.after({
  "duration": 940207000,
  "status": "passed"
});
});