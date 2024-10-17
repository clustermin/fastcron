---
title:  Duplicate cron executions with CloudFront
description: CloudFront retrying GET requests results in duplicate executions.
---

If your cronjob takes more than 30 seconds to complete, CloudFront will retry with another request.

https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-request-timeout

You can try one of these to prevent it:
- Switch the HTTP method to POST (if your script supports it), then CloudFront returns with a 504 Gateway Timeout error, which you can ignore.
- Reduce the execution time by splitting tasks/items into smaller chunks.
- Increase the timeout limit in CloudFront to 60 seconds: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout
 
I hope this helps.
