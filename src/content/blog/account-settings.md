---
title: 'Account settings'
description: "I've added a new tab to change the default cronjob settings."
pubDate: 'Oct 26, 2023'
---

You can now change:
- Default timezone, which is also account timezone.
- Cron server, if you'd like to run cronjobs from a specific server IP
- Auto delete stopped cronjobs
- Auto delete failed cronjobs
- Auto add `__random__` to cron job URLs to bypass cache.

![account-settings](https://updote.nyc3.cdn.digitaloceanspaces.com/attachment/FastCron/account-settings-6549b4d5b45f71.89608691.png)


**For new users only**: FastCron will now automatically delete stopped cronjobs after 30 days, and failed cronjobs  365 days. You can change it on the account settings page.