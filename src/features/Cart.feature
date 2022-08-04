#Feature: Cart tests
#
#  Background:
#    Given open newegg home page
#    * open today best deal
#
#  Scenario: One item proceed and checkout page open
#    Then open item number 2 in today best deal tab
#    * collect item name and price from page
#    * press on add to cart button
#    * press on no thanks button, reject insurance
#    * check that shows "1" items to proceed
#    * press on items to proceed button
#    * login by existing test user
#    Then wait for checkout page
#    * delete browser cookies
#
#  Scenario: Two item proceed and total price
#    Then open item number 2 in today best deal tab
#    * collect item name and price from page
#    * press on add to cart button
#    * press on no thanks button, reject insurance
#    * open today best deal
#    * open item number 1 in today best deal tab
#    * collect item name and price from page
#    * press on add to cart button
#    * press on no thanks button, reject insurance
#    * press on view cart button
#    Then check total price
