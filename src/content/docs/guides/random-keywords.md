---
title: Bypass your website cache by adding a random string
sidebar:
  label: Random keywords
---

Your web server may cache your script output, rendering online cronjob ineffective.
You should add a random string to your cronjob URL using the keyword `__random__`.

For example, you set up a cronjob with the URL to call

```txt "__random__"
https://example.com/cron.php?__random__
```
or
```txt "__random__"
https://example.com/cron.php?name=value&__random__
```

Every time your cronjob runs, the `__random__` keyword will be replaced with a random string:
```txt "oHJXpSbyDMZDEnBJ"
https://example.com/cron.php?oHJXpSbyDMZDEnBJ
```
or
```txt "oHJXpSbyDMZDEnBJ"
https://example.com/cron.php?name=value&oHJXpSbyDMZDEnBJ
```

## Supported keywords
FastCron supports 4 keywords:
- `__random__` will be replaced with a random string
- `__timestamp__` will be replaced with the scheduled execution time (Unix timestamp)
- `__timestamp_ms__` will be replaced with the scheduled execution time (Unix timestamp in milliseconds)
- `__cronjob__` will be replaced with the cronjob ID

You can also add those keywords to your [`postData`](/reference/cron#cron_add) or [`payload`](/reference/cron#cron_run) when using HTTP method POST, PUT, or PATCH.

## Auto add random strings to URLs
You can let us automatically add the `__random__` keyword to your cronjob URLs on the Account settings page.

![Account settings](/screenshots/account-settings.png)