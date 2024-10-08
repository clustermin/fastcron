---
title: Cron expression and time expression
draft: true
sidebar:
  label: Cron expressions
---

FastCron accepts both

- standard **cron expression** like `*/5 * * * *`
- simple **time expression** like `5 minutes`.

It will automatically check the expression and calculate next execution times for you.

## Crontab expression

The standard crontab expression consists of 5 fields:

```
minute hour day month weekday
```

| Field   | Allowed values  | Allowed special characters |
| ------- | --------------- | -------------------------- |
| Minute  | 0..59           | `*/,-R`                    |
| Hour    | 0..23           | `*/,-R`                    |
| Day     | 1..31           | `*/,-L`                    |
| Month   | 1..12           | `*/,-`                     |
| Weekday | 1..7 (Mon..Sun) | `*/,-`                     |

You can list all values for a field using commas like `1,2,3`, or using range like `1-3`.

| Cron expression | Time expression | When to run     |
| --------------- | --------------- | --------------- |
| `* * * * *`     | `1 minute`      | Every minute    |
| `*/5 * * * *`   | `5 minutes`     | Every 5 minutes |
| `7 * * * *`     | `1 hour`        | Every hour      |
| `7 8-16 * * *`     |        | Every hour from 8:07 to 16:07      |
| `7 */2 * * *`     | `2 hours`        | Every 2 hours      |
| `7 8-16/2 * * *`     |        | Every 2 hour from 8:07 to 16:07      |