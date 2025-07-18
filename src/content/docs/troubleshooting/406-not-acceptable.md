---
title: 406 Not Acceptable
---

If you checked your cronjob output and found HTTP status code `406 Not Acceptable` with output like this:
```html "406 Not Acceptable" "LiteSpeed"
HTTP/1.1 406 Not Acceptable
Cache-Control: private, no-cache, no-store, must-revalidate, max-age=0
Pragma: no-cache
Content-Type: text/html
Content-Length: 1131
Accept-Ranges: bytes
Server: LiteSpeed

...
```

To fix this, click **Edit** cronjob, in the section **Send HTTP request**, update **User Agent** with this:

```json
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36
```
then click **Save changes**.

If the problem still persists, please email us at support@fastcron.com.