---
title: FastCron API
description: "FastCron API Docs. Overview, request and response format."
---

With an API Token, you can work with your cronjobs, groups, and account settings without logging in.

The API token is a 32-character string generated for all FastCron users.
You can visit your **Profile** page to copy your API token.

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

You can authenticate by sending your API token in the headers or POST body.

### HTTP headers
You can use the headers `Authorization: Bearer` to authenticate your API requests.

```sh "API-TOKEN"
curl --request GET \
    --url "https://app.fastcron.com/api/v1/account_get" \
    --header "Authorization: Bearer API-TOKEN"
```

### POST
Send all data including the `token` to:

```
https://app.fastcron.com/api/v1/[function]
```

The POST body must be either query string or JSON format:

```txt "API-TOKEN"
token=API-TOKEN&id=1&name=weekly
```

```json "API-TOKEN"
{"token":"API-TOKEN","id":1,"name":"weekly"}
```

You can include your API token in the GET query string, but it's not recommended.

## Response format

The response is in JSON format and includes these fields:

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
