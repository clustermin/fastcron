---
title: How to set up cronjob for InvoicePlane
sidebar:
  label: InvoicePlane cron
  order: 4
---

<a href="https://invoiceplane.com/?ref=fastcron.com" rel="nofollow" target="_blank">InvoicePlane</a> is a self-hosted open source application
for managing your quotes, invoices, clients, tasks and payments.

If you want to use **recurring invoices**, you need to set up a cronjob.
Follow this step-by-step to set up a cronjob for free:

- Visit your InvoicePlane **Settings** > **General** page and copy the *cron key*.
- [Log in to FastCron](https://app.fastcron.com/login), click the new **Cron job** button.
- Enter this cronjob URL into **URL to call** (replace `example.com/invoices` with your InvoicePlane URL)
```sh "CRON_KEY"
https://example.com/invoices/cron/recur/CRON_KEY
```
- Select **When to call: 1 day**, then **Save** and run your cronjob

And that's it.

FastCron will run your cronjob for free, no monthly login required.