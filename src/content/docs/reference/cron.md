---
title: cron_*
description: List, create, update, delete cronjobs via our cron API functions
---

The following functions are for listing, retrieving, creating, updating, and deleting your cronjobs.

All parameters are listed in the table. Required parameters are in **bold** with no default values.

## `cron_list`

List cronjobs under your account, up to 1000 items per page.

| Name      | Type   | Default | Description                                |
| --------- | ------ | ------- | ------------------------------------------ |
| **token** | string |         | Your API token                             |
| page      | int    | 1       | Page number                                |
| keyword   | string | null    | Keyword to search cronjobs (name, ID, URL) |

Returns an array of cronjob data structures.

## `cron_get`

Get a cronjob data.

| Name      | Type    | Description    |
| --------- | ------- | -------------- |
| **token** | string  | Your API token |
| **id**    | integer | Cronjob ID     |

Returns the cronjob data like this:

```json
{
  "data": {
    "id": 132,
    "group": null,
    "expression": "41 3 * * 2",
    "timezone": "Europe/London",
    "url": "http://example.com/cron_php",
    "postData": "",
    "fail": 0,
    "status": 0,
    "name": "weekly",
    "notify": true,
    "points": 1
  },
  "status": "success",
  "code": 0
}
```

## `cron_add`

Add a new cronjob.

| Name             | Type    | Default          | Description                                                                                      |
| ---------------- | ------- | ---------------- | ------------------------------------------------------------------------------------------------ |
| **token**        | string  |                  | Your API token                                                                                   |
| **url**          | string  |                  | URL to call                                                                                      |
| expression       | string  | 1 hour           | Time expression, may be either crontab syntax or time interval in English                        |
| filter           | string  | null             | [Filter](/blog/time-filter) scheduled execution times                                            |
| delay            | integer | 0                | Random delay (in minutes) before running your cronjob. No delay by default.                      |
| timezone         | string  | account timezone | Cronjob timezone                                                                                 |
| timeout          | integer | 300              | Cron timeout - max time to wait for your URL to response.                                        |
| instances        | integer | 0                | Max overlapping cronjob executions: 0: unlimited, 1: single, 2 - 5: 2 - 5 overlapping executions |
| username         | string  | null             | Username for HTTP authentication                                                                 |
| password         | string  | null             | Password for HTTP authentication                                                                 |
| httpMethod       | string  | GET              | HTTP method of the HTTP request to send to your cronjob URL                                      |
| postData         | string  | null             | When `httpMethod` is POST, PUT, or PATCH, send this post data with the HTTP request.             |
| httpHeaders      | string  | null             | Plain HTTP headers to send to your cronjob URL. Use new lines as delimiters.                     |
| userAgent        | string  | null             | User agent, default is `Mozilla/5.0 (compatible; FastCron/1.0; https://www.fastcron.com/)`       |
| notify           | bool    | true             | Enable notification on failure.                                                                  |
| notifyEvery      | int     | 1                | When notify is true, send notification every `notifyEvery` fails.                                |
| failureThreshold | integer | 10               | Number of consecutive failures allowed before disabling cronjob.                                 |
| pattern          | string  | null             | If the cron execution contains the string, mark it as failure                                    |
| group            | integer | null             | Group ID                                                                                         |
| name             | string  | null             | Name of cronjob                                                                                  |

Returns the newly created cronjob.

```
https://app.fastcron.com/api/v1/cron_add?token=******&expression=*/3 1,2,3 * * *&url=example.com/cron_php
```

```json
{
  "data": {
    "id": 132,
    "group": null,
    "expression": "*/3 1,2,3 * * *",
    "timezone": "UTC",
    "url": "http://example.com/cron_php",
    "postData": "",
    "fail": 0,
    "status": 0,
    "name": "",
    "notify": true,
    "points": 9
  },
  "status": "success",
  "code": 0
}
```

## `cron_edit`

Update an existing cronjob

| Name      | Type    | Default       | Description                                   |
| --------- | ------- | ------------- | --------------------------------------------- |
| **token** | string  |               | Your API token                                |
| **id**    | integer |               | Cronjob ID                                    |
| any       | any     | current value | Any parameter listed in `cron_add` parameters |

Similar to `cron_add`, except that it'll update a specific cronjob with provided ID.

Returns the structure of the updated cronjob.

## `cron_enable`

Enable a cronjob

| Name      | Type    | Description    |
| --------- | ------- | -------------- |
| **token** | string  | Your API token |
| **id**    | integer | Cronjob ID     |

Returns the structure of the updated cronjob.

## `cron_disable`

Disable a cronjob

| Name      | Type    | Description    |
| --------- | ------- | -------------- |
| **token** | string  | Your API token |
| **id**    | integer | Cronjob ID     |

Returns the structure of the updated cronjob.

