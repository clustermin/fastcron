---
title: How to set up cronjobs for Laravel
sidebar:
  label: Laravel cron
---

## About Laravel

Laravel is one of the most popular PHP frameworks.
With expressive syntax and ready-made packages, you can develop your websites rapidly from proof of concept to full-blown software-as-a-service.

## Running Laravel cronjobs, the old way

Unlike [Symfony](/tutorials/symfony-cron), Laravel has a [dedicated built-in package](https://laravel.com/docs/11.x/scheduling)
to set up and run cronjobs.

Once you schedule your tasks in your source code, you just need to set up one cronjob like this:

```sh
* * * * * cd /path-to-your-project && php artisan schedule:run > /dev/null 2>&1
```

Everything is okay, until it's not:

- Some error occurs, and it fails silently.
- You need to change the scheduled time. Now update your code, wait for code review and deployment.
- You need the script output from last Thursday, let's dig in the log file. By the way, do you do log rotation?
- You need to test-run one job. Work your magic.
- You deploy your code to a new server, and you forgot to add the cronjob. How do you prevent cron duplicate executions?

When your website grows, and you need to run a lot of scheduled tasks, just using the default task scheduler is not enough.

## The better way to run Laravel cronjobs

A much simpler way to run scheduled tasks is via the web.

Just create a route e.g. `/cron/cleanup` like this:

```php

use App\Action\Backend\Cleanup;
use App\Http\Controllers\CronController;
use Illuminate\Http\Request;

Route::get('/cron/cleanup', function (Cleanup $cleanup, Request $request) {
  if($request->input('key') !== 'SUPER_SECRET') {
    return 'Hello there!';
  }

  ob_start();

  $cleanup->run();

  return ob_get_clean();
});
```

Now you can visit the cronjob URL

```
https://backend.example.com/cron/cleanup?key=SUPER_SECRET
```

with your browser to test your script.

If you still want to go with crontab, you can add it like this:

```sh
30 5 * * * curl https://backend.example.com/cron/cleanup?key=SUPER_SECRET
```

However, I'd recommend you to use a [cronjob service](/) like FastCron that offers:

- Full cron logs including starting time, total time, script output, etc.
- Email notifications when your cronjob fails or backs up again.
- A nice simple interface for you and your team.
- and many more features.

[Give it a try](https://app.fastcron.com/signup) now, it's free!
