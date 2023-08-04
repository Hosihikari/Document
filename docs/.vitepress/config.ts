import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '星光',

  lastUpdated: true,

  sitemap: {
    hostname: 'https://hshkr.top',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Hosihikari'
      }
    ],

    search: {
      provider: 'local'
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      description: '.NET plugin framework for BDS',

      themeConfig: {
        editLink: {
          pattern: 'https://github.com/Hosihikari/Documentation/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },

        footer: {
          message: 'Powered by Vitepress',
          copyright: '© 2023 星光 GFDL-1.3'
        }
      }
    },
    zh_hans: {
      label: '简体中文',
      lang: 'zh-Hans',
      description: 'BDS .NET插件框架',

      themeConfig: {
        editLink: {
          pattern: 'https://github.com/Hosihikari/Documentation/edit/main/docs/:path',
          text: '在GitHub上编辑此页面'
        },

        footer: {
          message: '由Vitepress提供支持',
          copyright: '© 2023 星光 GNU自由文档许可证v1.3'
        }
      }
    }
  }
})
