---
title: group_*
description: List, create, update, delete group using FastCron API functions
---

The following functions are for listing, retrieving, creating, updating, and deleting your groups.

All parameters are listed in the table. Required parameters are in **bold** with no default values.

## group_list

List all groups under your account.

| Name  | Type   | Description    |
| ----- | ------ | -------------- |
| token | string | Your API token |

Return an array of [groups](data#group) like this:

```
{"data":[{"id":1,"name":"example"}],"status":"success","code":0}
```

## group_get

Get a group data

| Name  | Type    | Description    |
| ----- | ------- | -------------- |
| token | string  | Your API token |
| id    | integer | Group ID       |

Return the [group data](data#group) like this

```
{"data":{"id":1,"name":"example"},"status":"success","code":0}
```

## group_lookup

Search groups by exact name.

| Name  | Type   | Description    |
| ----- | ------ | -------------- |
| token | string | Your API token |
| name  | string | Group name     |

Return an array of [groups](data#group) like this:

```
{"data":[{"id":1,"name":"example"}],"status":"success","code":0}
```

## group_add

Add a new group

| Name  | Type   | Description    |
| ----- | ------ | -------------- |
| token | string | Your API token |
| name  | string | Name           |

You'll get the data structure of newly created group like this:
```
{"data":{"id":2,"name":"example"},"status":"success","code":0}
```

## group_edit

Update an existing group.

| Name  | Type    | Description    |
| ----- | ------- | -------------- |
| token | string  | Your API token |
| id    | integer | Group ID       |
| name  | string  | Name           |


Return the updated group data.

## group_delete

Delete a group.

| Name  | Type    | Description    |
| ----- | ------- | -------------- |
| token | string  | Your API token |
| id    | integer | Group ID       |

Return the deleted group data with ID set to `null`.

## group_vanish

Delete a group and all cronjobs under that group.

| Name  | Type    | Description    |
| ----- | ------- | -------------- |
| token | string  | Your API token |
| id    | integer | Group ID       |

Return the deleted group data with ID set to `null`.

## group_empty

Keep the group and delete all cronjobs under that group.

| Name  | Type    | Description    |
| ----- | ------- | -------------- |
| token | string  | Your API token |
| id    | integer | Group ID       |

Return the group data.

## group_items

List all cronjobs under a group.

| Name  | Type    | Description    |
| ----- | ------- | -------------- |
| token | string  | Your API token |
| id    | integer | Group ID       |

Return an array of [cronjobs](data#cron-job).
