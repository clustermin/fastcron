---
title: "Connection timed out"
---

These error messages
```
Connection timeout after 15002 ms (28)
SSL connection timeout (28)
Failed to connect to www.example.com port 443 after 15000 ms: Timeout was reached (28)
```
meant that we couldn't connect to your server in 15 seconds.

The cause may be a network glitch, your server is down/unreachable/overloaded, your server temporarily blocked our connections.

If your cron jobs run less than 2880 times a day (every 30 seconds), FastCron shall automatically retry your cronjob once.

If the problem is persistent, please double-check your website and see if it's still online or not.
- If it's down, please contact your hosting provider ASAP and ask them to check and fix it for you.
- If it's up, ensure that the server load is normal.

If the problem is intermittent or occurs from a specific FastCron server, 
please generate MTR reports (`mtr --report`) to each of our IP addresses
and [send them to me](mailto:support@fastcron.com).

In any cases, you should add our [IP addresses](/ip-addresses) to your server whitelist.
Contact your hosting provider to check and do that for you.

If you're using shared hosting, it's recommended to lower the cronjob frequency, e.g. run cronjob every 5 minutes instead of every minute.