import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '星光',

  lastUpdated: true,

  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Hosihikari'
      }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh_hans: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示细节',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '返回',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '选择',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '切换上一个',
                  navigateDownKeyAriaLabel: '切换下一个',
                  closeText: '关闭',
                  closeKeyAriaLabel: '关闭',
                }
              }
            }
          }
        }
      }
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
          copyright: '© 2023 星光 GFDL-1.3 & LAL-1.3'
        },

        lastUpdated: {
          text: 'Last updated'
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
          copyright: '© 2023 星光 GFDL-1.3 & LAL-1.3'
        },

        lastUpdated: {
          text: '更新于'
        }
      }
    }
  }
})
