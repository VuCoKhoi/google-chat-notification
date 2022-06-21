console.log("args", args, process.env);

const {
  INPUT_PROJECT,
  INPUT_MESSAGE,
  INPUT_BRANCH,
  INPUT_WEBHOOK,
  INPUT_STATUS,
  GITHUB_REF_NAME,
  PR_NUMBER,
} = process.env;

console.log("aaaaaaaaaaaPR_NUMBER", PR_NUMBER);

// import { GoogleChatWebhook } from "google-chat-webhook";
// const url = process.env.WEBHOOK_URL;
// if (!url) {
//   throw new Error("Environment variable 'WEBHOOK_URL' must be set.");
// }
// const client = new GoogleChatWebhook({ url });
