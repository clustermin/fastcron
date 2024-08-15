---
title:  Does FastCron follow redirection?
description: Yes, FastCron will follow HTTP redirection.
---

Yes, FastCron follows HTTP redirection (with HTTP status code 301, 302, 307, or 308).

This feature helps in these cases:
- You changed the script URL with redirection.
- The cron script needs to split into several steps (e.g. Akeeba backup).

If you're using PHP, you should use `header` and `exit` to redirect your script:
```php
// don't print/echo any output before this

header('Location: /new/url.php?next=200');
exit;
```

FastCron will not follow parse the HTML or run JavaScript, so these won't work:
```html
<meta http-equiv="refresh" content="0;url=/new/url.html">

<script>
    window.location = '/new/url.html';
</script>
```