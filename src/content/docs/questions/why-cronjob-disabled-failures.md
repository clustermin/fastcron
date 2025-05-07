---
title: Why was my cronjob disabled?
description: Your cronjob will be disabled after a failure threshold.
---

Your cronjob will fail when your web server is down/unreachable, or it returns an HTTP status code other than 2xx (200 - 204).

It will be disabled after a failure threshold.
The default failure threshold is 20 consecutive failures.
You can update it in the section **Failures, retry, and repeat** when adding/editing cronjobs.

You will receive a [cron notification](/integrations) (via email, Slack, or webhook) when your cronjob was disabled because of failures.

When your cronjob fails half of the threshold, we will back off linearly.
For example, with a failure threshold of 20 consecutive failures:
- After 10 consecutive failures, we remove the next queued execution.
- After 11 consecutive failures, we remove the next 2 queued executions.
- After 12 consecutive failures, we remove the next 3 queued executions.
- ... 
- After 19 consecutive failures, we remove the next 9 queued executions.
- After 20 consecutive failures, we disable your cronjob.

The removed queued executions must be within:
  - 1 day if your cronjob runs 4 times a day or less
  - 3 hours if your cronjob runs 24 times a day or less
  - 1 hour otherwise

For example, your web server is down, and your cronjob every minute keeps failing.
After 10 minutes - 10 consecutive failures, it will skip one minute, then 2 minutes, then 3 minutes, ..., then 9 minutes.
It will be disabled after a continuous downtime of 70 minutes.

This way FastCron won't hitting your failing cronjobs repeatedly and overloading your server with unnecessary requests.