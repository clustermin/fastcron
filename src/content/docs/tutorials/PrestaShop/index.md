---
title: How to set up cronjob for PrestaShop Cron tasks manager
sidebar:
  label: PrestaShop cron
---

Follow this step-by-step to set up a cronjob for 
<a href="https://github.com/PrestaShop/cronjobs" target="_blank" rel="nofollow">PrestaShop Cron tasks manager</a>:

- Configure your module, set **Cron mode** to **Advanced**, then copy the cronjob URL:
```sh
https://example.com/shop/admin/index.php?controller=AdminCronJobs&token=******
```
- [Log in to FastCron](https://app.fastcron.com/login), click the new **Cron job** button.
- Enter the cronjob URL into **URL to call**.
- Select **When to call: Every 5 minutes**, then **Save** and run your cronjob

And that's it.

FastCron will run your cronjob for free, no monthly login required.