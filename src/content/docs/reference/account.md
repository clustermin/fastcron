---
title: account_* API functions
description: Update your account using FastCron API functions
sidebar:
  label: account_*
---

The following functions are for retrieving, and updating your account settings.

All parameters are listed in the table. Required parameters are in **bold** with no default values.

All `account_*` functions return [account data](data#account) like this:

```json
{
  "status": "success",
  "code": 0,
  "data": {
    "id": 1,
    "name": "Thuan",
    "timezone": "America/New_York",
    "plan": "Business",
    "dailyExec": 50000,
    "memberLimit": 5,
    "expiryDate": "2030-12-24"
  }
}
```

## `account_get`

Get your account information.

| Name  | Type   | Description    |
| ----- | ------ | -------------- |
| token | string | Your API token |

## `account_edit`

Update your account settings, currently we only support changing account's timezone.

| Name     | Type   | Description          |
| -------- | ------ | -------------------- |
| token    | string | Your API token       |
| timezone | string | New account timezone |
