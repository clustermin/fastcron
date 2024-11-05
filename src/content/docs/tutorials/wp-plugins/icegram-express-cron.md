---
title: How to set up cronjob for Icegram Express
---

To set up cronjob for the WordPress plugin
<a href="https://wordpress.org/plugins/email-subscribers/" target="_blank" rel="nofollow">Icegram Express</a> - 
Email Subscribers, Newsletters and Marketing Automation,
follow the instructions below:

- Log in to your WordPress dashboard
- Visit Icegram Express > Settings > Email Sending, copy the **Cron URL**
![Cron URL from Icegram Express](/screenshots/wordpress/email-subscribers.png)
- [Log in](https://app.fastcron.com/login) to your FastCron account
- Click the new **Cron Job** button 
- Paste the Cron URL into the URL to call
 ```
https://example.com/?es=cron&guid=scxqdw-qvlbmt-wtcpml-xogplz-stdgub
 ```
- Select **When to call: Every 5 minutes**
- Click Save & run.

And that's it.

FastCron will run your cronjob every 5 minutes for free.

If you have a premium account, you should run it every minute or faster.