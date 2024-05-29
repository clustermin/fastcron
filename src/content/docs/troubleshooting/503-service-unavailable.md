---
title: 503 Service Unavailable
---

HTTP status code 503 Service Unavailable means your web server is temporarily overloaded (high CPU usage, high memory usage, etc).

If the error occurs when your cronjob execution exceeds a certain time e.g. 60 seconds, then there must be some timeout limit on your server (web server, load balancer, etc).

In this case, you should either increase the timeout limit (search for web server name + “increase timeout” e.g. “nginx increase timeout” or “varnish increase timeout”); or decrease the cron script execution time by limiting the number of items processed per execution, etc. Most scripts/plugins have that setting.