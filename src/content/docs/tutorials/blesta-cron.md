---
title: How to set up cronjobs for Blesta
---

Follow this step-by-step to set up cronjobs for <a href="https://www.blesta.com/?ref=fastcron.com" rel="nofollow" target="_blank">Blesta</a>:
- Copy *cron key* at Settings > System > Automation
- [Log in to FastCron](https://app.fastcron.com/login)
- Click the new **Cron job** button.
- Enter this cronjob URL into the **URL to call** field (replace `example.com` with your Blesta URL)
```txt 'YOUR_CRON_KEY'
https://example.com/?cron_key=YOUR_CRON_KEY
```
- Select **When to call: Every 5 minutes**, then **Save** and run your cronjob

And that's it.

FastCron will run your cronjob for free, no monthly login required.