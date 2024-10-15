---
title: How to set up cronjob for WP Fastest Cache
---

To set up cronjob for your <a href="https://wordpress.org/plugins/wp-fastest-cache/" target="_blank" rel="nofollow">WP Fastest Cache</a> plugin, 
you can follow the instructions below:

- Visit your **WP Fastest Cache** settings page, and enable **Preload**:
![WP Fastest Cache preload](/screenshots/wordpress/wp-fastest-cache.png)
- [Log in](https://app.fastcron.com/login) to your FastCron account
- Click the new **Cron Job** button 
- Enter the URL to call
 ```
 https://example.com/?action=wpfastestcache&type=preload
 ```
 (replace `https://example.com/` with your actual WordPress homepage URL)
- Select **When to call: Every 5 minutes**
- Click Save & run.

And that's it.

FastCron will run your WP Fastest Cache cronjob every 5 minutes for free.

If you have a [premium account](/pricing) at FastCron, you should run the cronjob every 2 minutes.