---
title: 'Repeat cron job execution'
description: "Rerun cron job when/until its output matches a word."
pubDate: 'Apr 22, 2024'
---

You can make your cron job repeat itself after an execution.
You can test if the script output matches a predefined string e.g. `processing`.
FastCron will repeat the cronjob up to 50 times.

This will reduce the load on servers running unnecessary tasks when there is no need for repetition.

To enable this on your cronjob, in the section `Failures and retry`, update the field `Repeat if contains` and `Repeat up to`.

The feature is available for all premium plans.
