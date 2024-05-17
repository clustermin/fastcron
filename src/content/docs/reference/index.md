---
title: FastCron API
description: "FastCron API Docs. Overview, request and response format."
---

With an API Token, you can work with your cronjobs, groups, and account settings without logging in.

The API token is a 32-character string generated for all FastCron users.
You can visit your <a href="https://app.fastcron.com/user" target="blank" rel="noindex, nofollow">Profile</a>
page to copy your API key.

## API endpoint

Send all API requests via HTTP to a URL with the format

```
https://app.fastcron.com/api/v1/[function]
```

For example, to list your cronjobs, send your HTTP request to

```
https://app.fastcron.com/api/v1/cron_list
```

## Authentication and request format

FastCron requires a `token` variable sent in POST body or GET parameters.

### POST
Send all data including the `token` to:

```
https://app.fastcron.com/api/v1/[function]
```

The POST body must be either query string or JSON format:

```
token=******&id=1&name=weekly
```

```json
{"token":"******","id":1,"name":"weekly"}
```

### GET variables

```
https://app.fastcron.com/api/v1/[function]?token=[token]&name=value
```

Example requests:

```
https://app.fastcron.com/api/v1/cron_list?token=******
```

```
https://app.fastcron.com/api/v1/cron_edit?token=******&id=1&name=weekly
```

## Response format

The response is in JSON format and includes these members:

| Name   | Description                                       |
| ------- | ------------------------------------------------- |
| status  | Either success or error.                          |
| code    | The error code, 0 means ok/success.               |
| data    | Result data, available in success result only     |
| message | The error message, available in error result only |

## Example request

```
https://app.fastcron.com/api/v1/cron_list?token=******
```

### Success response

```json
{"data":[{"id":123456,...}],"status":"success","code":0}
```

### Error response

```json
{"message":"Invalid API token, user not found.","status":"error","code":11}
```

## Rate limit

The rate limit for API requests is 1 request per second.
If you exceed that limit, you'll get HTTP error code `503 Service Temporarily Unavailable`.
