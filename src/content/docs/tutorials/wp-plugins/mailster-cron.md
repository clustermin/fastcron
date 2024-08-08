---
title: How to set up cronjob for Mailster
---

## About Mailster
<a href="https://mailster.co/?ref=fastcron.com" target="_blank" rel="nofollow">Mailster</a>
is a WordPress newsletter plugin. It requires a cronjob to send scheduled emails to your subscribers.

## Do NOT use a *real cron*
Mailster cron script relies on JavaScript to process its tasks.
FastCron doesn't process Javascript in your script output.
Fortunately, it supports WP Cron, so you should switch to using WP Cron first before setting up a cronjob.

## Set up cronjob using WP Cron
You must first switch Mailster to use WP Cron instead of *real cron*.
![Mailster settings](/screenshots/mailster.png)

After that, follow the tutorial to [set cronjob for WP cron](/tutorials/wp-cron).