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
          { label: 'Tutorials', link: '/tutorials' }
        ]
      },
      {
        label: 'Guides',
        autogenerate: { directory: 'guides' }
      },
      {
        label: 'Troubleshooting',
        autogenerate: { directory: 'troubleshooting' }
      }
    ],
  }, mdx())]
});