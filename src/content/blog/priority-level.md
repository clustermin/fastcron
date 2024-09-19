---
title: 'Priority level: a better way to categorize items'
description: You can now set priority (Normal, High, Higher) for cronjobs, groups, notification channels, and team members.
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

You can set cronjob priority at the section **Name, group, priority, and note** when adding/editing a cronjob.
If a cronjob belongs to a group, it will inherit the group priority.
If you move it to another group, its priority will be updated to the new group priority.

## Group priority

You can set the group priority when adding/editing a group.
Changing a group priority will update all its cronjobs to the same priority.

## Notification channel priority

You can set the channel priority when adding/editing a channel.
A notification channel will receive cron notifications from cronjobs with **the same priority**.

## Team member priority

You can set the team member priority when inviting/editing a team member.

**Admins** can add/view/edit/remove **Members** with **the same priority or lower**.
Team members can add/view/edit/delete items (cronjobs, groups, channels) with **the same priority or lower**.

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