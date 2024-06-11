import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '星光',

  lastUpdated: true,

  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Hosihikari'
      },
      {
        icon: {
          svg: '<?xml version="1.0" encoding="utf-8"?><svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.563 28.844c-7.104 0-7.104-10.651 0-10.651 7.099 0 7.099 10.651 0 10.651zM12.932 16.636c-4.437 0-4.437-6.663 0-6.663 4.443 0 4.443 6.663 0 6.663zM23.797 6.24h-8.891c-4.532 0.005-8.204 3.677-8.209 8.208v8.891c0 4.531 3.677 8.203 8.209 8.203h8.891c2.172 0 4.26-0.864 5.801-2.401 1.537-1.541 2.401-3.624 2.401-5.801v-8.891c0-4.531-3.672-8.208-8.203-8.208zM5.328 3.12c0 3.552-5.328 3.552-5.328 0s5.328-3.552 5.328 0z"/></svg>'
        },
        link: 'https://www.nuget.org/profiles/Hosihikari'
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
      description: 'Cross-platform Minecraft server implementation',

      themeConfig: {
        editLink: {
          pattern: 'https://github.com/Hosihikari/Documentation/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },

        footer: {
          message: 'Powered by Vitepress  Artworks by TksYanruo',
          copyright: '© 2024 星光 GFDL-1.3 & LAL-1.3'
        },

        lastUpdated: {
          text: 'Last updated'
        }
      }
    },
    zh_hans: {
      label: '简体中文',
      lang: 'zh-Hans',
      description: '跨平台 Minecraft 服务器实现',

      themeConfig: {
        editLink: {
          pattern: 'https://github.com/Hosihikari/Documentation/edit/main/docs/:path',
          text: '在GitHub上编辑此页面'
        },

        footer: {
          message: '由Vitepress提供支持 立绘来自Tks言若',
          copyright: '© 2024 星光 GFDL-1.3 & LAL-1.3'
        },

        lastUpdated: {
          text: '更新于'
        }
      }
    }
  }
})
