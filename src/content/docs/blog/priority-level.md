---
title: 'Priority level: a better way to categorize items'
description: You can now set priority (Normal, High, Higher) for cronjobs, groups, variables, notification channels, and team members.
pubDate: 'Sep 18, 2024'
---

FastCron relies on groups to categorize items.
Cronjobs belong to a group.
Team members can access a limited number of groups.
Cron notifications will be sent to a specific webhook/Slack or member emails.

However, having several team members and groups makes it increasingly complicated.

To simplify the item categorization, FastCron now supports **Priority**.

There are 3 priority levels: **Normal**, **High**, and **Higher**.
You may use them for your **test**, **staging**, and **production** environment.

## Cron job priority

You can set cronjob priority in the section **Name, group, priority, and note** when adding/editing a cronjob.
When you move cronjob to a group, its priority will be set to the group priority, but you can change it on the form.

## Group priority

You can set the group priority when adding/editing a group.
Changing a group priority will only raise all its cronjobs to the same priority.

## Export priority

The default export file's priority is Higher.
When a team member exports cronjobs to a JSON file, the export file will have the same priority as them.
Team members can view, download, import, and delete export files with the same priority or lower.

## Environment variable priority

You can set the variable priority when adding/editing a variable.
Variables can be used in all cronjobs, be seen by all team members.

Only team members with the same or higher priority can edit (and see the variable value) and delete a variable.

## Notification channel priority

You can set the channel priority when adding/editing a channel.
A notification channel will receive cron notifications from cronjobs with **the same priority**.

## Maintenance priority
You can set the maintenance priority when scheduling a maintenance.
The maintenance period will apply to all cronjobs with **the same priority**.

## Team member priority

You can set the team member priority when inviting/editing a team member.

**Admins** can add/view/edit/remove **Members** with **the same priority or lower**.
Team members can add/view/edit/delete items (cronjobs, groups, variables, channels, maintenances) with **the same priority or lower**.

Team members will receive cron notifications via email from cronjobs with **the same priority or lower**.
You need to check **Send cron notifications to this member** when adding/editing a team member.

## What's next

Existing cronjobs, groups, and channels will have priority level **Normal** by default.
Team members and admin will have priority **Higher** by default, so they can view and manage all items.

In **1 month** (**Oct 18, 2024**): 
- Existing team members *with limited group access* will be able to access all items with the same priority or lower.
Please update your team members with a suitable priority level if you still want to limit their access.
![Team member allowed groups](/images/team-member-allowed-groups.png)
In the screenshot above, the allowed groups will be removed.

- Team members *receiving cron notifications from some groups* will receive cron notifications from **ALL** cronjobs with the same priority or lower.
![Send cron notifications to team members](/images/group-send-cron-notifications.png)
In the screenshot above, all the selected team members will receive cron notifications from all cronjobs.

If you have any questions, please email me at support@fastcron.com.