---
title: Why was my cron job disabled?
description: Your free cron job will be disabled after 150 consecutive failures.
---

Your cron job will fail when your web server is down/unreachable, or it returns an HTTP status code other than 2xx (200 - 204).

When your cron job fails **100** consecutive times, we will back off linearly:
- After 100 consecutive failures, we remove the next queued execution.
- After 101 consecutive failures, we remove the next 2 queued executions.
- After 102 consecutive failures, we remove the next 3 queued executions.
- ...

Queued executions with [`payload`](/reference/cron#cron_run) won't be removed.

In the **free plan**, cron jobs will be disabled after **150** consecutive failures.