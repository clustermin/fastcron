---
title: Discord integration
description: "Receive cron notifications on your Discord channel when your cronjobs fail or succeed."
---

You can receive a message in your Discord channel when your cronjobs fail or succeed.

To set up integration from FastCron to your Discord channel, follow the instructions below:

## Create an incoming webhook at Discord

![Discord integration](/screenshots/integrations/discord-integration.png)

- Open your **Server Settings** 
- Click the Integrations tab
- Click the Create Webhook button.

Now you'll get an incoming webhook URL that allows FastCron to send messages to your channel.

The URL looks like this
```
https://discord.com/api/webhooks/STUFF/GO_HERE
```

## Add it to your account Channels

- Click the tab **Channels** on your account dashboard.
- Click **Add channel** >  **Discord**.
- Paste the webhook URL, then **Save**.

## Enable notifications for your cronjobs
FastCron enables notifications for your cronjobs by default.

To check it, edit cronjobs, in the section **Notifications**,
ensure the **Notify me: when cronjob fails**, and **when cronjob succeeds after failed** are checked.

FastCron will send you a message when a cronjob in your account fails, and when it succeeds again.