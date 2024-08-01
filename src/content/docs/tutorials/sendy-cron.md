---
title: How to set up cronjobs for Sendy.co
sidebar:
  label: Sendy cron
  order: 4
---

<a href="https://sendy.co/?ref=fastcron.com" rel="nofollow" target="_blank">Sendy</a> is a self-hosted  email newsletter application
that lets you send bulk emails via Amazon Simple Email Service (SES).

After installing Sendy on your server, you'll need to set up 2 cron jobs for scheduled emails and auto-responders.

Follow this step-by-step to set up cronjobs for free:
- [Log in to FastCron](https://app.fastcron.com/login),
- Click the new **Cron job** button.
- Enter this cronjob URL into the **URL to call** field (replace `example.com/sendy` with your Sendy URL)
```sh
https://example.com/sendy/scheduled.php
```
- Select **When to call: Every 5 minutes**, then **Save** and run your cronjob

- Click the new **Cron job** button again
- Enter this cronjob URL into the **URL to call** field:
```sh
https://example.com/sendy/autoresponders.php
```
- Select **When to call: Every 5 minutes**, then **Save** and run your cronjob

And that's it.

FastCron will run your cronjob for free, no monthly login required.

If you're on a [premium plan](/pricing), you can run both cronjobs every minute.