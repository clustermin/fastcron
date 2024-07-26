---
title: 'Time filter'
description: 'Filter scheduled executions to match both the day of the week and the day of the month'
pubDate: 'Oct 14, 2023'
---

By default, the crontab uses OR when the day of the week and day of the month are specified.

For, example, `7 0 12 * Fri` will run your cronjob at 00:07 on Friday OR on day 12 of each month.

![dow-or-dom](/images/dow-or-dom-652a0cc3b0aa72.58415039.png)

It would be impossible to require matching of both the day of the week and the day of the month using either crontab syntax or time expression.

For example, run cronjobs on Friday the 12th, or run on Tuesday and Wednesday from day 10 to day 20.

To solve this, FastCron now supports the Time filter.

![filter](/images/filter-652d4716276cc6.72055909.png)
To show the Time filter, click on the Filter button.

It supports simple expressions with 5 variables:
- `minute`: integer, from 0 to 59
- `hour`: integer, from 0 to 23
- `day`: integer, from 1 to 31
- `month`: integer, from 1 to 12
- `weekday`: string, including `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, and `Sun`

It supports a lot of operators. See the [full list here](https://symfony.com/doc/current/reference/formats/expression_language.html#supported-operators).

Here are some examples for you:
- Run on Friday the 12th, at 8:00: set the expression to `1 day 8:00` (or `0 8 * * *`) and the filter to `day == 12 and weekday == 'Fri'`
- Run only on Tuesday and Wednesday, from day 10 to 20: `(weekday == 'Tue' or weekday == 'Wed') and day >= 10 and day <= 20` or `weekday in ['Tue', 'Wed'] and day >= 10 and day <= 20`

This feature is available in all premium plans.