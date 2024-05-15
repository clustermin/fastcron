---
title: 'Max instances / overlapping executions'
description: "You can allow from zero to 5 overlapping executions by adjusting the Max instances."
pubDate: 'Dec 01, 2023'
---

FastCron runs cronjobs at the scheduled times by default, regardless of ongoing executions. If a cronjob takes more time to run than its interval, it leads to overlapping executions.

Before, you could prevent cronjob executions from overlapping by enabling the Single instance feature.

Now, you can allow up to 5 overlapping executions by adjusting the Max instances:
![instances](https://updote.nyc3.cdn.digitaloceanspaces.com/attachment/FastCron/instances-656951686630c8.22472183.png)

The table below shows running executions when you allow up to 3 overlaps:
Time  | Running executions | Events
--- | --- | ---
1 | `1`
2 | `1`,`2`
3 | `1`,`2`,`3`
4 | `1`,`2`,`3` | `4` is skipped
5 |  `1`,`3`,`5` | `2` complete
6 | `3`, `5`, `6` | `1` is removed
7 | `3`, `5`, `6` | `7` is skipped
8 | `6`, `8` | `3` and `5` complete
9 | `9` | `6` and `8` complete

- When there are 3 running executions, new executions are skipped.
- When one execution is complete, another execution starts running.
- When you remove a running execution (visit the Running tab, delete a running execution), another execution starts running.

Please note that removing a running execution just deletes it from our database. The execution will continue to run until it's complete or timed out.

> API function `cron_add` and `cron_edit` update: `single` is deprecated, please use `instances` instead.