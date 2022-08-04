const {When} = require("@cucumber/cucumber");
const {withUnique} = require("../support/lib/utils");
const {createTemporaryInbox} = require("../support/actions/email");
const {itemDollarsPricePartSelector, itemCentsPricePartSelector} = require("../support/selectors/price");

When("prepare new random user {string}", async function (name) {
    this.userName = withUnique(name);
    this.userLastName = withUnique(name);
    this.userPass = withUnique(name);
});

When("prepare new random email", async function () {
    this.inboxName = await createTemporaryInbox();
});

When("wait for checkout page", async () => {
    await $(`[id="totalItemCountId"]`).waitForDisplayed();
});

When("collect item name and price from page", async function () {
    await $(itemDollarsPricePartSelector).waitForDisplayed();
    const item = {
        name: await $(`[class="product-title"]`).getText(),
        price: await $(itemDollarsPricePartSelector).getText() + await $(itemCentsPricePartSelector).getText(),
        quantity: 1,
    }
    console.log("item", item);
    if (!this.items){
        this.items = [];
    }
    this.items.push(item);
});

When("delete browser cookies", async () => {
    await browser.deleteAllCookies();
});
