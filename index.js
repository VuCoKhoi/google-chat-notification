const {
  INPUT_PROJECT,
  INPUT_MESSAGE,
  INPUT_BRANCH,
  INPUT_WEBHOOK,
  INPUT_STATUS,
  INPUT_EVENTNUMBER,
  GITHUB_REF_NAME,
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
        subtitle: `${GITHUB_ACTOR} want to merge branch ${INPUT_HEADREF} into ${INPUT_BASEREF}`,
        // imageUrl: `https://www.appgefahren.de/wp-content/uploads/2020/01/unsplash-icon.jpg`,
        // imageStyle: BuiltInIcon.PERSON,
      },
      sections: [
        {
          widgets: [
            {
              image: {
                imageUrl: `https://images.unsplash.com/photo-1541960071727-c531398e7494?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`,
              },
            },
            {
              buttons: [
                {
                  imageButton: {
                    icon: BuiltInIcon.AIRPLANE,
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
