---
title: Cron expression and time expression
sidebar:
  label: Cron expressions
---

FastCron accepts both

- standard **cron expressions** like `*/5 * * * *`
- simple **time expressions** like `5 minutes`.

It will automatically check the expression and calculate the next execution times.

## Crontab expression

The standard crontab expression consists of 5 fields:

```
minute hour day month weekday
```

| Field     | Allowed values  | Allowed special characters |
| --------- | --------------- | -------------------------- |
| `minute`  | 0..59           | `*/,-R`                    |
| `hour`    | 0..23           | `*/,-R`                    |
| `day`     | 1..31           | `*/,-L`                    |
| `month`   | 1..12           | `*/,-`                     |
| `weekday` | 1..7 (Mon..Sun) | `*/,-`                     |

There are multiple ways to set the values for each field:

- Use `*` to select all allowed values
- Use `*/n` to select all values with a step number `n`
  - `*/5` in the `minute` field will select from `0`, `5`, `10`, to `55`
  - `*/2` in the `day` field will select from `1`, `3`, `5`, to `27`, `29`, `31`
- List all values with commas `1,2,3,4,5,6,7`
- Use a simple range like `1-7`
- Use a simple range with a step like `1-7/2`
- Use `L` at the `day` field to select **the last day of the month**
- Use `R` to select **one random value**, `Rn` to select `n` random value
- Use `R,values` to select one random value from a list e.g. `R,1-7` will select one random value from 1 to 7.

Your cronjob will run when the current time matches **ALL** the fields of the cron expression.
For example, cronjob with the expression `30 7 * 10 Mon` will run in October, every Monday at 07:30.

If you select specific value(s) for both the `day` and `weekday` fields, it will run when the current time matches **EITHER** values.
For example, `30 7 15 10 Mon` will run **in October, at 07:30 every Monday** AND **at 07:30 Oct 15**.
You may want to use the cron expression `30 7 * 10 Mon` with the [time filter](/blog/time-filter) `day == 15` to run only Monday, Oct 15.

If you'd like to run a cronjob at a specific time, see [one-time cronjobs](/guides/one-time-cronjobs).

Due to the limitation of the time values, some cron expressions are impossible (time never matches),
some time intervals e.g. _every 48 minutes_ are not available,
and some time interval can't match perfectly e.g. every 2 days.
You should try using the [time expression](#time-expression) to fit your requirements.

Here are some popular cron expressions:

| Expression     | Meaning                         |
| -------------- | ------------------------------- |
| `* * * * *`    | Every minute                    |
| `*/2 * * * *`  | Every 2 minutes                 |
| `*/5 * * * *`  | Every 5 minutes                 |
| `*/10 * * * *` | Every 10 minutes                |
| `*/15 * * * *` | Every 15 minutes                |
| `*/30 * * * *` | Every 30 minutes                |
| `5 * * * *`    | Every hour                      |
| `5 */2 * * *`  | Every 2 hours                   |
| `5 */3 * * *`  | Every 3 hours                   |
| `5 */4 * * *`  | Every 4 hours                   |
| `5 */6 * * *`  | Every 6 hours                   |
| `5 */8 * * *`  | Every 8 hours                   |
| `5 0,12 * * *` | Twice a day                     |
| `5 7 * * *`    | Every day                       |
| `5 7 */2 * *`  | Every 2 days / Every other day  |
| `5 7 */3 * *`  | Every 3 days                    |
| `5 7 * * 1`    | Every week, on Monday at 07:05  |
| `5 7 15 * *`   | Every month, on day 15, at 7:05 |

## Time expression

FastCron also supports simple time expressions like `5 minutes` or `next Friday 7:05 PM`.

Internally, it uses the PHP function
<a href="https://www.php.net/manual/en/function.strtotime.php" target="_blank" rel="nofollow">`strtotime`</a>.
It works by calculating the next execution times based on the current execution time.

If you enter a specific time e.g. `Oct 16, 2024 07:50 PM', then it will [run only once](/guides/one-time-cronjobs).

Here are some popular time expressions:

| Expression                      | Meaning                                |
| ------------------------------- | -------------------------------------- |
| `10 seconds`                    | Every 10 seconds                       |
| `30 seconds`                    | Every 30 seconds                       |
| `1 minute`                      | Every minute                           |
| `5 minutes`                     | Every 5 minutes                        |
| `14 minutes`                    | Every 14 minutes                       |
| `1 hour`                        | Every hour                             |
| `7 hours`                       | Every 7 hours                          |
| `1 day`                         | Every day                              |
| `1 day 17:05`                   | Every day at 17:05                     |
| `2 days`                        | Every 2 days                           |
| `2 days 17:05`                  | Every 2 days at 17:05                  |
| `next Friday 17:05`             | Every week, on Friday at 17:05         |
| `2 weeks Friday 17:05`          | Every 2 weeks, on Friday at 17:05      |
| `1 month 17:05`                 | Every month at 17:05                   |
| `first day of next month 17:05` | Every first day of the month, at 17:05 |
| `last day of next month 17:05`  | Every last day of the month, at 17:05  |

If you need help choosing the right cron expression, [email me](mailto:support@fastcron.com) and I'll help.
