---
title: Pushover integration
description: Receive cron notifications on Pushover devices when your cronjobs fail or succeed.
---

You can receive a message on Pushover when your cronjobs fail or succeed.

To set up integration from FastCron to your Pushover devices, follow the instructions below:

## Copy your user key

FastCron needs your user key to send the message.
After logging in to your Pushover account, you can get the user key.


## Add it to your account Channels

- Click the tab **Channels** on your account dashboard.
- Click **Add channel** >  **Pushover**.
- Paste the **user key**, then **Save**.

## Enable notifications for your cronjobs
FastCron enables notifications for your cronjobs by default.

To check it, edit cronjobs, in the section **Notifications**,
ensure the **Notify me: when cronjob fails**, and **when cronjob succeeds after failed** are checked.

FastCron will send you a message when a cronjob in your account fails, and when it succeeds again.