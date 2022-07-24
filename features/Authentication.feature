Feature: Login and Registration tests

  Background:
    When login to newegg home page

  Scenario: Login to existing account
    When open authentication page
    * login by "" and password ""

  Scenario: Register new account
    When prepare new random user
    * open authentication page
    * open sing in page
    * full field random user registration data
