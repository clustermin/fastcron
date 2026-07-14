---
title: "PHP fatal error"
---

A **PHP Fatal Error** is a critical runtime error that causes your script to crash and stop executing immediately.

To help you fix it, I need to see the specific error message, but you can resolve the most common root causes by following the steps below.

## Common Causes and Quick Fixes
- **Call to undefined function**: You are calling a function that does not exist or hasn't been included. Check your spelling or ensure the necessary `require_once()` or `include()` file is present.
- **Class not found**: The script is trying to instantiate a class that PHP cannot locate. Verify your `use` statements, namespaces, or Composer autoloader.
- **Allowed memory size exhausted**: Your script ran out of RAM. Boost the limit temporarily in your code using `ini_set('memory_limit', '256M');`.
- **Maximum execution time exceeded:** The script took too long to run. Increase the limit using `set_time_limit(300);` or update your `php.ini` file.
- **Uncaught Exception / Error**: A critical problem occurred that was not wrapped in a proper `try/catch` block. Wrap the risky code inside a `try { ... } catch (\Throwable $e) { ... }` block.

## How to Find Your Error (If Your Screen is Blank)
If your website shows a completely blank screen (the "*White Screen of Death*"), error reporting is likely disabled on your server. 
You can force PHP to show the error message by adding these lines to the very top of your main PHP file:

```php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
```

Alternatively, look into your server's local error logs (such as `error_log` in your project folder, or Apache/Nginx log files) to extract the exact error message.

If your cron jobs encounter PHP fatal error, please feel free to email me at support@fastcron.com and I'll look into it.