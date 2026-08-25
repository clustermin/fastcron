---
title: 'How to run cron job every 15 seconds'
description: 'You can run cronjobs every 15 seconds using Unix crontab or FastCron service.'
pubDate: August 25, 2026
---

If you are using the **Cron Jobs** feature from your hosting or your server `crontab`,
you can run cronjob every 15 seconds by setting up **4 cronjobs** running every minute, with 15-second delay:

<pre>
* * * * * curl https://example.com/cron.php
* * * * * sleep 15 && curl https://example.com/cron.php
* * * * * sleep 30 && curl https://example.com/cron.php
* * * * * sleep 45 && curl https://example.com/cron.php
</pre>

Now your `cron.php` will run every 15 seconds.

Alternatively, you can also create a cronjob which will run your task 4 times sequentially:
<pre>
* * * * * /bin/bash -c 'for i in {1..4}; do curl https://example.com/cron.php; sleep 15; done'
</pre>
However, it doesn't take into account your cron job execution time.

## An easier way to run cron every 15 seconds
**FastCron** is the best tool to run your cronjob every 15 seconds.
You just need to create **one cronjob**, and you'll get:

- Full cron logs including starting time, total time, script output, etc.
- Email/Slack/Discord notifications when your cronjob fails or backs up again.
- A nice simple interface for you and your team.
- and many more features.

[Start 14-day free trial](https://www.fastcron.com/signup), no credit card required.