---
title: How to run PHP cronjobs
sidebar:
  label: PHP Cron
---

## About PHP

PHP is one of the most popular web programming languages.
It lets you quickly create and improve websites, from a simple one-page website
to full content management system like [WordPress](/tutorials/wp-cron) 
or an ever-changing [SaaS](/tutorials/laravel-cron).


## Run PHP cronjobs via crontab

You may need to do periodic update to your website, e.g. cleaning up inactive users, creating backups, etc.

To do so, create a PHP script to work your magic. Let's save it as `cron.php`.
You can then set up cronjobs using your hosting's Cron Jobs feature, or run `crontab -e` on your server.

The cronjob will look like this
```sh
30 7 * * * /usr/bin/php /path/to/cron.php
```
This will run your cronjob once a day at 7:30.

If you can run your script via a browser, use `curl` to run it:
```sh
30 7 * * * curl https://example.com/backend/cron.php
```

## A better way to run PHP cron

There are several [free cronjob services](/blog/free-cron-job-services) to run your PHP script.
Why they are better:

- Know when your cronjob is executed
- Check last execution results including HTTP status, execution time, and output
- Receive email notifications when your cronjob fails
- and many more features.

To set up cronjob for your PHP script at **FastCron**, follow these steps:
- Log in to your account.
- Click new Cron Job button.
- Enter your cronjob URL e.g. `https://example.com/backend/cron.php` into **URL to call**.
- Select **When to call: Every day** or your desired time interval.
- Then Save and run cronjob.

