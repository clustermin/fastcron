---
title: How to set up cronjob for Abandoned Cart Reminder + Auto email module
sidebar:
  label: Abandoned cart reminder
---

If you installed 
<a href="https://prestahero.com/blog/post/90-set-up-cronjob-for-abandoned-cart-reminder-auto-email-module.html" target="_blank" rel="nofollow">Abandoned
cart reminder</a>
module for your PrestaShop,
you need to set up a cronjob to send reminder emails and emails of marketing campaigns to customers.

Follow this step-by-step to set up a cronjob for free:
- Get your **cronjob secure token** at the **Automation** tab
![Automation](/tutorials/prestashop/abandoned-cart-reminder/automation.webp)
- [Log in to FastCron](https://app.fastcron.com/login), click the new **Cron job** button.
- Enter the cronjob URL into **URL to call** (replace `example.com/shop` with your PrestaShop URL, and `SECURE_TOKEN` with your secure token).
```sh "SECURE_TOKEN"
https://example.com/shop/modules/ets_abandonedcart/cronjob.php?secure=SECURE_TOKEN
```
- Select **When to call: Every 5 minutes**, then **Save** and run your cronjob

And that's it.

FastCron will run your cronjob for free, no monthly login required.
