export async function createTemporaryInbox() {
    // external email API usage
    const MailSlurp = require('mailslurp-client').default;
    const apiKey = process.env.API_KEY;
    const mailslurp = new MailSlurp({apiKey});
    const inbox = await mailslurp.inboxController.createInbox({});
    expect(inbox.emailAddress).toContain('@mailslurp');
    return inbox.emailAddress;
}
