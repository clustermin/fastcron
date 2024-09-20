---
title: Bypass your website cache by adding timestamps
sidebar:
  label: Random keywords
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

You can head to the 
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" style="display: inline-block"
      viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M8 15h7.01v.01H15L8 15Z"/>
    <path stroke="currentColor" stroke-linecap="square" stroke-width="2"
          d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"/>
    <path stroke="currentColor" stroke-linecap="square" stroke-width="2"
          d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z"/>
</svg>
**Environment variables** page, and add your own keywords/variables.
For example, if you add a variable named `token` with the value `SECRET`, you can use `__token__` in all your cronjobs, POST data, and payload.

Use it when:
- you don't want to share secrets with your team members.
- you want to change it once and apply it to all cronjobs.

## Auto update cronjob URLs

You can let us automatically add the `__timestamp__` keyword to your cronjob URLs on the Account settings page.

![Account settings](/screenshots/account-settings.png)

When FastCron detects website cache, it will update your cronjob URLs.