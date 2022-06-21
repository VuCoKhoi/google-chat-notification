const {
  INPUT_PROJECT,
  INPUT_MESSAGE,
  INPUT_BRANCH,
  INPUT_WEBHOOK,
  INPUT_STATUS,
  INPUT_EVENTNUMBER,
  GITHUB_REF_NAME,
  PR_NUMBER,
} = process.env;

import { GoogleChatWebhook } from "google-chat-webhook";
const url = process.env.INPUT_WEBHOOK;
if (!url) {
  throw new Error("Environment variable 'WEBHOOK_URL' must be set.");
}
const client = new GoogleChatWebhook({ url });
