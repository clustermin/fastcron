---
title: FastCron Changelog
description: "We are releasing several updates a month. Read the latest updates here."
---

## August 2024

#### Telegram integration
You can now [receive a Telegram message](/integrations/telegram) from **@FastCronBot** when cronjobs fail/succeed.

#### SSL certificate expiry dates

FastCron will monitor your SSL certificate expiry dates for your active cronjobs.
You can view the *SSL cert expiry dates* on the **Host** tab.

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