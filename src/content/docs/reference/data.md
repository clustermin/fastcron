---
title: Data structures
description: API data structures - cronjob, group, account.
---

## Cron job

Each cronjob contains these members:

| Name        | Type    | Description                                                                                      |
| ----------- | ------- | ------------------------------------------------------------------------------------------------ |
| id          | integer | Cron job ID                                                                                      |
| group       | integer | Group ID, nullable                                                                               |
| expression  | string  | Cron expression (crontab syntax e.g. `0 12 * * 1-5` or expression e.g. `1 day`)                  |
| timezone    | string  | Time zone                                                                                        |
| timeout     | int     | The timeout limit. Max time that FastCron will wait for your script output.                      |
| instances   | integer | Max overlapping cronjob executions: 0: unlimited, 1: single, 2 - 5: 2 - 5 overlapping executions |
| url         | string  | URL to call                                                                                      |
| httpMethod  | string  | The HTTP Method to send HTTP requests to your URL.                                               |
| httpHeaders | string  | Plain HTTP headers to send to your cronjob URL.                                                  |
| postData    | string  | The data to POST to your URL, either query format or JSON                                        |
| fail        | integer | Number of current consecutive failures                                                           |
| status      | integer | Status code, 0 means "active"                                                                    |
| name        | string  | Name of cronjob                                                                                  |
| notify      | bool    | Notify when cronjob fails                                                                        |
| notifyEvery | int     | Number of consecutive failures between each notification                                         |
| points      | integer | Points, number of executions per day                                                             |


## Cron execution result

Each cron execution results contains these members:

| Name   | Type  | Description                                   |
| ------ | ----- | --------------------------------------------- |
| result | array | An array contains multiple values, see below. |

`result` contains these members:

| Name          | Type    | Description                                            |
| ------------- | ------- | ------------------------------------------------------ |
| output        | string  | Your script output                                     |
| downloaded    | integer | Total output size (in bytes).                          |
| httpStatus    | integer | HTTP status code e.g. 200                              |
| error         | string  | Error message, if any.                                 |
| ip            | string  | Destination IP.                                        |
| source_ip     | string  | IP address of the server that process your cronjob.    |
| time          | integer | Unix timestamp of scheduled time.                      |
| startTime     | decimal | Unix timestamp of starting time.     |
| executionTime | decimal | Total execution time, in seconds.                      |
| status        | integer | Execution status, 0 means "success"                    |

## Group

Each group contains these members:

| Name | Type    | Description |
| ---- | ------- | ----------- |
| id   | integer | ID          |
| name | string  | Name        |

## Account

Your account contains these members:

| Name        | Type    | Description                         |
| ----------- | ------- | ----------------------------------- |
| id          | integer | Account ID                          |
| name        | string  | Account name                        |
| timezone    | string  | Default timezone                    |
| plan        | string  | Plan name e.g. Pro                  |
| cron        | integer | Max cronjobs e.g. 40                |
| expiryDate  | string  | Account expiry date e.g. 2023-12-31 |
