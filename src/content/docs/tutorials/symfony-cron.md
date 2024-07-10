---
title: How to set up cronjobs for Symfony
sidebar:
  label: Symfony cron
---

## About Symfony

Symfony is one of the most popular PHP frameworks.
It also provides multiple components used by other frameworks like Laravel.

## Running Symfony cronjobs, the old way

Unlike Laravel, Symfony doesn't have a recommended way to run cronjobs.

Usually, you create a command using the `make` bundle:

```bash
php bin/console make:command
```

For example, to create the command `app:cleanup` which will do the daily cleanup tasks,
`make` will generate the file `CleanupCommand`.
You can then update the file to do your tasks like this:

```php 
// src/Command/CleanupCommand.php
<?php
namespace App\Command;

use App\Action\Backend\Cleanup;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:cleanup',
    description: 'Run daily cleanup',
)]
class CleanupCommand extends Command
{
    public function __construct(Cleanup $cleanup)
    {
        parent::__construct();
    }


    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $this->cleanup->run();
        $io->success('Command executed!');

        return Command::SUCCESS;
    }
}
```

To run it once a day, at 5:30, you need to set up a cronjob on your server like this:

```sh
30 5 * * * cd /path/to/project/root && php bin/console app:cleanup
```

Everything is okay, until it's not:
- Some error occurs, and it fails silently.
- You need to change the time pattern, and you forgot the crontab syntax (`minute hour day month weekday` by the way).
- You need the script output from last Thursday, and there's no way to retrieve it.
- You need to test-run it. Now log in to your server and do your thing.
- You changed the server, and you forgot to add the cronjob.

Some say cronjobs are not to be trusted, let's add a cronjob monitoring service.
Great, now you have 2 places to add the cron tab expressions.
Every time you update your cronjobs, you'll need to do it twice!

## The better way to run Symfony cronjobs

A much simpler way to run cronjob is via the web.

Just create a route e.g. `/cron/cleanup` like this:

```php 
// src/Controller/CronController.php
<?php
namespace App\Controller;

use App\Action\Backend\Cleanup;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CronController extends AbstractController
{

    #[Route('/cron/cleanup')]
    public function cleanup(Cleanup $cleanup, Request $request): Response
    {
      if($request->get('key') !== 'SUPER_SECRET') {
        return new Response('Hello there!');
      }

      ob_start();

      $cleanup->run();

      $contents = ob_get_clean();
      return new Response($contents, headers: ['Content-Type' => 'text/plain']);
    }
}
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

However, I'd recommend you to use a [web cron](/) like FastCron that offers:

- Full cron logs including starting time, total time, script output, etc.
- Email notifications when your cronjob fails or backs up again.
- A nice simple interface for you and your team.
- and many more features.

[Give it a try](https://app.fastcron.com/signup) now, it's free!