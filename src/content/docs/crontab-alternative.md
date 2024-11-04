---
title: FastCron vs Unix crontab
description: "Compared to Unix crontab, FastCron is simple, easy to understand, and developer friendly."
---

Most hosting providers have the **Cron Jobs** feature in their control panel.
It offers a simple interface to run cronjobs via the Unix `crontab`.

## Unix crontab

Using crontab in Unix systems comes with several advantages and disadvantages. Here’s a breakdown:

Pros:
- You can use your server/hosting cronjobs for **free**.
- Simple enough to learn and set up cronjob using simple crontab expressions.
- You can use other system functions (`date`, `sleep`, etc).
- If you run your cronjobs via CLI (e.g. `php /path/to/cron.php`) then it saves server resources.

Cons:
- Some hosting providers have a limit on cron frequency (e.g. only every 15 minutes or slower).
- You must give your team **access to your hosting** or servers to set cronjobs.
- Advanced cron expressions are much harder, and you won't know when your cronjob executes.
- It uses the **server timezone**, so tasks may run at unexpected times.
- Hard to debug and check script output, so sometimes your **cronjobs fail silently**.
- Crontab can be less intuitive compared to other scheduling tools due to the lack of graphical user interface.

Due to several limitations of Unix crontab, many software teams are using a [web cron service](/) like **FastCron**.

## FastCron service

FastCron is a simple, fast, and free cronjob service for professional website developers. It offers several features:

- **Cron expression**: FastCron supports both standard cron expressions like `*/5 * * * *` and simple patterns like `5 minutes`. Also, check out the [time filter](/blog/time-filter) to match both the day of the week and the day of the month.
- **Custom timezone** for your cronjobs. FastCron also calculates **daylight saving time** (DST) to ensure that your cronjob executes on time.
- **Cronjob management**: you can disable, enable, and run cronjob easily with just one click.
- **Queued executions**: know when your cronjob will execute.
- **Cron logs**: see the full history of cronjob executions, including starting time, total execution time, HTTP status, and output.
- Email/Slack/webhook **notifications** when cronjob fails and succeeds.
- **Team access**: allows your team member to create, run, and manage their own cronjobs.
- **Retry** failed cronjob executions.
- [**Repeat**](/blog/repeat-cronjob) cronjob executions until/when its output matches a word.
- [**Max instances**](/blog/max-instances): prevent overlapping or allow up to 5 overlapping executions.
- [**API access**](/reference): create, run, and delete your cronjob programmatically.

However, there are some drawbacks when using a web cron service:
- If your web server software is down, your cronjobs won't run.
- If your scripts take a long time to run, it will occupy your web server connections. It's best to use single instance if you don't want your cronjob to overlap.
- It's an external service. You should whitelist our [IP addresses](/ip-addresses), add authentication and authorization (e.g. via a secret cron key or password).

## The best crontab alternative

Not satisfied with the command line and limited features?
Join other 8000 developers and use an external cron service like **FastCron**.