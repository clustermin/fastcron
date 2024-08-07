---
title: "Connection timed out"
sidebar:
  label: Connection timed out
---

These error messages
```
Connection timeout after 15002 ms (28)
SSL connection timeout (28)
```
meant that we couldn't connect to your server in 15 seconds.

The cause may be a network glitch, your server is down/unreachable, etc.

If your cronjobs run less than 1440 times a day (every minute), FastCron shall automatically retry your cronjob.

If the problem is persistent, please double-check your website and see if it's still online or not.
- If it's down, please contact your hosting provider ASAP and ask them to check and fix it for you.
- If it's up, ensure that you add our [IP addresses](/ip-addresses) to your server whitelist. Contact your hosting provider to check and do that for you.

If the problem is intermittent, please generate MTR reports (`mtr --report`) to each of our IP addresses and [send them to me](mailto:support@fastcron.com).