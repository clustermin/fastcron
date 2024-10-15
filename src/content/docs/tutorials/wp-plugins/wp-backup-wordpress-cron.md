---
title: How to set up cronjob for BackupWordPress
---

The **BackupWordPress** plugin relies on [WP Cron](/tutorials/wp-cron) to run its scheduled tasks.
To set up cronjob for your **BackupWordPress** plugin, you can:

## Install the free WordPress plugin

FastCron has an official <a href="https://wordpress.org/plugins/fastcron/" target="_blank" rel="nofollow">free plugin here</a>.
You just need to install and activate it, FastCron will create a free cronjob running every 5 minutes to run `wp-cron.php` file for you.

## Set cronjob on FastCron for free

Alternatively, you can [register an account](https://app.fastcron.com/signup) at FastCron to run your WP Cron.
This way, you also receive cron notifications when your cronjob fails or your website is down.

- [Log in](https://app.fastcron.com/login) to your FastCron account
- Click the new **Cron Job** button 
- Enter the URL to call
 ```
 https://example.com/wp-cron.php?doing_wp_cron=1
 ```
 (replace `https://example.com/` with your actual WordPress homepage URL)
- Select **When to call: Every 5 minutes**
- Click Save & run.

And that's it.

FastCron will run cronjob every 5 minutes for free.