---
title: How to set up cronjobs for Arigato PRO Autoresponder
sidebar:
  label: Arigato PRO Autoresponder
---

Follow this step-by-step to set up cronjobs for 
<a href="http://calendarscripts.info/bft-pro/?ref=fastcron.com" target="_blank" rel="nofollow">Arigato PRO Autoresponder</a>:

- [Log in to FastCron](https://app.fastcron.com/login),
- Click the new **Cron job** button.
- Enter this cronjob URL into the **URL to call** field (replace `example.com/blog` with your WordPress URL)
```sh
https://example.com/blog/wp-content/plugins/arigato-pro/cron-start.php
```
- Select **When to call: Every 5 minutes**, then **Save** and run your cronjob

And that's it.

FastCron will run your cronjob for free, no monthly login required.