---
title: 'How to run cron job every 10 seconds'
description: 'You can run cronjobs every 10 seconds using Unix crontab or FastCron service.'
pubDate: Sep 30 2023
---

If you are using the **Cron Jobs** feature from your hosting or your server `crontab`,
you can run cronjob every 10 seconds by setting up **6 cronjobs** running every minute, the second one with a 10-second delay:

<pre>
* * * * * curl https://example.com/cron.php
* * * * * sleep 10 && curl https://example.com/cron.php
* * * * * sleep 20 && curl https://example.com/cron.php
* * * * * sleep 30 && curl https://example.com/cron.php
* * * * * sleep 40 && curl https://example.com/cron.php
* * * * * sleep 50 && curl https://example.com/cron.php
</pre>

Now your `cron.php` will run every 10 seconds.

Alternatively, you can also create a cronjob which will run your task 6 times sequentially:
<pre>
* * * * * /bin/bash -c 'for i in {1..6}; do curl https://example.com/cron.php; sleep 10; done'
</pre>
However, it doesn't take into account your cronjob execution time.

## An easier way to run cron every 10 seconds
**FastCron** is the best tool to run your cronjob every 10 seconds.
You just need to create **one cronjob**, and you'll get:

- Full cron logs including starting time, total time, script output, etc.
- Email/Slack/Discord notifications when your cronjob fails or backs up again.
- A nice simple interface for you and your team.
- and many more features.

[Try it free for 7 days](https://app.fastcron.com/signup) now, no credit card required.