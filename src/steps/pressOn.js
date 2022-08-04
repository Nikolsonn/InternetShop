import {
    signInAndRegistrationButton, signInBtnSelector,
    signUpBtnSelector
} from "../support/selectors/authElements";
import {
    addToCartBtnSelector, closeCheckoutInfoBoardBtnSelector,
    noThanksBtnSelector,
    proceedToCheckoutSelector,
    viewCartBtnSelector
} from "../support/selectors/cart";

const {When} = require('@cucumber/cucumber');

When("press on sign in and registration button", async () => {
    await $(signInAndRegistrationButton).waitAndClick();
});

When("press on items to proceed button", async () => {
    await $(proceedToCheckoutSelector).waitAndClick();
});

When("press on add to cart button", async () => {
    await $(addToCartBtnSelector).waitAndClick();
});

When("press on no thanks button, reject insurance", async () => {
    await $(noThanksBtnSelector).waitAndClick();
});

When("press on view cart button", async () => {
    await $(viewCartBtnSelector).waitAndClick();
});

When("press on close button on cart info board", async () => {
    await $(closeCheckoutInfoBoardBtnSelector).waitAndClick();
});

When("press on sing up button", async () => {
    await $(signUpBtnSelector).waitAndClick();
});

When("press on sing in button", async () => {
    await $(signInBtnSelector).waitAndClick();
});
