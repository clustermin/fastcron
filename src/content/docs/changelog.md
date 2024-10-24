---
title: FastCron Changelog
description: "We are releasing several updates a month. Read the latest updates here."
---

You can receive monthly product updates from FastCron by subscribing on the **Profile** page.

You can <a href="https://app.fastcron.com/feature-requests" target="_blank" rel="nofollow, noindex">request a feature here</a> or vote on existing feature requests.

## October 2024

#### Clean up
- Old webhook URLs have been moved to the Notification channels.
- The allowed groups of team members have been removed. They will see all cronjobs with the same or lower priority.
- Group notification recipients have been removed. They will receive cron notifications from all cronjobs with the same or lower priority.
- Stopped one-time cronjobs will be removed after 3 days.
- You won't be able to run disabled cronjobs using the API function `cron_run`.
- Exports have priority too. Team members can view, download, delete, and import files with the same or lower priority.
- Fixed: use `Rn` in the hour field in your [cron expressions](/guides/cron-expressions#crontab-expression) 
to select `n` [random values](/guides/random-time#run-several-random-times-a-day).

#### POST data/payload validation

FastCron will now validate [`postData`](/reference/cron#cron_add) and [`payload`](/reference/cron#cron_run).
The POST data must be
- Valid query string in the format `name=value&name2=value2`. No newlines are allowed.
- If the `postData`/`payload` has newlines or starts with `{`, it must be valid JSON string.

#### Hide archived cronjobs

FastCron will archive disabled cronjobs after 180 days, and won't show them on the dashboard by default.
You can see them when using the search form.
To see all archived cronjobs, select *Archived* status on the search form.

#### Remove inactive account

FastCron will remove free accounts with no active cronjobs and no activity after 180 days.
Due to the high rate of invalid email addresses and bounced messages, FastCron **won’t send** any notifications before removal.

#### Notify when output contains a word

You can receive cron notifications (from emails and all other channels) when your cronjob output does/doesn't contain a word.
To enable it, click **Edit** cronjob. In the section **Notifications**, enter the desired word into **Notify if contains**.

## September 2024

#### Variables

You can now add variables on the 
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" style="display: inline-block"
      viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M8 15h7.01v.01H15L8 15Z"/>
    <path stroke="currentColor" stroke-linecap="square" stroke-width="2"
          d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"/>
    <path stroke="currentColor" stroke-linecap="square" stroke-width="2"
          d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z"/>
</svg>
**Environment variables** page.

Use `__variable_name__` in the cronjob URL, POST data, or payload, and it will be replaced with the variable value
when the cronjob priority is **the same or higher** than the variable priority.

It's useful for secret key/token, API/authorization token, or configuration values.

Use it when:
- you don't want to share secrets with your team members.
- you want to change it once and apply to all cronjobs.

#### Team members

Members and Viewers now can see other team members.
All team members can choose to start/stop receiving cron notifications from the team account on the Members page.

#### Priority level

You can now set [priority level](/blog/priority-level) for your cronjobs, groups, channels, variables, and team members.

#### Free WordPress plugin

You can now install and activate our official <a href="https://wordpress.org/plugins/fastcron/" target="_blank" rel="nofollow">WordPress plugin here</a>.
It will create a **free cronjob** running every 5 minutes to your `wp-cron.php`.
Completely free, no registration required, just activate and done.

#### Jira integration

FastCron now supports [Jira integration](/integrations/jira).
FastCron will trigger your automation rule with incoming webhook trigger.
You can then add an action to process the notifications: send emails to team, create a new issue, or comment on an existing issue.

#### Search in `cron_logs` and `cron_failures`

You can now add `keyword` to [`cron_logs`](/reference/cron#cron_logs) and [`cron_failures`](/reference/cron#cron_failures) function
to search in logs output, error message, and execution time (Unix timestamp).

## August 2024

#### Disabled cronjobs won't run

In **2 months** (after **October 20, 2024**), you can no longer use `cron_run` to run disabled cronjobs.
You need to edit the disabled cronjobs, select **When to call: Manual**,
then **Save** and **Enable** them.

#### Cron expression `manual`

You can now create cronjob to run manually by selecting **When to call: Manual** or set the `expression` to `manual`.
Use it to:
- Run cronjob manually only when necessary
- Create an endpoint URL for one-time executions
- Create chained cronjobs: run this cronjob only after another cronjob complete (edit cronjob > Notifications, at Run cronjob, select the manual cronjob).

#### `cron_run` with `time` and `payload`

You can now set both `time` and `payload` when calling [`cron_run`](/reference/cron#cron_run) function.
It's great for running one-time cronjobs programmatically.

This is the recommended way to [run one-time cronjobs](/guides/one-time-cronjobs).

**Note**: In **3 months** (**November 18, 2024**), a one-time cronjob will count as one regular cronjob.
Please update your script to use `cron_run` instead of `cron_add` before that day.

#### `cron_next` API function

A new API function has been added.
[`cron_next`](/reference/cron#cron_next) will return an array of next execution times.

#### Telegram integration
You can now [receive a Telegram message](/integrations/telegram) from **@FastCronBot** when cronjobs fail/succeed.

#### SSL certificate expiry dates

FastCron will monitor your SSL certificate expiry dates for your active cronjobs.
You can view the *SSL cert expiry dates* on the **Hosts** page.

## July 2024

#### Unlimited team members
You can now add unlimited team members to your account, even in the free plan!

#### Ignore HTTP status is removed
Your cronjob URLs should return HTTP status code 2xx.
Otherwise, they will be marked as failed and disabled after a number of consecutive failures.

Previously, you can choose to ignore all HTTP status codes (3xx, 4xx, 5xx).
The option has been removed.
You can choose to ignore one HTTP status code at a time on the cron logs page or in a failure notification email.

#### Cronjob statistics and monthly report
FastCron has started collecting cronjob statistics (total runs/failures, average execution times, total 4xx/5xx responses) since July 15.
You can choose to receive monthly reports on your profile page.

## June 2024

#### Notification channels

You can now add account-level notification channels including Slack, **Zenduty**, **Discord**, **Teams**, and webhook (JSON payload).
Once added, all failure/success notifications will be sent to your channel(s).

You can disable or delete a channel in case you don't want to receive further notifications.

FastCron will show the last error message when failing to send notifications to your channel.
We will automatically disable your channel after 5 consecutive failures.

#### Removed daily execution limits

The base cronjob interval is 1 minute.
You can create cronjobs to run up to every 5 seconds, but they will count as 12 cronjobs.
You can create up to 1,440x one-time cronjobs.

#### Changed retrying failed cronjobs

Failed then disabled cronjobs will no longer be retried and enabled.
- The default failure threshold is 20 consecutive failures.
- You can update it at the section **Failures, retry, and repeat**.
- When your cronjob fails half of the threshold, we will back off:
  - 1 day if your cronjob runs 4 times a day or less
  - 3 hours if your cronjob runs 24 times a day or less
  - 1 hour otherwise
- When the cronjob exceeds the failure threshold, it will be disabled.
- You will receive a cron notification (via email, Slack, or webhook) when that happened.

#### Removed old servers

3 old servers are scheduled to removed:
- **scj-app01** removed on June 11, 2024
- **scj-app02** removed on June 18, 2024
- **scj-app03** removed on June 25, 2024
- **scj-app04** removed on July 2, 2024

Please ensure that we can reach your cronjob URLs with the new IP addresses by whitelisting our IP addresses.

#### Updated `cron_run`

You can now run your cronjob at a specific time using [`cron_run`](/reference/cron#cron_run) with `time` parameter.


## May 2024

- You can now change your referral code.
- Help center have been moved to [Docs](/docs).
- Blog have been moved to [/blog](/blog)
- Account dashboard has been moved to https://app.fastcron.com
- API endpoint is now `https://app.fastcron.com/app/v1/`
- 3 new [IP addresses](/ip-addresses) have been added.
- Custom HTTP headers are now available in the free plan.
- Show last **25 execution results** for the free plan (from 10 results).
- We will remove failed execution results after 1 year.
- User avatars are now synced from your Google account.
- You can now add your company/team name.
- Contact email has been removed. Existing contacts have been converted to team members with role Viewer.
- Auto-deleting stopped/failed cronjobs on the group level has been removed. Please use the settings on the account level.

## April 2024

- You can repeat your cronjob when/until its output matches a word.

## December 2023

- You can prevent overlapping or allow up to 5 overlapping executions by adjusting the [Max instances](/blog/max-instances) settings.