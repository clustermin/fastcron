---
title: How to set up cronjob for BackWPup plugin
---

Follow these steps to set up cronjob your BackWPup plugin:

- Log in to your WordPress dashboard.
- Click **BackWPup** > **Jobs**, *Add new* or *Edit* an existing job.
- Switch to the tab **Schedule**, select **Start job: with a link**, then copy the cronjob URL, then click **Save changes**.
![Start job with a link](/screenshots/wordpress/backwpup.png)
- [Log in to FastCron](https://app.fastcron.com/login).
- Click the new Cron Job button.
- Paste the cronjob URL to **URL to call**
```
https://example.com/wp-cron.php?_nonce=SECRET&backwpup_run=runext
```
- Select **When to call: Every day**.
![Set cronjob](/screenshots/wordpress/backwpup-fastcron.png)
- Click **Save & run**.

And that's it.

FastCron will run your cronjob for free, no monthly login required.