import {DefaultTheme, defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MSL帮助文档",
    description: "MSL帮助文档 Powered by Vitepress",
    lang: "zh-Hans",
    cleanUrls: true,
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
    ],
    markdown:{
        lineNumbers: true,
    },

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        darkModeSwitchTitle: "切换到深色模式",
        lightModeSwitchTitle: "切换到浅色模式",
        returnToTopLabel: "回到顶部",
        outline: {label: "在这一页上"},
        search: {
            provider: 'local',
            options:{
                locales:{
                    zh: {
                        translations: {
                          button: {
                            buttonText: '搜索文档',
                            buttonAriaLabel: '搜索文档'
                          },
                          modal: {
                            noResultsText: '无法找到相关结果',
                            resetButtonTitle: '清除查询条件',
                            footer: {
                              selectText: '选择',
                              navigateText: '切换',
                              closeText: '关闭'
                            }
                          }
                        }
                      }
                }
            }
        },
        logo: '/logo.png',
        socialLinks: [
            {icon: 'github', link: 'https://github.com/MSLTeam/MSL'},
            {icon: { svg: `<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" ></path></svg>` },link: 'https://qm.qq.com/q/H8ZZuIeRcO'}
        ],
        footer: {
            message: 'Released under the GNU GPLv3 License & Powered by <a href="https://vitepress.dev/">VitePress</a>.',
            copyright: 'Copyright © 2021-2024 MSLTeam & <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">粤ICP备2023094648号-2 </a>'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: 'https://github.com/MSLTeam/MSL-Docs/edit/main/docs/:path',
            text: "在Github上编辑此页"
        },

        nav: [
            {text: '主页', link: '/'},
            {text: '使用文档', link: '/start'},
            {text: '开发人员名单', link: '/info'}
        ],

        sidebar: {
            '/': [
                {
                    text: 'MSL | 使用文档',
                    collapsed: false,
                    items: [
                        {text: '使用协议', link: '/eula'},
                        {text: '使用MSL开服', link: '/start'},
                        {text: '进行服务器配置', link: '/config'},
                        {text: '内网穿透配置', collapsed: true,
                            items: [
                                {text: 'MSL自带', link: '/frpc#msl自带'},
                                {text: 'OpenFrp', link: '/frpc#使用openfrp'}
                            ]
                        },
                        {text: '使用MSL联机', link: '/p2p'},
                        {text: '软件本体配置', link: '/software'},
                        {text: '开发人员名单', link: '/info'}
                    ]
                }
            ]
        },
    }
})



