Feature: Login BarTenderCloud

  Scenario: Valid Login
    Given I am in BTC
    When I log in with valid credentials
    Then I should land on the home page

  # Another Sample login scenario
# Feature: BarTender Cloud Application
  # Scenario: Successful Login with Valid Credentials

  # Given A User enter the application URL
  # And A User enter the username as abc
  # And A User enter the password as abc
  # When A user clicks the Sign in button
  # Then the user lands on the home page

  # Scenario: Login Failed with invalid credentials

  # Given A User enter the application URL
  # And A User enter the username as xxx
  # And A User enter the password as yyy
  # When A user clicks the Sign in button
  # Then the user sees the error message