---
title: "Connection refused"
---

The error message means FastCron couldn't connect to your web server because it rejected our connection. Your server may be too busy and couldn't handle the request. Or it could temporarily block our IP address due to too many requests.

If the error is persistent or occurs frequently, please check your server's firewall and status (CPU/memory usage) as well as its configuration (max connections, max children, etc). You should also try decreasing the cronjob interval and see if it helps.

