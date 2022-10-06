Feature: Login and Registration tests

  Background:
    When open newegg home page
    * press on sign in and registration button

  Scenario: Registration not possible
    When press on sing in button
    * press on sing up button
    Then check that error message appears

  Scenario: Login by existing account
    * login by existing test user
    * check that user logged in
    * delete browser cookies

  Scenario: Register new account
    When prepare new random user "Test_"
    * prepare new random email
    * press on sing in button
    * full field random user registration data
    * press on sing up button
    Then check that user logged in
    * delete browser cookies

#    TODO (ticket number) One-time sign in code unavailable
  Scenario: One-time sign in code
    When prepare new random email
    * login by one time sing in
    Then check that user logged in
    * delete browser cookies
