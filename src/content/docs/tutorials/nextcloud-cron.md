---
title: How to set up cronjobs for Nextcloud
---

Follow this step-by-step to set up cronjobs for <a href="https://nextcloud.com/?ref=fastcron.com" rel="nofollow" target="_blank">Nextcloud</a>:
- [Log in](https://app.fastcron.com/login) to your FastCron account
- Click the new **Cron job** button
- Enter this cronjob URL into the **URL to call** field (replace `example.com/nextcloud/` with your Nextcloud URL)
```sh
https://example.com/nextcloud/cron.php
```
- Select **When to call: Every 2 minutes**
- Click **Save & run**.

And that's it.

FastCron will run your cronjob every minutes for free, no monthly login required.