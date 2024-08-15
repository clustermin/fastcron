---
title: How to run one-time cronjobs
sidebar:
  label: One-time cronjobs
---

The best use case for one-time cronjobs (cronjobs that run once at a specific time)
is scheduling a task once at a specific time and it won't recur ever again.
For example, I schedule an email blast to notify [new IP addresses](/ip-addresses) before they're in use. 

For other use cases, there are some better ways:
- If you'd like to process one item at a time,
instead of creating a one-time cronjob with the item data,
you should store those items (with their scheduled times if necessary) in your database,
and set a cronjob every few seconds or minutes to retrieve and process those items.
- If you'd like to process a multi-step cronjob,
instead of creating a one-time cronjob with the next step data,
you should redirect to the new URL.
FastCron will [follow the HTTP redirection](/questions/will-fastcron-follow-redirections). 

If you still need to create/run one-time cronjobs, follow the instructions below.

## Create one-time cronjobs manually

- Click new Cron Job
- Enter the URL to your cron script.
- Click the **Expression** button next to **When to call**
- Enter the time into the **Expression** field, e.g. **Feb 14, 2030, 7:30**
- Click **Save** changes.

And that's it. 
You can hover/click on the time pattern field e.g. **Feb 14, 2030, 7:30** in the example above, and it'll show the next execution time so you can confirm the time settings are correct.

## Run one-time cronjobs using API 
To programmatically run one-time cronjobs, you can create a cronjob (with **When to call: Manual**),
then schedule to run it at a specific time using
[`cron_run`](/reference/cron#cron_run).

```bash "YOUR_API_TOKEN" "CRONJOB_ID"
curl -X POST "https://app.fastcron.com/api/v1/cron_run" \
    -H 'Content-Type: application/json' \
    -d '{
        "token": "YOUR_API_TOKEN",
        "id": CRONJOB_ID,
        "time": 1905821065
    }'
 ```
 The command above will run your cronjob at **Friday, May 24, 2030 2:44:25**.

 You can also attach a `payload` to the execution time like this:

```bash "YOUR_API_TOKEN" "CRONJOB_ID"
curl -X POST "https://app.fastcron.com/api/v1/cron_run" \
    -H 'Content-Type: application/json' \
    -d '{
        "token": "YOUR_API_TOKEN",
        "id": CRONJOB_ID,
        "time": 1905821065,
        "payload": "test=value&name=value2"
    }'
 ```
 The command above will run your cronjob at **Friday, May 24, 2030 2:44:25** with the payload `test=value&name=value2`.


<!-- ## Create one-time cronjobs using `cron_add`
Create a one-time cronjob using `cron_add`
```bash "YOUR_API_TOKEN"
curl -X POST "https://app.fastcron.com/api/v1/cron_add" \
    -H 'Content-Type: application/json' \
    -d '{
        "token":"YOUR_API_TOKEN",
        "url":"https://example.com",
        "expression":"May 20, 2030, 8:00"
    }'
 ```

Create multiple one-time cronjobs using `cron_batch_add`

```bash "YOUR_API_TOKEN"
curl -X POST "https://app.fastcron.com/api/v1/cron_batch_add" \
    -H 'Content-Type: application/json' \
    -d '{
        "token":"YOUR_API_TOKEN",
        "data": [
            {"url":"https://example.com", "expression":"May 20, 2030, 8:00"},
            {"url":"https://example.com", "expression":"May 20, 2030, 19:00"}
        ]
    }'
```

Please replace `YOUR_API_TOKEN` with your real API token.

You can also use `@timestamp` for `expression`, e.g. `@1905821065` for **Friday, May 24, 2030 2:44:25**. This is easier to program, but harder to read on your cronjobs dashboard. -->