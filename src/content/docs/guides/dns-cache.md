---
title: DNS cache
sidebar:
  hidden: true
---

To run cronjobs more efficiently, FastCron stores resolved hostname in memory for up to 10 minutes.
They will be purged immediately if your cron job fails.