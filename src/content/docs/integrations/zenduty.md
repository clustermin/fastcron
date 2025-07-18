---
title: Zenduty integration
description: "Receive cron notifications to your Zenduty account when your cronjobs fail or succeed."
---

You can get Zenduty incident notifications when your cronjobs fail.
FastCron also resolves the incidents when the cronjobs succeed again.

To set up integration from FastCron to your Zenduty account, follow the instructions below:

## Create an API integration at Zenduty
- Log in to your Zenduty account.
- Visit **Teams** > **Services**, click **Add new Service**.
![Add new service](/screenshots/zenduty/step1-services.png)
- Create a service with the name FastCron
![FastCron](/screenshots/zenduty/step2-fastcron.png)
- Add integration type API
![API integration](/screenshots/zenduty/step3-integration.png)

Now you'll get an integration key that allows FastCron to create and resolve incidents in your Zenduty account.

## Add it to your account Channels

- Click the tab **Channels** on your account dashboard.
- Click **Add channel** >  **Zenduty**.
- Paste the webhook URL, then **Save**.

The webhook URL must contain the integration key above like this:
```txt "INTEGRATION_KEY"
https://www.zenduty.com/api/events/INTEGRATION_KEY/
```

## Enable notifications for your cronjobs
FastCron enables notifications for your cronjobs by default.

To check it, edit cronjobs, in the section **Notifications**,
ensure the **Notify me: when cronjob fails**, and **when cronjob succeeds after failed** are checked.

FastCron will create an incident when a cronjob in your account fails, and resolves when it succeeds again.