---
title: Slack integration
description: "Receive cron notifications on your Slack channel when your cronjobs fail or succeed."
---

You can receive a message in your Slack channel when your cronjobs fail or succeed.

To set up integration from FastCron to your Slack channel, follow the instructions below:

## Create an incoming webhook at Slack
- Follow this link to [create a Slack app](https://api.slack.com/apps/new) with the name **FastCron**.
- Enable incoming webhooks on the settings page for your new app. Select **Incoming Webhooks**, and toggle **Activate Incoming Webhooks** to on.
- Click **Add new webhook**.

Now you'll get an incoming webhook URL that allows FastCron to send messages to your channel.

The URL looks like this
```
https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXX
```

## Add it to your account Channels

- Click the tab **Channels** on your account dashboard.
- Click **Add channel** >  **Slack**.
- Paste the webhook URL, then **Save**.

## Enable notifications for your cronjobs
FastCron enables notifications for your cronjobs by default.

To check it, edit cronjobs, in the section **Notifications**,
ensure the **Notify me: when cronjob fails**, and **when cronjob succeeds after failed** are checked.

FastCron will send you a message when a cronjob in your account fails, and when it succeeds again.