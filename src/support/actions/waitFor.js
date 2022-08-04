import {userSubTitleSelector} from "../selectors/authElements";

export async function waitForUserName(userName) {
    await $(userSubTitleSelector).waitForDisplayed();
    const userNameAndLastName = await $(userSubTitleSelector).getText();
    expect(userNameAndLastName).toContain(userName);
}
