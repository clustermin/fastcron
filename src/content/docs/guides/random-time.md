---
title: Run cronjobs at random times
sidebar:
  label: Random time
---

You can run your cronjobs at random times with FastCron to:

- Spread your load evenly throughout the day.
- Do scheduled tasks (like sending emails, creating posts, etc) at a random time 
so they don't look like automated actions.

Anyway, we make it really simple for you to run your cronjobs randomly.

![Run cronjobs at random times](/screenshots/crontab-random-times.png)

## Run cronjob every day, at a random time
To run your cronjob once a day, at a random time, follow this instructions:

- Click new Cron Job
- Select **When to call: Every day**
- Click the **Crontab** button
- Select **Random** at both the **Minute** and **Hour** field
- Save your cronjob.

Your cronjob expression will be `R R * * *`.

You can now click the Logs button, then visit the Queued tab:

![Cron job runs at random times](/screenshots/queued-random-times.png)

As you can see, your cronjob is scheduled to run once a day, at a random time.

### Limit the time range
After selecting **Random** in the **Hour** field, 
you can also select desired **Hour** values to run your cronjobs at.

For example, if you'd like to run your cronjob once from **8 AM to 5 PM**,
select all the values from **8** to **16**.

Your cronjob will now run randomly once a day, **during 8:00 AM to 4:59 PM**.

The cron expression is now `R R,8-16 * * *`.

### Run several random times a day

You can also make your cronjobs run several times a day, at random time.

Just click the **Expression** button, then enter the expression `R R3 * * *`.

It'll make your cronjobs run 3 times a day. See the queued executions below:

![Run cronjobs 3 times a day](/screenshots/queud-random-x3.png)

You can combine both and use the expression `R R4,8-11,13-16 * * *`.
This will run your cronjobs 4 times a day,
randomly between 8:00 and 11:59, and between 13:00 and 16:59.

## Run cronjob every hour, at random times
To run your cronjob every hour, at a random time, follow this instructions:

- Click new Cron Job
- Select **When to call: Every hour**
- Click the **Crontab** button
- Select **Random** at the **Minute** field
- Save your cronjob.

Your cronjob expression will be `R * * * *`.

### Limit the time range
After selecting **Random** in the **Minute** field, 
you can also select desired **Minute** values to run your cronjobs at.

For example, the expression `R,1-7 9 * * *` will run your cronjob 
**once a day between 9:01 to 9:07**.

## Run cronjob with random delays

You can also set a random delay when adding/editing cronjobs, click the Expression button, then enter the Random delay.

![Random delay](/screenshots/random-delay.png)

For example, you set the expression to `0 * * * *`, then enter a random delay of **59** minutes.
Your cronjob will run every hour between minute 0 and 59.