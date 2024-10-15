---
title: How to set up cronjob for WP Cron
sidebar:
  label: WordPress Cron
  order: 1
---

## About WP Cron

**WordPress Cron** (`wp-cron.php`) is the built-in task scheduler in WordPress, used to run scheduled tasks. Many plugins depend on WP Cron for their backend functions.

By default, WP Cron is triggered by website visits. Every time a visitor loads your site, there's a small chance WP Cron will run and execute scheduled tasks. This approach has some downsides:

- Running backend functions can slow down your site.
- Checking the scheduled task list each time WP Cron is triggered consumes CPU cycles and memory.
- WP Cron depends on site visits, so if there are no visitors, tasks won't be executed.
- If you need tasks to run at specific times, it's better to use a reliable cronjob service like FastCron.

To set up cronjobs for WP Cron, follow these instructions:

## Disable WP-Cron
Open your `wp-config.php` file with a file manager (e.g. cPanel file manager)
Go to the bottom of the database settings in `wp-config.php`, usually around line #37.

Add the code below:
```php
define('DISABLE_WP_CRON', true);
```
then save the file.

## Install FastCron plugin

FastCron has an official <a href="https://wordpress.org/plugins/fastcron/" target="_blank" rel="nofollow">free plugin here</a>.
You just need to install and activate it, FastCron will create a free cronjob running every 5 minutes to run `wp-cron.php` file for you.

It's the best for personal blogs.
If you manage several WordPress websites for your clients, please set up separate cronjobs at FastCron:

## Set up cronjob at FastCron
- Log in to your FastCron account
- Click the new Cron Job button 
- Enter the URL to call
 ```
 https://example.com/wp-cron.php?doing_wp_cron=1&__timestamp__
 ```
 (replace `https://example.com/` with your actual WordPress homepage URL)
- Select **When to call: Every 5 minutes**
- Click Save.

And you're done!

If you have some plugins that need to update frequently, just change the time interval to **Every minute**.

You may notice that I added `&__timestamp__` to the cronjob URL.
It'll add a number (Unix timestamp) to your cronjob URL every time your cronjob is executed, 
preventing your web server from caching the HTTP request.

## Popular WP plugins rely on WP Cron
Some WordPress plugins rely on WP Cron to run their scheduled tasks.
If you're using one of these, set up a cronjob to run your website WP cron.

- [WP Offload S3](/tutorials/wp-plugins/wp-offload-s3-cron)
- [BackupWordPress](/tutorials/wp-plugins/wp-backup-wordpress-cron)
- [WP Fastest Cache](/tutorials/wp-plugins/wp-fastest-cache-cron)
- [Newsletter](/tutorials/wp-plugins/wp-newsletter-cron)
- [Postie](/tutorials/wp-plugins/wp-postie-cron)
- [UpdraftPlus](/tutorials/wp-plugins/wp-updraft-plus-cron)
- [W3 Total Cache](/tutorials/wp-plugins/w3-total-cache-cron)