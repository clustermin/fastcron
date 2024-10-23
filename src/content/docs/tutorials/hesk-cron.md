---
title: How to set up cronjobs for Hesk
---

Follow the instructions below to set up cronjobs for your
<a href="https://www.hesk.com/?ref=fastcron.com" rel="nofollow" target="_blank">Hesk</a>
help desk.

## Cronjob for email notifications of overdue tickets

- Log in to your Hesk admin, copy the **URL Access Key** at Admin panel > Settings > Help desk > Security > URL Access Key
- Log in to your FastCron account
- Click the new **Cron Job** button
- Enter the **URL to call**:
```txt "URL_ACCESS_KEY"
https://example.com/hesk/cron/email_overdue_tickets.php?key=URL_ACCESS_KEY
```
replace `https://example.com/hesk/` with your Hesk URL
- Select **When to call: Every 12 hours**
- Click Save & run.

## Cronjob for IMAP fetching (email to ticket)

- Click the new **Cron Job** button
- Enter the **URL to call**:
```txt "URL_ACCESS_KEY"
https://example.com/hesk/inc/mail/hesk_imap.php?key=URL_ACCESS_KEY
```
replace `https://example.com/hesk/` with your Hesk URL
- Select **When to call: Every 5 minutes**
- Click Save & run.

If you have a premium account, you should set it to run every minute or faster.

## Cronjob for POP3 Fetching (email to ticket)

- Click the new **Cron Job** button
- Enter the **URL to call**:
```txt "URL_ACCESS_KEY"
https://example.com/hesk/inc/mail/hesk_pop3.php?key=URL_ACCESS_KEY
```
replace `https://example.com/hesk/` with your Hesk URL
- Select **When to call: Every 5 minutes**
- Click Save & run.

If you have a premium account, you should set it to run every minute or faster.