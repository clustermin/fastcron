---
title: Scheduled maintenance 
description: To pause cronjobs during a planned outage, you can schedule a maintenance. Your cronjobs won't run during a scheduled maintenance period.
pubDate: 'Dec 3, 2024'
---

You can now schedule maintenance on the Maintenance page.

![Scheduled maintenance](/screenshots/scheduled-maintenance.png)

The start and end times are in your time zone. You can change your account timezone on the Profile page.

Your cronjobs will be rescheduled to run after the maintenance.
You can also add a random delay to spread the load when your maintenance period ends.

For example: your cronjob is set to run **daily at 12:15**.
You have scheduled maintenance **from 12:00 to 12:30 today**.
It will be rescheduled to run at **12:30**.
It will continue to run at **12:15 tomorrow** as usual.

If you add a random delay of 600 seconds (10 minutes), it will run once from 12:30 to to 12:40.
You should add a delay of *total number of daily cronjobs* * 10 seconds. It will prevent your daily cronjobs from running all at once after the maintenance.

Maintenance will be applied to all cronjobs with [the same priority](/blog/priority-level).

Once the maintenance is created, it will remove and reschedule the queued executions of your cronjobs.
Deleting a scheduled maintenance can not revert that.
If you want to recalculate the queued executions of your cronjobs, you can disable then enable all cronjobs.

Ended maintenance will be automatically removed after 1 month, or you can remove it manually.