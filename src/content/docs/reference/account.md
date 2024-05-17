---
title: account_*
description: Update your account using FastCron API functions
---


The following functions are for retrieving, and updating your account settings.

All parameters are listed in the table. Required parameters are in **bold** with no default values.

All `account_*` functions return [account data](data#account) like this:
```
{
  "status": "success",
  "code": 0,
  "data": {
    "id": 1,
    "name": "Thuan",
    "timezone": "America\/New_York",
    "plan": "Business",
    "dailyExec": 50000,
    "memberLimit": 5,
    "expiryDate": "2023-10-14"
  }
}    
```

## account_get

Get your account information.

| Name  | Type   | Description    |
| ----- | ------ | -------------- |
| token | string | Your API token |


## account_edit

Update your account settings, currently we only support changing account's timezone.

| Name     | Type   | Description        |
| -------- | ------ | ------------------ |
| token    | string | Your API token     |
| timezone | string | New account timezone |


## account_secret

Set a secret parameter to your account. When your cronjob runs, the keyword `__secret__` in URL, POST data, HTTP headers will be replaced with this.

| Name   | Type   | Description          |
| ------ | ------ | -------------------- |
| token  | string | Your API token       |
| secret | string | The secret parameter |
