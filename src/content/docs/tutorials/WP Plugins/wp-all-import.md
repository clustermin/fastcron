---
title: How to set up cronjobs for WP All Import
sidebar:
    label: WP All Import
    order: 4
---

There are many customers trusting FastCron to run cronjobs for 
<a href="https://www.wpallimport.com/?ref=fastcron.com" target="_blank" rel="nofollow">WP All Import</a>.

## Configure your plugin

Please follow [this instruction](http://www.wpallimport.com/documentation/advanced/import-processing/), 
select the option **Iterative, Piece-By-Piece Processing**, and set it to process about 5 - 10 records at a time.
It'll lower your **processing** cronjob execution time, and minimize problems.

## Set cronjobs

You need to set up 2 cronjobs: **trigger** and **processing** for each import.

To set up the **trigger** cronjob:

- [Log in to FastCron](https://app.fastcron.com/login).
- Click the new Cron Job button
- Enter the **trigger** URL into the **URL to call** field
```sh "SECRET_KEY" "IMPORT_ID"
https://example.com/wp-cron.php?import_key=SECRET_KEY&import_id=IMPORT_ID&action=trigger
```
- Select **When to call: Every 4 hours**
- Click **Save & run**.

Expected cronjob execution results: 
```json "IMPORT_ID"
{"status":200,"message":"#IMPORT_ID Cron job triggered."}
```

To set up the **processing** cronjob:
- Click the new Cron Job button
- Enter the **processing** URL into the **URL to call** field
```sh "SECRET_KEY" "IMPORT_ID"
https://example.com/wp-cron.php?import_key=SECRET_KEY&import_id=IMPORT_ID&action=processing
```
- Select **When to call: Every 2 minutes**
- Click **Save** cronjob.

Expected cronjob execution results:
```json "IMPORT_ID"
{"status":200,"message":"Records Processed xx. Records imported xx of xxx."}

{"status":200,"message":"Import #IMPORT_ID complete"}

{"status":403,"message":"Import #IMPORT_ID is not triggered. Request skipped."}

```