## `cron_pause`

Pause a cronjob for a specific duration

| Name      | Type    | Default | Description                                                              |
| --------- | ------- | ------- | ------------------------------------------------------------------------ |
| **token** | string  |         | Your API token                                                           |
| **id**    | integer |         | Cronjob ID                                                               |
| for       | string  | null    | An expression for time modification e.g. 15 minutes, 1 hour, 1 day, etc. |

Returns the structure of the paused cronjob.

## `cron_delete`

Delete a cronjob

| Name      | Type    | Description    |
| --------- | ------- | -------------- |
| **token** | string  | Your API token |
| **id**    | integer | Cronjob ID     |

Returns the structure of the deleted cronjob, with ID set to null.

## `cron_run`

Schedule the cronjob to run within next minute or at a specific time.
This doesn't change the cronjob time settings.

| Name      | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| **token** | string  | Your API token                               |
| **id**    | integer | Cronjob ID                                   |
| time      | integer | Timestamp to run cronjob                     |
| payload   | string  | Payload to send this time (read more below). |

`payload` should be valid HTTP **query string** `name=value&name2=value2` or valid **JSON** `{"name": "value", "number": 1}`.

- If cronjob's `httpMethod` is POST, PUT, or PATCH, `payload` will overwrite the cronjob's `postData`.
  If `payload` is valid JSON, FastCron will add `Content-Type: application/json` to the HTTP request headers.

- If cronjob's `httpMethod` is GET, HEAD, or DELETE, `payload` must be HTTP query string, and will append to the cronjob URL.
  FastCron automatically add `?` or `&` before appending the payload so you don't need to.

You can also use [keywords like `__timestamp__`](/guides/random-keywords#supported-keywords) in your payload.

Returns the timestamp which cronjob will run at.

## `cron_logs`

Get your cronjob execution logs.

| Name      | Type    | Description                                                                     |
| --------- | ------- | ------------------------------------------------------------------------------- |
| **token** | string  | Your API token                                                                  |
| **id**    | integer | Cronjob ID                                                                      |
| keyword   | string  | Keyword to search in execution time, output, IP addresses, error messages, etc. |

Returns an array of [cron execution results](data#cron-execution-result).

## `cron_failures`

Get your cronjobs failed execution logs.

| Name      | Type    | Description                                                                     |
| --------- | ------- | ------------------------------------------------------------------------------- |
| **token** | string  | Your API token                                                                  |
| **id**    | integer | Cronjob ID                                                                      |
| keyword   | string  | Keyword to search in execution time, output, IP addresses, error messages, etc. |

Returns an array of [cron execution results](data#cron-execution-result).

## `cron_next`

Get next execution times of your cronjob.

| Name      | Type    | Description    |
| --------- | ------- | -------------- |
| **token** | string  | Your API token |
| **id**    | integer | Cronjob ID     |

Returns an array of queued/scheduled execution times (Unix timestamp). Max 100 results.
Example response:

```json
{ "status": "success", "code": 0, "data": [1723256352, 1723342752, 1723429152] }
```

## `cron_batch_add`

Add multiple cronjobs at once/

| Name      | Type   | Default | Description                                |
| --------- | ------ | ------- | ------------------------------------------ |
| **token** | string | null    | Your API token                             |
| data      | array  | null    | Array of cron_add parameters except token. |

This works only with requests in JSON format like this:

```sh
curl -X POST "https://app.fastcron.com/api/v1/cron_batch_add" \
-H 'Content-Type: application/json' \
-d '{"token":"***", "data":[{"url":"https://example.com", "expression":"1 hour"},{"url":"https://example.com", "expression":"1 day"}]}'
```

Returns an array of cronjob data structures.

## `cron_batch_edit`

Update multiple cronjobs at once.

| Name      | Type   | Default        | Description                                                   |
| --------- | ------ | -------------- | ------------------------------------------------------------- |
| **token** | string |                | Your API token                                                |
| **id**    | array  |                | List of cronjob IDs                                           |
| any       | any    | current values | Any parameters listed in `cron_add` parameters except `token` |

Returns an array of updated cronjob data structures.

## `cron_batch_delete`

Delete multiple cronjobs at once.

| Name      | Type   | Description         |
| --------- | ------ | ------------------- |
| **token** | string | Your API token      |
| **id**    | array  | List of cronjob IDs |

Returns an array of deleted cronjobs.

## `cron_group_edit`

Update multiple cronjobs in a group at once.

| Name      | Type   | Default        | Description                                                  |
| --------- | ------ | -------------- | ------------------------------------------------------------ |
| **token** | string |                | Your API token                                               |
| **id**    | int    |                | The group ID                                                 |
| any       | null   | existing value | Any parameter listed in `cron_add` parameters except `token` |

Returns an array of updated cronjob data structures.
