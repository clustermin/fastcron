---
title: How to run one-time cronjobs
sidebar:
  label: One-time cronjobs
---

## Create one-time cronjobs manually
If you would like to set up a one-time cronjob, i.e. a cronjob that runs once at a specific time, you can follow these instructions:

- Click new Cron Job
- Enter the URL to your cron script.
- Click the **Expression** button next to **When to call**
- Enter the time into the **Expression** field, e.g. **Feb 14, 2030, 7:30**
- Make sure you select the correct **Timezone**
- Click **Save** changes.

And that's it. 
You can hover/click on the time pattern field e.g. **Feb 14, 2030, 7:30** in the example above, and it'll show the next execution time so you can confirm the time settings are correct.

## Auto delete stopped one-time cronjobs
To automatically delete one-time cronjobs after their executions, you can visit your account settings page and update **Delete stopped cronjobs after**.

![Auto delete](/screenshots/account-settings.png)

## Run a cronjob at a specific time
Alternatively, you can create a cronjob, then schedule to run it at a specific time
using [`cron_run`](/reference/cron#cron_run).

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


## Create one-time cronjobs using `cron_add`
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

You can also use `@timestamp` for `expression`, e.g. `@1905821065` for **Friday, May 24, 2030 2:44:25**. This is easier to program, but harder to read on your cronjobs dashboard.