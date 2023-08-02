import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: '星光',
  description: 'BDS .NET plugin framework',

  lastUpdated: true,

  sitemap: {
    hostname: 'https://hshkr.top',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  themeConfig: {
    siteTitle: '星光',

    editLink: {
      pattern: 'https://github.com/Hosihikari/Documentation/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hosihikari' }
    ],

    footer: {
      message: 'Powered by Vitepress',
      copyright: '© 2023 星光 GFDL-1.3'
    },

    search: {
      provider: 'local'
    }
  }
})
