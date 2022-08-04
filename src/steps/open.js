const {When} = require("@cucumber/cucumber");
const {homePageUrl, WaitTime} = require("../support/lib/constants");
const {companyLogoSelector} = require("../support/selectors/commonElements");

When("open newegg home page", async () => {
    await browser.pause(WaitTime.Second);
    await browser.url(homePageUrl);

    // TODO (some ticket number) Random Promotion banner work around. On test env should be disabled.
    await browser.pause(WaitTime.FiveSeconds);
    await browser.refresh();
    await $(companyLogoSelector).waitForDisplayed({timeout: WaitTime.FiveSeconds});
});

When("open today best deal", async () => {
    await browser.url(homePageUrl + `todays-deals?cm_sp=Head_Navigation-_-Under_Search_Bar-_-Today%27s+Best+Deals`);
});

When("open item number {int} in today best deal tab", async (itemNumber) => {
    await $(companyLogoSelector).waitForDisplayed();
    await $$(`div > div.item-info > a`)[itemNumber].waitAndClick();
});
