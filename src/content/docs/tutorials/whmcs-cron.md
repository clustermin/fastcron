---
title: How to set up cronjobs for WHMCS
---

Follow this step-by-step to set up cronjobs for <a href="https://www.whmcs.com/?ref=fastcron.com" rel="nofollow" target="_blank">WHMCS</a>:
- [Log in to FastCron](https://app.fastcron.com/login),
- Click the new **Cron job** button.
- Enter this cronjob URL into the **URL to call** field (replace `example.com` with your WHMCS URL)
```sh
https://example.com/crons/cron.php
```
- Select **When to call: Every day**, then **Save** and run your cronjob

And that's it.

FastCron will run your cronjob for free, no monthly login required.