---
title: Webhook integration
description: "Receive cron notifications via webhook when your cronjobs fail or succeed."
sidebar:
    label: Webhook
---

You can get webhook notifications when your cronjobs fail and succeed again.

To set up integration from FastCron to a custom webhook URL, follow the instructions below:

## Add your webhook URL to Channels

- Click the tab **Channels** on your account dashboard.
- Click **Add channel** >  **Webhook**.
- Paste the webhook URL, then **Save**.

## Enable notifications for your cronjobs
FastCron enables notifications for your cronjobs by default.

To check it, edit cronjobs, at the section **Notifications**,
ensure the **Notify me: when cronjob fails**, and **when cronjob succeeds after failed** are checked.


## Webhook payload

FastCron will send a POST request to your URL when a cronjob in your account fails, and when it succeeds again.

The POST payload looks like this:
```json
{
  "output": "<!doctype html>\n<html>\n ... </html>\n",
  "downloaded": 1256,
  "httpStatus": 404,
  "error": "",
  "ip": "93.184.215.14",
  "source_ip": "app1",
  "time": 1720409270,
  "executionTime": 0.02,
  "status": 1,
  "message": "fails",
  "id": 16910124,
  "name": null,
  "url": "https://example.com/404",
  "group": ""
}
```

If the cronjob succeeds again, the `$.status` will be `0` instead of `1`.



