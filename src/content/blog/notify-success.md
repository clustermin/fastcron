---
title: 'Notify when cronjob succeeds after failed'
description: "Send email/Slack notifications when your cronjob succeeds after it failed before."
pubDate: 'March 25, 2024'
---
Hi,

I've added a new feature to enable email/Slack notifications when your cronjob succeeds after it failed before.

It's enabled by default for new cronjobs.

To enable it, edit (or batch edit) your cronjobs, at the section Notifications, check the box **Notify me: when cronjob fails**, and **when cronjob succeeds after failed**.

![notify](/images/notify-6600f396b585b9.67961961.png)

After that, when your cronjob fails, you'll receive an email/Slack notification. When your cronjob is okay again, you'll receive another message.

Notifications for several cronjobs may be combined into a single email, i.e. you may receive one failure notification for several cronjobs, and then one success notification for several cronjobs.

Slack messages won't be combined. You'll receive a separate Slack message for each cronjob.

Webhook requests are only sent for failed executions.

By default, FastCron **always** sends email/Slack notifications when your cronjobs are disabled because of multiple consecutive failures, and another message when they're okay again.