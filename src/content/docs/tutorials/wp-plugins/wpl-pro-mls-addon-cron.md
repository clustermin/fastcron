---
title: How to set up cronjobs for WPL Pro plugin
---


Follow the step-by-step instruction below to set up cronjobs for the **WPL Pro plugin** with **MLS add-on**.

First, [log in to FastCron](https://app.fastcron.com/login). Then, set up these 4 cronjobs:

## Cronjob #1
- Click the new Cron Job button
- Enter this URL (replace `example.com` with your blog URL) into the **URL to call** field
```
https://example.com/?rets_cron_job=1&rets_cron_job_type=offline&time=__timestamp__
```
- Select **When to call: Every 12 hours**
- Click **Save & run**.

## Cronjob #2
- Click the new Cron Job button
- Enter this URL into the **URL to call** field
```
https://example.com/?rets_import_cron_job=1&time=__timestamp__
```
- Select **When to call: Every 5 minutes**
- Click **Save & run**.

## Cronjob #3
- Click the new Cron Job button
- Enter this URL into the **URL to call** field
```
https://example.com/?rets_purge_cron_job=1&time=__timestamp__
```
- Select **When to call: Every 15 minutes**
- Click **Save & run**.

## Cronjob #4
- Click the new Cron Job button
- Enter this URL into the **URL to call** field
```
https://example.com/?rets_import_images_cron_job=1&time=__timestamp__
```
- Select **When to call: Every 30 minutes**
- Click **Save & run**.



