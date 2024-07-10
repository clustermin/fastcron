---
title:  Will my cronjobs overlap?
description: Your cronjobs on your server will overlap. FastCron can help with that!
---

Yes, similar to your hosting's cron jobs, your script will overlap.

If you create a cron job to run every minute, and your script takes more than 1 minute to complete, it'll overlap. There will be 2 instances running at the same time.

To prevent overlapping, FastCron supports [Max instances](/blog/max-instances).