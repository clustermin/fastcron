---
title: How to set up cronjob for EasyDiscuss
---


Follow these steps to set up cronjob your Joomla component
<a href="http://stackideas.com/easydiscuss?ref=fastcron.com" target="_blank" rel="nofollow">EasyDiscuss</a>:

- [Log in to FastCron](https://app.fastcron.com/login).
- Click the new Cron Job button.
- Paste the cronjob URL (replace `https://example.com` with your Joomla site URL) to **URL to call**
```
https://example.com/index.php?option=com_easydiscuss&task=cron
```
- Select **When to call: Every 5 minutes**.
- Click **Save & run**.

And that's it.

FastCron will run your cronjob for free, no monthly login required.