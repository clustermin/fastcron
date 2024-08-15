---
title: 'The better way to run one-time cronjobs'
description: Previously, you needed to create several cronjobs that run once. Now you just need to create one cronjob, then schedule it to run along with a payload.
pubDate: 'August 15, 2024'
---

The old way to run one-time cronjobs:
- You used [`cron_add`](/reference/cron#cron_add) function to create a one-time cronjob.
You need to specify endpoint URL, HTTP method, credentials (username/password or token), etc. every time you set cronjob.
- This results in a lot of cronjobs, cluttering your account dashboard.
- It's impossible to have an overview of your cronjobs and their errors.
- It's hard to see what endpoints are failing or having trouble.

The new way to run one-time cronjobs:
- You just create a cronjob, set **When to call: Manual**.
- Then use [`cron_run`](/reference/cron#cron_run) to run it at a specific time, along with a `payload` if necessary.
- Now you can view all the endpoints in your accounts clearly.

For example, you're creating one-time cronjobs with GET method like this
<pre>
Aug 15, 2024, 7:30 UTC GET https://example.com/cron?item=1234
Aug 15, 2024, 7:31 UTC GET https://example.com/cron?item=1235
</pre>

You can now create one cronjob with URL 
`https://example.com/cron`
and use `cron_run` to schedule your cronjob along with the payload (`item=1234`, `item=1235`,...)

Another example: you're creating one-time cronjobs with POST method like this
<pre>
Aug 15, 2024, 7:30 UTC POST https://example.com/cron
    postData={"item": 1234}
Aug 15, 2024, 7:31 UTC POST https://example.com/cron
    postData={"item": 1235}
</pre>
You can now create one cronjob with URL 
`https://example.com/cron`
and use `cron_run` to schedule your cronjob along with the payload (`{"item": 1234}`, `{"item": 1235}`,...)

Some use cases may not require one-time cronjobs at all.
Check the updated [guide to run one-time cronjobs](/guides/one-time-cronjobs).

**Note**: In **3 months** (**November 18, 2024**), a one-time cronjob will count as one regular cronjob.
Please update your script to use `cron_run` instead of `cron_add` before that day.