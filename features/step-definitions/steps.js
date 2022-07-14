const { Given, When, Then } = require('@wdio/cucumber-framework');

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

When("Login to newegg home page", async () => {
    await browser.url(`https://www.newegg.com/asus-rog-strix-b550-f-gam-wif/p/N82E16813119311`);
});
