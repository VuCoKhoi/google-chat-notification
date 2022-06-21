const {
  INPUT_PROJECT,
  INPUT_MESSAGE,
  INPUT_BRANCH,
  INPUT_WEBHOOK,
  INPUT_STATUS,
  INPUT_EVENTNUMBER,
  GITHUB_SERVER_URL,
  INPUT_BASEREF,
  INPUT_HEADREF,
  GITHUB_ACTOR,
} = process.env;

import {
  BuiltInIcon,
  CardImageStyle,
  GoogleChatWebhook,
} from "google-chat-webhook";
const url = process.env.INPUT_WEBHOOK;
if (!url) {
  throw new Error("Environment variable 'WEBHOOK_URL' must be set.");
}
const client = new GoogleChatWebhook({ url });

const card = {
  cards: [
    {
      header: {
        title: "1 Pull Request need to be review",
        subtitle: `project: ${INPUT_PROJECT}`,
        // imageUrl: `https://www.appgefahren.de/wp-content/uploads/2020/01/unsplash-icon.jpg`,
        // imageStyle: BuiltInIcon.PERSON,
      },
      sections: [
        {
          widgets: [
            {
              keyValue: {
                topLabel: `Commit message: ${INPUT_MESSAGE}`,
                contentMultiline: `${GITHUB_ACTOR} want to merge branch ${INPUT_HEADREF} into ${INPUT_BASEREF}`,
                bottomLabel: `Status: ${INPUT_STATUS}`,
              },
            },
            {
              buttons: [
                {
                  imageButton: {
                    icon: BuiltInIcon.CLOCK,
                    onClick: {
                      openLink: {
                        url: `${GITHUB_SERVER_URL}/${INPUT_PROJECT}/pull/${INPUT_EVENTNUMBER}`,
                      },
                    },
                  },
                },
                {
                  textButton: {
                    text: `Open Pull Request`,
                    onClick: {
                      openLink: {
                        url: `${GITHUB_SERVER_URL}/${INPUT_PROJECT}/pull/${INPUT_EVENTNUMBER}`,
                      },
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
client.sendCard(card).catch(console.log);
