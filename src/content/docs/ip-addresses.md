---
title: FastCron IP addresses list
description: "We are using several servers to process your cronjobs. Please whitelist them at your firewall."
---

We are using several servers to process your cronjobs.

Here are our IP addresses:
```
159.223.144.10
143.244.166.206
147.182.184.93
```

Our IPv6 addresses:
```
2604:a880:400:d0::33:f001
2604:a880:400:d0::25cb:b001
2604:a880:400:d0::18f1:f001
```

Our /64 CIDR (for adding to Cloudflare List):
```
2604:a880:400:d0::/64
```

You can fetch our IP list at:
- https://www.fastcron.com/ip.txt (all IP)
- https://www.fastcron.com/ipv4.txt (IPv4 only)
- https://www.fastcron.com/ipv6.txt (IPv6 only)

Please ensure that we can reach your cronjob URLs from these IP addresses.

## Subscribe to IP changes
If you want to receive email notifications when we update our IP addresses,
please log in to FastCron, visit Account > [Profile](https://app.fastcron.com/user), 
check the box **Receive email notifications about FastCron IP change**.


## Whitelist FastCron IP addresses
See [How to whitelist FastCron IP addresses at Cloudflare](/guides/cloudflare-whitelist).