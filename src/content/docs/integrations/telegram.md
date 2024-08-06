---
title: Telegram integration
description: "Receive cron notifications via Telegram when your cronjobs fail or succeed."
sidebar:
    label: Telegram
---

You can receive a message via Telegram when your cronjobs fail or succeed.

To set up integration from FastCron to your Telegram user, group, or channel, follow the instructions below:

## Add FastCronBot

**Direct messages**: If you want notifications sent to yourself directly, start a conversation with 
<a href="https://t.me/FastCronBot" target="_blank" rel="nofollow">FastCronBot</a>.

**Groups**: If you want notifications sent to a group, start by inviting FastCronBot to the group.
The bot will get added as a member with no access to group messages.

**Channels**: If you want notifications sent to a Telegram channel, add FastCronBot to the channel's **Administrators**.
Enable the **Post Messages** admin right, and disable all other admin rights.

## Get Chat ID

FastCron needs a chat ID to send the message. Start by sending `/start` message to FastCron.
FastCronBot will send a Chat ID so you can add it to your channel.

Please note that the Chat ID for group/channel has a minus sign e.g. `-1001234567`.

## Add it to your account Channels

- Click the tab **Channels** on your account dashboard.
- Click **Add channel** >  **Telegram**.
- Paste the **Chat ID**, then **Save**.

## Enable notifications for your cronjobs
FastCron enables notifications for your cronjobs by default.

To check it, edit cronjobs, at the section **Notifications**,
ensure the **Notify me: when cronjob fails**, and **when cronjob succeeds after failed** are checked.

FastCron will send you a message when a cronjob in your account fails, and when it succeeds again.