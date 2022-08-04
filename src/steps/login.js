const {When} = require("@cucumber/cucumber");
const {config} = require("../support/config");
const {
    signInSubmitButton,
    oneTimeSignInButton,
    nameRegistrationInputSelector,
    lastNameRegistrationInputSelector,
    emailRegistrationInputSelector,
    passwordRegistrationInputSelector, emailInputFieldSelector, passwordInputFieldSelector
} = require("../support/selectors/authElements");

When("login by existing test user", async function () {
    await $(emailInputFieldSelector).waitAndPutValue(config.TestUserCredentials.userEmail);
    await $(signInSubmitButton).waitAndClick();

    await $(passwordInputFieldSelector).waitAndPutValue(config.TestUserCredentials.userPass);
    await $(signInSubmitButton).waitAndClick();
    this.userName = config.TestUserCredentials.userName;
    this.userLastName = config.TestUserCredentials.userName;
});

When("login by one time sing in", async function () {
    await $("[id='labeled-input-signEmail']").waitAndPutValue(this.inboxName);
    await $(oneTimeSignInButton).waitAndClick();
});

When("full field random user registration data", async function () {
    await $(nameRegistrationInputSelector).waitForDisplayed();
    await $(nameRegistrationInputSelector).setValue(this.userName);
    await $(lastNameRegistrationInputSelector).setValue(this.userLastName);
    await $(emailRegistrationInputSelector).setValue(this.inboxName);
    await $(passwordRegistrationInputSelector).setValue(this.userPass);

});
