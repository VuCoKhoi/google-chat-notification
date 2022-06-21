const args = process.argv;
//   .filter((item) => item.includes("--"))
//   .reduce((acc, cur) => {
//     const [key, value] = cur.split("=");
//     return {
//       ...acc,
//       [key.replace("--", "")]: value,
//     };
//   }, {});

console.log("args", args, process.env);

// import { GoogleChatWebhook } from "google-chat-webhook";
// const url = process.env.WEBHOOK_URL;
// if (!url) {
//   throw new Error("Environment variable 'WEBHOOK_URL' must be set.");
// }
// const client = new GoogleChatWebhook({ url });
