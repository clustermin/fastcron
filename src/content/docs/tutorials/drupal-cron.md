---
title: How to set up cronjob for Drupal
sidebar:
  label: Drupal cron
  order: 3
---

Follow this step-by-step to set up a cronjob for Drupal:

- Visit your Drupal **Administration** > **Reports** > **Status report**
- Copy the cronjob URL in the section **Cron** maintenance tasks.

| Drupal core version  | URL                                            |
| -------------------- | ---------------------------------------------- |
| Drupal 8             | `https://www.example.com/cron/<key>`              |
| Drupal 7             | `https://www.example.com/cron.php?cron_key=<key>` |
| Drupal 6 and earlier | `https://www.example.com/cron.php`                |
- [Log in to FastCron](https://app.fastcron.com/login), click the new **Cron job** button.
- Enter the cronjob URL into **URL to call**
- Select **When to call: Every 5 minutes**, then **Save** and run your cronjob

And that's it.

FastCron will run your cronjob for free, no monthly login required.

If you're on a [premium plan](/pricing), you can run the cronjob every minute.