---
title: How to set up cronjob for EasySocial
---


Follow these steps to set up cronjob your Joomla component
<a href="http://stackideas.com/easysocial?ref=fastcron.com" target="_blank" rel="nofollow">EasySocial</a>:

- Get the secure cronjob key at your component settings.
- [Log in to FastCron](https://app.fastcron.com/login).
- Click the new Cron Job button.
- Paste the cronjob URL (replace `https://example.com` with your Joomla site URL) to **URL to call**
```txt "CRON_KEY"
https://example.com/index.php?option=com_easysocial&cron=true&phrase=CRON_KEY
```
- Select **When to call: Every 5 minutes**.
- Click **Save & run**.

And that's it.

FastCron will run your cronjob for free, no monthly login required.