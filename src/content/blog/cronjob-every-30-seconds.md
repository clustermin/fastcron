---
title: 'How to run cron job every 30 seconds'
description: 'You can run cronjobs every 30 seconds using Unix crontab or FastCron service.'
pubDate: 'Jul 12 2020'
---

If you are using the **Cron Jobs** feature from your hosting or your server `crontab`, you can run cronjob every 30 seconds by setting up 2 cronjobs running every minute, the second one with a 30-second delay:

<pre>
* * * * * /path/to/script.sh
* * * * * sleep 30 && /path/to/script.sh
</pre>

Now your `script.sh` will run every 30 seconds.

## Tired of your subpar Cron Jobs?
FastCron is the best place to run your cronjob every 30 seconds. You just need to create **one cronjob**, and you'll get:

- Full cron logs including starting time, total time, script output, etc.
- Email notifications when your cronjob fails or backs up again.
- A nice simple interface for you and your team.
- and many more features.

[Give it a try](https://app.fastcron.com/signup) now, it's free!