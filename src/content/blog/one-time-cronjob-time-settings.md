---
title: 'One-time cronjob time settings'
description: "If you're setting cronjobs to run once at a specific time, please ensure that it's at least 15 seconds into the future."
pubDate: 'Oct 17 2023'
---

In the background, FastCron generates queued executions every 5 seconds. It also loads your cronjobs *3-5 seconds* before the scheduled time to send to the cron servers and execute at the exact time. 

For example, if it's 09:01:33, please set it to run after 09:01:47.

FastCron will now automatically adjust the scheduled time by 15 - 20 seconds if you set it to run too close to the present.

Also, as FastCron loads cronjob every 5 seconds, the scheduled time will be changed to the nearest available second value. In the example above, your cronjob will be scheduled to run at 09:01:50 instead of 09:01:47.

I hope this helps.