---
title: 'How to run cron job every 20 seconds'
description: 'You can run cronjobs every 20 seconds using Unix crontab or FastCron service.'
pubDate: 'Aug 16 2023'
---

If you are using the **Cron Jobs** feature from your hosting or your server `crontab`,
you can run cronjob every 20 seconds by setting up **3 cronjobs** running every minute, the second one with a 20-second delay:

<pre>
* * * * * curl https://example.com/cron.php
* * * * * sleep 20 && curl https://example.com/cron.php
* * * * * sleep 40 && curl https://example.com/cron.php
</pre>

Now your `cron.php` will run every 20 seconds.

## An easier way to run cron every 20 seconds
**FastCron** is the best tool to run your cronjob every 20 seconds.
You just need to create **one cronjob**, and you'll get:

- Full cron logs including starting time, total time, script output, etc.
- Email/Slack/Discord notifications when your cronjob fails or backs up again.
- A nice simple interface for you and your team.
- and many more features.

[Try it free for 7 days](https://app.fastcron.com/signup) now, no credit card required.