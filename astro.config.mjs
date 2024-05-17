import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.fastcron.com',
  trailingSlash: 'never',
  integrations: [sitemap(), tailwind(), starlight({
    title: 'Docs',
    disable404Route: true,
    favicon: '/images/logo.png',
    logo: {
      src: "./public/images/logo.png",
      alt: "FastCron",
      replacesTitle: false
    },
    sidebar: [
      // A group of links labelled "Constellations".
      {
        label: 'FastCron API',
        items: [
          { label: 'Start here', link: '/reference' },
          { label: 'Data structure', link: '/reference/data' },
          { label: 'cron_*', link: '/reference/cron' },
          { label: 'group_*', link: '/reference/group' },
          { label: 'account_*', link: '/reference/account' }
        ]
      },
    ],
  }, mdx())]
});