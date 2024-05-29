---
title: 504 Gateway Timeout
---

If your cronjob always returns HTTP status code `504 Gateway Timeout` after an exact time like 60 seconds or 120 seconds, then that means there's a timeout limit in your web server settings.

Generally, it happens when the web server and server-side script processes are separate, e.g. Nginx and PHP-FPM, or Kestrel/IIS and ASP.NET, and the server-side script are taking too long to execute and return the output, the web server will time out and return the HTTP status 504 back to the browser. 

There are some ways to resolve the issue:

- Increase the web server's timeout limit to a bigger value, up to the server-side script's max execution time. For example, increase Nginx's `fastcgi_read_timeout` to the same value as PHP's `max_execution_time`.

- Decrease the server-side script's execution time, e.g. by limiting the number of items processed per execution.

- Make the server-side script continue to execute even when the web server stops waiting for it, e.g. enable PHP's `ignore_user_abort`.

If you don't want to treat 504 Gateway Timeout as a failure, you can ignore HTTP status codes.