---
title: How to flush FastCron DNS cache
sidebar:
  label: DNS cache
---

To run cronjobs more efficiently, FastCron uses its own DNS cache.
FastCron will resolve your domain name / hostname once, then cache the results up to 24 hours.

When your cronjob fails, we'll flush the cache automatically.

After you've changed your domain name's records, it's recommended to flush the DNS cache at FastCron to make sure our bots visiting your new IP addresses.

To flush the DNS cache, visit **Cron Jobs** > **Host**, and click **Flush** on your domain name.
