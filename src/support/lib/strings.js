import crypto from "crypto";

export function getRandomString(length = 3) {
    return crypto.randomBytes(length).toString("hex");
}
