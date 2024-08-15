---
title: How to set up cronjob for Mailster
---

<a href="https://mailster.co/?ref=fastcron.com" target="_blank" rel="nofollow">Mailster</a>
is a WordPress newsletter plugin. It requires a cronjob to send scheduled emails to your subscribers.

To set up cronjob for your Mailster plugin, follow these instructions:

- Log in to your WordPress dashboard
- Visit Newsletter > Settings > Cron, switch to **Use a real cron to send newsletters**
- Copy the Mailster cron URL, then click **Save Changes**.
![Mailster settings](/screenshots/wordpress/mailster.png)
- Try visiting the cron URL with your browser to confirm it's okay.
- [Log in to FastCron](https://app.fastcron.com/login).
- Click the new Cron Job button
- Enter the mailster URL into the **URL to call** field
- Select **When to call: Every 5 minutes**
- Click **Save & run**.

And that's it.

FastCron will run your cronjob for free, no monthly login required.

If you have a [premium plan](/pricing), you should run your cronjob every minute.