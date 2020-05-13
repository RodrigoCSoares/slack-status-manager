import { App } from "@slack/bolt";

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.event("app_home_opened", async () => {
  try {
    console.log("App home opened!")
  } catch (error) {
    console.error(error);
    console.error(JSON.stringify(error))
  }
});

app.command('/lunch', async ({ command, ack, say }) => {
  try {
    await ack();

    await say(`${command.text}`);
  } catch (error) {
    console.error(JSON.stringify(error))
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
