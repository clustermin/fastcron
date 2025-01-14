---
title: Adding timestamps to bypass cache
sidebar:
    label: Keywords / Variables
---

Your web server may cache your script output, rendering online cronjob ineffective.
You should add `__timestamp__` to your cronjob URL to bypass website cache.

For example, you set up a cronjob with the URL to call

```txt "__timestamp__"
https://example.com/cron.php?__timestamp__
```
or
```txt "__timestamp__"
https://example.com/cron.php?name=value&__timestamp__
```

Every time your cronjob runs, the `__timestamp__` keyword will be replaced with a Unix timestamp:
```txt "1725456136"
https://example.com/cron.php?1725456136
```
or
```txt "1725456136"
https://example.com/cron.php?name=value&1725456136
```

## Supported keywords
FastCron supports 3 keywords:
- `__timestamp__` will be replaced with the scheduled execution time (Unix timestamp)
- `__timestamp_ms__` will be replaced with the scheduled execution time (Unix timestamp in milliseconds)
- `__cronjob__` will be replaced with the cronjob ID

You can also add those keywords to your [`postData`](/reference/cron#cron_add) or [`payload`](/reference/cron#cron_run) when using HTTP method POST, PUT, or PATCH.

## Bring your own variables

You can head to the **Variables** page, and add your own keywords/variables.
For example, if you add a variable named `token` with the value `SECRET`, you can use `__token__` in all your cronjobs, POST data, and payload.

Use it when:
- you don't want to share secrets with your team members.
- you want to change it once and apply it to all cronjobs.

## Auto update cronjob URLs

You can let us automatically add the `__timestamp__` keyword to your cronjob URLs on the Account settings page.

![Account settings](/screenshots/account-settings.png)

When FastCron detects website cache, it will update your cronjob URLs.