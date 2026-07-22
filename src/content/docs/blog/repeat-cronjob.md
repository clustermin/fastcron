---
title: 'Repeat cronjob execution'
description: "Rerun cronjob when/until its output matches a word."
pubDate: 'Apr 22, 2024'
---

You can make your cronjob repeat itself after an execution.
You can test if the script output matches a predefined string e.g. `processing`.
FastCron will repeat the cronjob up to 10,000 times.

This will reduce the load on servers running unnecessary tasks when there is no need for repetition.

To enable this on your cronjob, in the section `Failures, retry, and repeat`, update the field `Repeat if contains` and `Repeat up to`.
![Repeat cronjob](/screenshots/repeat.png)

This will increase the daily execution number of the cronjob.

The feature is available for all premium plans.
