const {When} = require("@cucumber/cucumber");
const {waitForUserName} = require("../support/actions/waitFor");
const {config} = require("../support/config");
const {totalCartButtonPriceSelector} = require("../support/selectors/price");
const {getTotalItemsPrice} = require("../support/actions/priceCounting");

When("check that user logged in", async function () {
    await waitForUserName(this.userName + " " + this.userLastName);
});

When("check that one time sing in succeed", async () => {
    //TODO (some ticket number) add final check
});

When("check that existing test user logged in", async () => {
    await waitForUserName(config.TestUserCredentials.userName);
});

When("check that error message appears", async () => {
    await browser.$$(`.form-error-message`)[0].waitForDisplayed();
});

When("check that shows {string} items to proceed", async (itemQnt) => {
    const proceedToCheckoutSelector = `button.btn.btn-undefined.btn-primary`;
    await $(proceedToCheckoutSelector).waitForDisplayed();

    const label = itemQnt === "1" ? "ITEM" : "ITEMS";
    expect(await $(proceedToCheckoutSelector).getText()).toEqual(`PROCEED TO CHECKOUT (${itemQnt} ${label})`)
});

When("check total price", async function () {
    $(totalCartButtonPriceSelector).waitForDisplayed();
    const totalPrice = await $(totalCartButtonPriceSelector).getText();
    expect(totalPrice).toEqual(getTotalItemsPrice(this.items).toString())
});
