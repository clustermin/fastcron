---
title: Can I run shell/bash script?
description: Can I run shell/bash script?
---

FastCron needs your web server to execute the script, it couldn't run a shell script directly.

If you're using PHP, please check if your hosting allows `exec` or `shell_exec`, then create a cron script to run the bash script like this:
```php
// /home/example.com/public_html/cron.php
echo shell_exec('/home/example.com/shell/backup.sh');
```
Once you confirm that the script can be triggered by visiting the URL\
`https://example.com/cron.php`\
with your browser, you can create a cron job to run script.

Most shared hosting providers disable those functions, so you won't be able to run shell/bash script with FastCron.