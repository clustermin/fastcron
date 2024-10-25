---
title: 'Notify when cronjob output contains a word'
description: You can receive email, Slack, Discord notifications when your cronjob output does/doesn't contain a word
pubDate: 'Oct 25, 2024'
---

By default, FastCron will send you a notification when your cronjob fails.
The notifications will be sent to your email, your team members' emails (if you or them enable it),
and your notification channels (Slack, Discord, Telegram, etc).

Now you can also receive notification when your cronjob output does/doesn't contain a word.
To do so, when adding/editing cronjobs, click the section **Notifications**, enter the word into
**Notify if contains**.
If you prepend the word with `!`, then it will notify you if the output doesn't contain the word.

FastCron won't combine cron notifications when sending via channels.

However, we will merge notifications into a single email and send it to you after 1 - 10 minutes.
The email subject will be 
- `Cronjob fails` if one of the notifications is a failure, 
- `Cronjob alert` if one of them is output matched,
- `Cronjob okay` if all of them are successful.

If you have any questions, please email me at support@fastcron.com.