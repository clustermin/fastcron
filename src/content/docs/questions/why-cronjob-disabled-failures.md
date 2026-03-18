---
title: Why was my cronjob disabled?
description: Your cronjob will be disabled after a failure threshold.
---

Your cronjob will fail when your web server is down/unreachable, or it returns an HTTP status code other than 2xx (200 - 204).

It will be disabled after a failure threshold.
The default failure threshold is **50** consecutive failures in the free plan.
**Pro** users can set it to **0** (**never disable**) or up to **1000** in the section **Failures, retry, and repeat** when adding/editing cronjobs.

You will receive a [cron notification](/integrations) (via email, Slack, or webhook) when your cronjob was disabled because of failures.

When your cronjob fails half the failure threshold, we will back off linearly.
For example, with a failure threshold of **50**:
- After 25 consecutive failures, we remove the next queued execution.
- After 26 consecutive failures, we remove the next 2 queued executions.
- After 27 consecutive failures, we remove the next 3 queued executions.
- ...
- After 49 consecutive failures, we remove the next 24 queued executions.
- After **50** consecutive failures, we disable your cronjob.

Queued executions with [`payload`](/reference/cron#cron_run) won't be removed.

This way FastCron won't hitting your failing cronjobs repeatedly and overloading your server with unnecessary requests.