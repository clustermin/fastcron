import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.fastcron.com',
  trailingSlash: 'never',
  integrations: [starlight({
    title: 'FastCron',
    favicon: '/favicon.svg',
    sidebar: [
      {
        label: 'Getting started',
        items: [
          { label: 'Tutorials', link: '/tutorials' },
          { label: 'Notification channels', link: '/integrations' }
        ]
      },
      {
        label: 'Guides',
        autogenerate: { directory: 'guides' }
      },
      {
        label: 'Troubleshooting',
        collapsed: true,
        autogenerate: { directory: 'troubleshooting' }
      },
      {
        label: 'FastCron API',
        items: [
          { label: 'Introduction', link: '/reference' },
          { label: 'Data structure', link: '/reference/data' },
          { label: 'cron_*', link: '/reference/cron' },
          { label: 'group_*', link: '/reference/group' },
        ]
      }
    ],
  }, mdx())]
});