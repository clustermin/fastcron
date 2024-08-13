---
title: About FastCron
description: FastCron is a freemium cronjob service. Founded in 2009 in Vietnam, hosted on DigitalOcean managed servers.
---

**FastCron** is a free online cronjob service. It works by sending an HTTP request to your cronjob URL, then your cron script will run its scheduled tasks.

The service was founded in 2009 with the original name **SetCronJob**. In 2023, it's changed to FastCron.

## Who runs this

It's me. I'm **Thuan**, a _webmaster_ (full stack website developer) from Vietnam.
You can email me at support@fastcron.com.

Sometimes I'm <a href="https://x.com/thuan_dev" target="_blank" rel="nofollow">on X/Twitter</a>.

## How it's doing

The service is profitable, at least enough for a solo developer.

Here are a few metrics about the service (updated manually, last updated: August 14, 2024).

- **Total users**: 7,800
- **Total cronjobs**: 244,000
- **Executions per day**: 12,000,000

## The infrastructure

The service is designed with high availability in mind. It's hosted mainly on DigitalOcean:

- A managed MySQL database cluster with hot standby, backed up daily to S3 by SnapShooter.
- A managed Redis cluster with hot standby.
- 3 app servers to process cronjobs, 
- 2 web servers to serve website traffic and API.

If you want to collaborate on FastCron, email me. I need help with marketing, copywriting, and technical docs.