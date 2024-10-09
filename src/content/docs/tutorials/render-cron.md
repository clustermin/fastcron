---
title: Wake up Render free instances
---

**Render** is a cloud hosting provider that can run every shape and size of application: static websites, dynamic web apps, scheduled cron jobs—you name it.
It natively supports many popular programming languages, like Node. js, Python, and Ruby.

Its <a href="https://docs.render.com/free#spinning-down-on-idle" target="_blank" rel="nofollow">free instances</a>
will become **idle after 15 minutes**.
Once they’re sleeping, it’ll take about **one minute** to wake up, which will slow your website's response time.

To ensure that the instance is always active and ready to serve incoming traffic, you can create a cronjob to wake it up.

Here's how to create a free cronjob for **Render free instances** at FastCron:

- [Create a free account](https://app.fastcron.com/signup)
- Click the new **Cron Job** button
- Enter your website URL e.g. `https://appy.onrender.com`
- Select **When to call: Every 12 minutes**
- Save and run cronjobs

And that's it.

FastCron will visit your Render website every 12 minutes for free, no monthly login required.