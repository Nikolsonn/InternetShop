const { When } = require('@wdio/cucumber-framework');

// TODO create some TS config

// TODO create WORLD context (Cucumber)

When("login by {string} and password {string}", async (username, password) => {
    await $("[id='labeled-input-signEmail']").waitAndPutValue(username);
    await $("[id='signInSubmit']").waitAndClick();

    await $("[id='labeled-input-password']").waitAndPutValue(password);
    await $("[id='signInSubmit']").waitAndClick();
});

When("login to newegg home page", async () => {
    await browser.url(`https://www.newegg.com/`);
    // promotion pop up temporary work around
    await browser.pause(5000);
    await browser.refresh();
});

When("open authentication page", async () => {
    await browser.pause(5000);
    await $('div.header2021-nav.header2021-account').waitAndClick();
});

When("open sing in page", async () => {
    await $('div:nth-child(4) > p > a').waitAndClick();
});
When("prepare new random user", async () => {
    // external email API usage
    const MailSlurp = require('mailslurp-client').default;
    const apiKey = process.env.API_KEY;
    const mailslurp = new MailSlurp({apiKey});
    const inbox = await mailslurp.inboxController.createInbox({});
    expect(inbox.emailAddress).toContain('@mailslurp');

    // temporary data for debug purpose
    this.inboxName = inbox.emailAddress;
    this.inboxName = "e0b8107c-163f-4862-bfe8-50305a44ea98@mailslurp.com";
    this.userName = getRandomString("Name");
    this.userLastName = getRandomString("LastName");
    this.userPass = getRandomString("Pass");
});


When("full field random user registration data", async () => {

    // await browser.debug();

    await $("[tabindex='1']").setValue("Test");
    await $("[tabindex='2']").setValue("Name");

    await $("[tabindex='3']").setValue("e0b8107c-163f-4862-bfe8-50305a44ea98@mailslurp.com");
    await $('div:nth-child(11) > button').waitAndClick();
});

function getRandomString(prefix) {
    return prefix + Math.random().toString(36).substring(2, 7);
}
