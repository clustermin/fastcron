---
title: How to set up cronjob for WP All Import
sidebar:
  label: WP All Import
  order: 2
---

There are many customers trusting FastCron to run their WordPress plugin WP All Import.

The official documentation for setting up cronjob can be found at
https://www.wpallimport.com/documentation/cron/

:::note[Configure your plugin]
Please follow the instruction at\
https://www.wpallimport.com/documentation/import-processing/

Select the option **Iterative**, **Piece-By-Piece Processing**, and set it to process about 5 - 10 records at a time. It'll lower your ***processing*** cronjob execution time, and minimize problems.
:::

You need to set up 2 cronjobs: ***trigger*** and ***processing*** for each import.

## Set up *trigger* cronjob
To set up the ***trigger*** cronjob:

- Click **+ Cron Job**
- At **URL to call** field, enter the *trigger* URL:
```txt "YOUR_SECRET_KEY" "YOUR_IMPORT_ID"
https://example.com/wp-cron.php?import_key=YOUR_SECRET_KEY&import_id=YOUR_IMPORT_ID&action=trigger&rand=__random__
```
- Select **When to call**: **Every hour**
- Click **Save** cronjob

Expected script output:
```json
{"status":200,"message":"#****** Cron job triggered."}
```

## Set up *processing* cronjob
To set up the ***processing*** cronjob:

- Click **+ Cron Job**
- At **URL to call** field, enter the *processing* URL:
```txt "YOUR_SECRET_KEY" "YOUR_IMPORT_ID"
https://example.com/wp-cron.php?import_key=YOUR_SECRET_KEY&import_id=YOUR_IMPORT_ID&action=processing&rand=__random__
```
- Select **When to call**: **Every 2 minutes**
- Click **Save** cronjob

Expected script output:

When the *trigger*ed import is processed completely:

```json
{"status":200,"message":"Import #5 complete"}
```

When the previous *trigger*ed import was already processed, and there is nothing left to do:

```json
{"status":403,"message":"Import #5 is not triggered. Request skipped."}
```