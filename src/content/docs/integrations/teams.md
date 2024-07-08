---
title: Teams integration
description: "Receive cron notifications on your Teams channel when your cronjobs fail or succeed."
sidebar:
    label: Teams
---

You can receive a message in your Teams channel when your cronjobs fail or succeed.


## Create an incoming webhook at Teams
Please follow the instructions to 
[create an webhook URL for your Teams](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook).

Now you'll get an incoming webhook URL that allows FastCron to send messages to your channel.

The URL looks like this
```
https://NAME.webhook.office.com/STUFF/GO_HERE
```

## Add it to your account Channels

- Click the tab [**Channels**](https://app.fastcron.com/account/channel) on your account dashboard.
- Click the **Teams** button.
- Paste the webhook URL, then **Save**.

## Enable notifications for your cronjobs
FastCron enables notifications for your cronjobs by default.

To check it, edit cronjobs, at the section **Notifications**,
ensure the **Notify me: when cronjob fails**, and **when cronjob succeeds after failed** are checked.

FastCron will send you a message when a cronjob in your account fails, and when it succeeds again.